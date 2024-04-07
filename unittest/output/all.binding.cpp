
#pragma once
#include "Puerh.h"
#include "main.h"

UsingCppType(UnitTest)
static void ALL_TITAN_BINDING() {
    
PUERTS_NAMESPACE::DefineClass<UnitTest>()
    .Constructor<int>()
    .Variable("DEFAULT_BYTE", MakeReadonlyVariable(&UnitTest::DEFAULT_BYTE))
    .Variable("DEFAULT_INT", MakeReadonlyVariable(&UnitTest::DEFAULT_INT))
    .Register();
}
    