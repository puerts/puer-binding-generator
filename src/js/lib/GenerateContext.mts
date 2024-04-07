import { csForEach } from "./csUtil.mjs";
import { TSClass } from "./definitions.mjs";

export interface GenerateBlackList {
    namespaces: string[]
    types: string[]
    members: string[]
}

export default class GenerateContext {
    private readonly usedCls: Map<CS.CppAst.CppClass, TSClass> = new Map();
    public readonly excludes: GenerateBlackList;
    public readonly specialTSNames: { [key: string]: string };
    constructor(
        private readonly compilation: CS.CppAst.CppCompilation,
        excludes?: GenerateBlackList,
        specialTSNames?: { [key: string]: string }
    ) {
        this.excludes = excludes || { types: [], members: [], namespaces: [] };
        this.excludes.types = this.excludes.types || [];
        this.excludes.members = this.excludes.members || [];
        this.excludes.namespaces = this.excludes.namespaces || [];
        this.specialTSNames = specialTSNames || {};
    }
    public findAstClass(clsFullName: string): CS.CppAst.CppClass | null {
        const classNamePart = clsFullName.split('::');
        let result = null;

        let currentNamespace: CS.CppAst.CppCompilation | CS.CppAst.CppNamespace | CS.CppAst.CppClass = this.compilation;
        let nsNameOrClsName = classNamePart.shift();
        while (classNamePart.length != 0) {
            let matchedNamespace: CS.CppAst.CppCompilation | CS.CppAst.CppNamespace | CS.CppAst.CppClass | null = null;
            if (currentNamespace.Namespaces) csForEach(currentNamespace.Namespaces, (item) => {
                if (item.Name == nsNameOrClsName) matchedNamespace = item;
            });
            if (!matchedNamespace && currentNamespace.Classes) csForEach(currentNamespace.Classes, (cls) => {
                if (cls.Name == nsNameOrClsName) matchedNamespace = cls;
            });

            if (!matchedNamespace) {
                console.warn(`find ${nsNameOrClsName} failed`)
                return null;
            }
            currentNamespace = matchedNamespace;
            nsNameOrClsName = classNamePart.shift();
        }

        csForEach(currentNamespace.Classes, (cls) => {
            if (cls.Name == nsNameOrClsName) result = cls;
        });
        return result;
    }
    public getAllUsedCls() {
        return this.usedCls.values();
    }
    public getAllHeaders() {
        const headers = [];
        for (const astCls of this.usedCls.keys()) {
            let header = astCls.SourceFile;
            // sometime the class will define as incomplete type. so we need to find the first member to get the real header path
            if (astCls.Fields.Count) { header = astCls.Fields.get_Item(0).SourceFile; }
            else if (astCls.Functions.Count) { header = astCls.Functions.get_Item(0).SourceFile; }
            else if (astCls.Constructors.Count) { header = astCls.Constructors.get_Item(0).SourceFile; }
            if (header) headers.push(header);
        }
        return headers;
    }

    protected addRefUsage(name: string) {
        const astClass = this.findAstClass(name);

        if (!astClass) return;//console.warn(`can't find class ${clsName} in compilation`);;
        let tsCls;
        if (!this.usedCls.has(astClass)) {
            // console.log(astClass.FullName, DTSClass.isNotSupportedClass(astClass));
            if (TSClass.isNotSupportedClass(this, astClass)) return;
            tsCls = new TSClass(this, astClass)
            this.usedCls.set(astClass, tsCls);
            return tsCls

            // template not supported yet
            // if (astClass.TemplateKind == CS.CppAst.CppTemplateKind.TemplateSpecializedClass) {
            //     csForEach(astClass.TemplateSpecializedArguments, item => {
            //         if (item.TypeKind == CS.CppAst.CppTypeKind.Function) return;
            //         this.addRefUsage(item.FullName);
            //     })
            // }
        }
    }
    public expandCurrentUsage() {
        for (const cls of this.usedCls.values()) {
            cls.baseTypeCppFullName && this.addRefUsage(cls.baseTypeCppFullName);
            cls.ctor.overloads.forEach((func) => {
                const type = func.returnType.rawType;
                if (!type.isPrimitive) this.addRefUsage(type.cppName)

                func.params.forEach((param) => {
                    const type = param.type.rawType;
                    if (!type.isPrimitive) this.addRefUsage(type.cppName)

                    if (param.astField.InitExpression && param.astField.InitExpression.Kind == CS.CppAst.CppExpressionKind.DeclRef) {
                        const dvCls = this.addRefUsage(param.astField.InitExpression.toString().split('::').slice(0, -1).join('::'));
                        if (dvCls) dvCls.addMember(param.astField.InitExpression.toString().split('::').slice(-1)[0]);
                    }
                })
            })
            cls.fields.forEach((field) => {
                const type = field.type.rawType;
                if (!type.isPrimitive) this.addRefUsage(type.cppName)
            })
            cls.functions.forEach((overload) => {
                overload.overloads.forEach((func) => {
                    const type = func.returnType.rawType;
                    if (!type.isPrimitive) this.addRefUsage(type.cppName)

                    func.params.forEach((param) => {
                        const type = param.type.rawType;
                        if (!type.isPrimitive) this.addRefUsage(type.cppName)

                        if (param.astField.InitExpression && param.astField.InitExpression.Kind == CS.CppAst.CppExpressionKind.DeclRef) {
                            const dvCls = this.addRefUsage(param.astField.InitExpression.toString().split('::').slice(0, -1).join('::'));
                            if (dvCls) dvCls.addMember(param.astField.InitExpression.toString().split('::').slice(-1)[0]);
                        }
                    })
                });
            });
        }

    }
    public addBaseUsage(signature: string) {
        const name = signature.split('::').slice(0, -1).join('::');
        const astClass = this.findAstClass(name);

        if (!astClass) {
            console.warn(`can't find class ${name} in compilation`);
            return
        }
        if (!this.usedCls.has(astClass)) {
            if (TSClass.isNotSupportedClass(this, astClass)) return;
            this.usedCls.set(astClass, new TSClass(this, astClass));
        }
        const cls = this.usedCls.get(astClass) as TSClass;
        if (signature.endsWith("::*")) {
            cls.addAllMember();
        } else {
            cls.addMember(signature);
        }
    }

    public findAllClass() {
        this.iterateNamespace(this.compilation)
    }
    private iterateNamespace(namespace: CS.CppAst.CppCompilation | CS.CppAst.CppNamespace | CS.CppAst.CppClass) {
        if (namespace.Classes) csForEach(namespace.Classes, (astClass: CS.CppAst.CppClass) => {
            if (!this.usedCls.has(astClass)) {
                if (TSClass.isNotSupportedClass(this, astClass)) return;
                const tsCls = new TSClass(this, astClass)
                this.usedCls.set(astClass, tsCls);
                tsCls.addAllMember();
            }

            this.iterateNamespace(astClass);
        });
        if (!(namespace instanceof CS.CppAst.CppClass) && namespace.Namespaces) csForEach(namespace.Namespaces, (item) => {
            this.iterateNamespace(item)
        });
    }
}