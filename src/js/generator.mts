//@ts-ignore
import BindingConfig from "binding.config.js";
import renderBinding from "./lib/render/binding.mjs";
import renderDeclaration from "./lib/render/declaration.mjs";
import GenerateContext from "./lib/GenerateContext.mjs";

export default function render (
    compilation: CS.CppAst.CppCompilation,
    bindingOutputPath: string,
    dtsOutputPath: string
) {
    const includes = BindingConfig.includes;
    const excludes = BindingConfig.excludes;
    const generateContext = new GenerateContext(compilation, excludes, BindingConfig.bindingManually?.tsName || {});

    if (!includes || includes == '*') { 
        generateContext.findAllClass();
        
    } else {
        includes
            // do distinct
            .filter((value: string, index: number, arr: string[]) => arr.indexOf(value) == index)
            .forEach((signature: string) => {
                generateContext.addBaseUsage(signature);
            });
        generateContext.expandCurrentUsage();
    }

    const bindingContent = renderBinding(generateContext, BindingConfig);
    const dtsContent = renderDeclaration(generateContext);

    CS.System.IO.File.WriteAllText(bindingOutputPath, bindingContent);
    CS.System.IO.File.WriteAllText(dtsOutputPath, dtsContent);
} 