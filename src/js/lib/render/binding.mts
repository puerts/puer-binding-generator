import { TSClass, TSType, TSVariable } from "../definitions.mjs";
import GenerateContext from "../GenerateContext.mjs";

function renderBinding(
    usageExpander: GenerateContext,
    BindingConfig: any
) {
    const allClsEnum = usageExpander.getAllUsedCls();
    const allCls = [];
    for (const cls of allClsEnum) {
        allCls.push(cls);
    }

    const allHeaders = usageExpander.getAllHeaders();

    return `
#pragma once
#include "Puerh.h"
${(BindingConfig.contentFix?.bindingPrefixHeader || []).map((headerPath: string) => {
    return `#include "${headerPath}"`
})}
${(function () {
            const includePaths = BindingConfig.includePaths

            return allHeaders
                .map((header) => {
                    let converted = false;
                    header = header.replace(/\\/g, '/');
                    includePaths.forEach((includePath: string) => {
                        if (header.startsWith(includePath) && !converted) {
                            header = header.replace(includePath, '')
                            if (header.startsWith('/')) header = header.slice(1)
                            converted = true;
                        }
                    })
                    return `#include "${header}"`
                })
                .filter((val, index, arr) => {
                    // todo
                    // if (val.startsWith('#include "C:')) return false;
                    // if (val.startsWith('#include "OpenGL')) return false;
                    // if (val.startsWith('#include "scAsset')) return false;
                    return arr.indexOf(val) == index;
                })
                .join('\n')
        })()}
${allCls.map((cls) => {
            return renderClassDeclare(cls, BindingConfig.bindingManually?.fullnames) + renderClassOverloadWithDefaultValue(cls)
        }).join('')}
static void ${BindingConfig.output?.bindingFunctionName || 'ALL_PUER_BINDING'}() {
    ${allCls.map((cls) => {
            return renderClassBinding(cls, BindingConfig.bindingManually?.fullnames)
        }).join('')}
}
    `
}

function renderClassDeclare(cls: TSClass, bindingManuallyByFullName: string[] = []) {
    if (bindingManuallyByFullName.indexOf(cls.cppFullName) != -1) return '';
    return `\nUsingCppType(${cls.cppFullName})`
}
function renderDefaultValues(params: TSVariable[]) {
    let stillHasDefault = true;
    return params
        .map((p) => p)
        .reverse()
        .map((param) => {
            if (stillHasDefault && param.defaultExpressionCpp) {
                return `, ${param.defaultExpressionCpp}`
            }
            stillHasDefault = false;
            return '';
        })
        .reverse()
        .filter(str => str)
        .join('')

}
function renderClassOverloadWithDefaultValue(cls: TSClass) {
    let ret = '';

    // ctor with default value is not supported by puerts
    // if (cls.ctor.overloads.length > 1) {
    //     cls.ctor.overloads.forEach((overload) => {
    //         const self = overload.isStatic ? "(*)" : `(${cls.fullname}::*)`
    //         const methodSign = `${overload.returnType.cppName}${self}(${overload.params.map(param => param.type.cppName).join(', ')})${overload.isConst ? ' const' : ''}`;
    //         ret += `DeclOverload(${cls.fullname}, ${methodSign}, &${cls.fullname}::${overload.name}${overload.params.map(param => {
    //             if (param.defaultValue) {
    //                 return `,  ${param.defaultValue}`
    //             }
    //             return '';
    //         }).filter(str => str).join('')})\n`
    //     })
    // }
    cls.functions.forEach((func) => {
        if (func.overloads.length > 1) {
            ret += `\nDeclOverloads(${cls.cppFullName.replace(/::/g, "_")}_${func.index})`
            func.overloads.forEach((overload) => {
                const self = overload.isStatic ? "(*)" : `(${cls.cppFullName}::*)`
                const methodSign = `${overload.returnType.cppName}${self}(${overload.params.map(param => param.type.cppName).join(', ')})${overload.isConst ? ' const' : ''}`;
                ret += `\nDeclOverload(${cls.cppFullName.replace(/::/g, "_")}_${func.index}, ${methodSign}, &${cls.cppFullName}::${overload.name}${renderDefaultValues(overload.params)})`
            })
        }
    });

    return ret;
}
function renderClassBinding(cls: TSClass, bindingManuallyByFullName: string[] = []) {
    if (bindingManuallyByFullName.indexOf(cls.cppFullName) != -1) return '';
    if (cls.astClass.IsAbstract && cls.astClass.Destructors.Count == 0) return '';

    let res = `
PUERTS_NAMESPACE::DefineClass<${cls.cppFullName}>()\n`
    if (cls.baseTypeCppFullName) {
        res += `    .Extends<${cls.baseTypeCppFullName}>()\n`
    }
    if (cls.ctor.overloads.length == 0) {

    } else if (cls.ctor.overloads.length == 1) {
        const ctor = cls.ctor.overloads[0];
        if (ctor.params.length == 0)
            res += `    .Constructor()\n`
        else
            res += `    .Constructor<${ctor.params.map(param => param.type.cppName).join(', ')}>()\n`
    } else {
        res += `    .Constructor(
        CombineConstructors(\n${cls.ctor.overloads.map((ctor) => {
            return `            MakeConstructor(${cls.cppFullName}${ctor.params.map(param => ', ' + param.type.cppName).join('')})`
        }).join(",\n")}
        )
    )\n`
    }

    cls.functions.forEach((func) => {
        const self = func.isStatic ? "(*)" : `(${cls.cppFullName}::*)`
        res += func.isStatic ? `    .Function("${func.name}", ` : `    .Method("${func.name}", `

        if (func.overloads.length == 1) {
            const method = func.overloads[0];
            const methodSign = `${method.returnType.cppName}${self}(${method.params.map(param => param.type.cppName).join(', ')})${method.isConst ? ' const' : ''}`;
            res += `SelectFunction(${methodSign}, &${cls.cppFullName}::${method.name}${renderDefaultValues(method.params)}))\n`

        } else {
            res += `CombineOverloads(${func.overloads.map((overload) => {
                const methodSign = `${overload.returnType.cppName}${self}(${overload.params.map(param => {
                    return param.type.cppName

                }).join(', ')})${overload.isConst ? ' const' : ''}`;
                // return `\n        MakeOverload(${methodSign}, &${cls.fullname}::${method.name})`
                return `\n        SelectOverload(${cls.cppFullName.replace(/::/g, "_")}_${func.index}, ${methodSign})`
            }).join(",")
                }\n    ))\n`
        }
    })
    cls.fields.forEach((field) => {
        if (field.isStatic) {
            if (field.isReadOnly) {
                res += `    .Variable("${field.name}", MakeReadonlyVariable(&${cls.cppFullName}::${field.name}))\n`

            } else {
                res += `    .Variable("${field.name}", MakeVariable(&${cls.cppFullName}::${field.name}))\n`
            }

        } else {
            if (field.isReadOnly) {
                res += `    .Property("${field.name}", MakeReadonlyProperty(&${cls.cppFullName}::${field.name}))\n`

            } else {
                res += `    .Property("${field.name}", MakeProperty(&${cls.cppFullName}::${field.name}))\n`

            }
        }

    })
    res += "    .Register();";
    return res;
}

export default renderBinding;