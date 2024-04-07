// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Puerts;
using Puerts.Editor.Generator;

class PuertsCppGenerator
{
    class JSLoader : ILoader
    {
        private string currentDirectory;
        private string binaryDirectory;
        public JSLoader(string cwd = null)
        {
            currentDirectory = String.IsNullOrEmpty(cwd) ? Environment.CurrentDirectory : cwd;
            binaryDirectory = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
        }

        public bool FileExists(string filepath)
        {
            if (filepath == "binding.config.js") return true;
            return System.IO.File.Exists(System.IO.Path.Combine(binaryDirectory, "../js", filepath));
        }

        public string ReadFile(string filepath, out string debugpath)
        {
            if (filepath == "binding.config.js")
                debugpath = System.IO.Path.Combine(currentDirectory, filepath);
            else
                debugpath = System.IO.Path.Combine(binaryDirectory, "../js", filepath);
            return System.IO.File.ReadAllText(debugpath);
        }
    }

    [Configure]
    public static class CppAstDelaration
    {
        private static void AddAllBaseTypeToList(Type t, List<Type> res)
        {
            while (t != typeof(System.Object))
            {
                res.Add(t);
                t = t.BaseType;
            }
        }

        [Typing]
        public static List<Type> TypingList
        {
            get
            {
                var res = new List<Type>();
                res.Add(typeof(System.Console));
                res.Add(typeof(System.IO.Path));
                res.Add(typeof(System.IO.File));
                res.Add(typeof(CppAst.CppContainerList<CppAst.CppClass>));
                res.Add(typeof(System.Collections.Generic.List<CppAst.CppClass>));
                AddAllBaseTypeToList(typeof(CppAst.CppTypeWithElementType), res);
                AddAllBaseTypeToList(typeof(CppAst.CppExtensions), res);
                AddAllBaseTypeToList(typeof(CppAst.CppTemplateArgument), res);
                AddAllBaseTypeToList(typeof(CppAst.CppFunctionType), res);
                AddAllBaseTypeToList(typeof(CppAst.CppExpression), res);
                AddAllBaseTypeToList(typeof(CppAst.CppRawExpression), res);
                AddAllBaseTypeToList(typeof(CppAst.CppCompilation), res);
                AddAllBaseTypeToList(typeof(CppAst.CppClass), res);
                AddAllBaseTypeToList(typeof(CppAst.CppFunction), res);
                AddAllBaseTypeToList(typeof(CppAst.CppField), res);
                AddAllBaseTypeToList(typeof(CppAst.CppEnum), res);
                AddAllBaseTypeToList(typeof(CppAst.CppNamespace), res);
                AddAllBaseTypeToList(typeof(CppAst.CppBaseType), res);
                AddAllBaseTypeToList(typeof(CppAst.CppParameter), res);
                AddAllBaseTypeToList(typeof(CppAst.CppAttribute), res);
                return res;
            }
        }

    }

    static int Main()
    {
        var loader = new JSLoader();
        var jsEnv = new JsEnv(loader);
        
        FileExporter.ExportDTS(Path.Combine(Environment.CurrentDirectory, "../src/js/dts/"), loader);
        
        JSObject BindingConfig = jsEnv.ExecuteModule("binding.config.js").Get<JSObject>("default");
        string basePath = BindingConfig.Get<string>("base");
        Action<CppAst.CppCompilation, string, string> doGenerate 
            = jsEnv.ExecuteModule("generator.mjs").Get<
                Action<CppAst.CppCompilation, string, string>
            >("default");
        
        var config = new CppAst.CppParserOptions();
        config.AdditionalArguments.Add("-std=c++17");
        
        JSObject includePaths = BindingConfig.Get<JSObject>("includePaths");
        int includePathsCount = includePaths.Get<int>("length");
        for (int i = 0; i < includePathsCount; i++)
        {
            config.IncludeFolders.Add(includePaths.Get<string>("" + i));
        }
        JSObject defines = BindingConfig.Get<JSObject>("defines");
        int definesCount = defines.Get<int>("length");
        for (int i = 0; i < definesCount; i++)
        {
            config.Defines.Add(defines.Get<string>("" + i));
        }
        
        JSObject headers = BindingConfig.Get<JSObject>("headers");
        int headersCount = headers.Get<int>("length");
        List<string> headerPaths = new();
        for (int i = 0; i < headersCount; i++)
        {
            string headerPath = headers.Get<string>("" + i);
            // if (!(headerPath.StartsWith("<") && headerPath.EndsWith(">")))
            //     string headerRelativePath = Path.GetRelativePath(basePath, headerPath);
            headerPaths.Add(headerPath);
        }
        var compilation = CppAst.CppParser.ParseFiles(headerPaths, config);
        if (compilation.HasErrors)
        {
            System.Console.WriteLine(compilation.Diagnostics);
        }

        var BindingConfigOutput = BindingConfig.Get<JSObject>("output");
        string bindingOutputPath = "";
        string dtsOutputPath = "";
        if (BindingConfigOutput != null) 
        {
            bindingOutputPath = BindingConfigOutput.Get<string>("binding");
            dtsOutputPath = BindingConfigOutput.Get<string>("dts");
        }
        if (string.IsNullOrEmpty(bindingOutputPath) || string.IsNullOrEmpty(dtsOutputPath))
        {
            var outputDir = Path.Combine(Environment.CurrentDirectory, "output");
            System.IO.Directory.CreateDirectory(outputDir);
            if (string.IsNullOrEmpty(bindingOutputPath))
                bindingOutputPath = Path.Combine(outputDir, "/all.binding.cpp");
            if (string.IsNullOrEmpty(dtsOutputPath))
                dtsOutputPath = Path.Combine(outputDir, "/index.d.ts");
        } else {
            System.IO.Directory.CreateDirectory(Path.GetDirectoryName(bindingOutputPath));
            System.IO.Directory.CreateDirectory(Path.GetDirectoryName(dtsOutputPath));
        }

        doGenerate(
            compilation, 
            bindingOutputPath,
            dtsOutputPath
        );
    
        // Directory.CreateDirectory(Path.GetDirectoryName(outputPath));
        // File.WriteAllText(Path.Combine(Environment.CurrentDirectory, outputPath), renderResult);
        return 0;
    }
}