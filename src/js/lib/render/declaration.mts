import { TSClass, TSType } from "../definitions.mjs";
import GenerateContext from "../GenerateContext.mjs";

export default function renderDeclaration(
    usageCollector: GenerateContext
) {
    let ret = 'declare namespace SC {\n\n'

    const allClsEnum = usageCollector.getAllUsedCls();
    const allCls = [];
    for (const cls of allClsEnum) {
        allCls.push(cls);
        ret += renderClass(cls, usageCollector) + '\n\n';
    }

    return ret + "\n\n}";
}

function addParamPrefix(type: TSType) {
    if (type.name == 'va_list')
        return '...$'
    return '$' // prevent name to be JS keyword
}
function renderTypeName(type: TSType) {
    const name = type.name;
    if (name == 'va_list')
        return 'any[]'
    return cppFullNameToTsFullName(name);
}

function renderClass(cls: TSClass, usageCollector: GenerateContext) {
    const debug = cls.cppFullName.indexOf('PepperPerMessageEncrypter') > -1;
    let ret = ''
    let baseClsStr = '';
    if (cls.baseTypeCppFullName) {
        const baseAstCls = usageCollector.findAstClass(cls.baseTypeCppFullName);
        if (baseAstCls) {
            if (baseAstCls.IsAbstract && baseAstCls.Destructors.Count == 0)
                baseClsStr = ' implements ' + cppFullNameToTsFullName(cls.baseTypeCppFullName);
            else if (baseAstCls.TemplateKind == CS.CppAst.CppTemplateKind.NormalClass)
                baseClsStr = ' extends ' + cppFullNameToTsFullName(cls.baseTypeCppFullName);
            // todo support non normal class
        }
    }
    const nsAndClsName = cppFullNameToTsNSAndClsName(cls.cppFullName)
    if (nsAndClsName.namespaces.length != 0) {
        ret += nsAndClsName.namespaces.map((ns) => {
            return `namespace ${ns} {\n`
        }).join('\n');
    }
    ret += `class ${nsAndClsName.className}${baseClsStr} { \n`;

    if (cls.ctor.overloads.length != 0) {
        ret += cls.ctor.overloads.map((overload) => {
            return `    constructor(${overload.params.map((param) => {
                // debug && console.log(param.name, 'ctor default param:', param.defaultExpressionTS)
                return `${addParamPrefix(param.type)}${param.name}: ${renderTypeName(param.type)}${param.defaultExpressionTS ? ' = ' + param.defaultExpressionTS : ''}`
            }).join(', ')});`
        }).join('\n');
        ret += '\n\n';
    }

    if (cls.functions.length != 0) {
        ret += cls.functions.map((func) => {
            // debug && console.log('func:', func.name)
            return func.overloads.map((overload) => {
                return `    public ${overload.isStatic ? 'static ' : ''}${fixInvalidMemberName(overload.name)}(${overload.params.map((param) => {
                    // debug && console.log(param.name, 'fn default param:', param.defaultExpressionTS)
                    return `${addParamPrefix(param.type)}${param.name}: ${renderTypeName(param.type)}${param.defaultExpressionTS ? ' = ' + param.defaultExpressionTS : ''}`
                }).join(', ')}) : ${renderTypeName(overload.returnType)};`
            }).join('\n');
        }).join('\n\n');
        ret += '\n\n';
    }

    if (cls.fields.length != 0) {
        ret += cls.fields.map((field) => {
            // debug && console.log('field:', field.name)
            return `    public ${field.isStatic ? 'static ' : ''}${fixInvalidMemberName(field.name)}: ${renderTypeName(field.type)};`
        }).join('\n\n');
        ret += '\n\n';
    }
    ret += '    [Symbol.dispose](): any; \n';
    ret += '\n}'
    if (nsAndClsName.namespaces.length != 0) {
        ret += nsAndClsName.namespaces.map((ns) => {
            return `\n}`
        }).join('\n');
    }
    return ret
}

function fixInvalidMemberName(name: string) {
    if (name.match(/[\=\*\+\-\/\<\>\s\[\]]/g))
        return `['${name}']`
    return name;
}
function cppFullNameToTsFullName(name: string) {
    return name.replace(/::/g, '.')
}
function cppFullNameToTsNSAndClsName(name: string) {
    if (name.indexOf('::') == -1) {
        return { namespaces: [], className: name };

    } else {
        const parts = name.split('::');
        return { namespaces: parts.slice(0, parts.length - 1), className: parts[parts.length - 1] };
    }

}