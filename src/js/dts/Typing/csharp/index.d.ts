
    declare namespace CS {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    interface $Ref<T> {
        value: T
    }
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            set_Item(index: number, value: T):void;
        }
    }
    interface $Task<T> {}
    namespace System {
        class Object
        {
            protected [__keep_incompatibility]: never;
        }
        class Console extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get In(): System.IO.TextReader;
            public static get InputEncoding(): System.Text.Encoding;
            public static set InputEncoding(value: System.Text.Encoding);
            public static get OutputEncoding(): System.Text.Encoding;
            public static set OutputEncoding(value: System.Text.Encoding);
            public static get KeyAvailable(): boolean;
            public static get Out(): System.IO.TextWriter;
            public static get Error(): System.IO.TextWriter;
            public static get IsInputRedirected(): boolean;
            public static get IsOutputRedirected(): boolean;
            public static get IsErrorRedirected(): boolean;
            public static get CursorSize(): number;
            public static set CursorSize(value: number);
            public static get NumberLock(): boolean;
            public static get CapsLock(): boolean;
            public static get BackgroundColor(): System.ConsoleColor;
            public static set BackgroundColor(value: System.ConsoleColor);
            public static get ForegroundColor(): System.ConsoleColor;
            public static set ForegroundColor(value: System.ConsoleColor);
            public static get BufferWidth(): number;
            public static set BufferWidth(value: number);
            public static get BufferHeight(): number;
            public static set BufferHeight(value: number);
            public static get WindowLeft(): number;
            public static set WindowLeft(value: number);
            public static get WindowTop(): number;
            public static set WindowTop(value: number);
            public static get WindowWidth(): number;
            public static set WindowWidth(value: number);
            public static get WindowHeight(): number;
            public static set WindowHeight(value: number);
            public static get LargestWindowWidth(): number;
            public static get LargestWindowHeight(): number;
            public static get CursorVisible(): boolean;
            public static set CursorVisible(value: boolean);
            public static get CursorLeft(): number;
            public static set CursorLeft(value: number);
            public static get CursorTop(): number;
            public static set CursorTop(value: number);
            public static get Title(): string;
            public static set Title(value: string);
            public static get TreatControlCAsInput(): boolean;
            public static set TreatControlCAsInput(value: boolean);
            public static ReadKey () : System.ConsoleKeyInfo
            public static ReadKey ($intercept: boolean) : System.ConsoleKeyInfo
            public static ResetColor () : void
            public static SetBufferSize ($width: number, $height: number) : void
            public static SetWindowPosition ($left: number, $top: number) : void
            public static SetWindowSize ($width: number, $height: number) : void
            public static GetCursorPosition () : System.ValueTuple$2<number, number>
            public static Beep () : void
            public static Beep ($frequency: number, $duration: number) : void
            public static MoveBufferArea ($sourceLeft: number, $sourceTop: number, $sourceWidth: number, $sourceHeight: number, $targetLeft: number, $targetTop: number) : void
            public static MoveBufferArea ($sourceLeft: number, $sourceTop: number, $sourceWidth: number, $sourceHeight: number, $targetLeft: number, $targetTop: number, $sourceChar: number, $sourceForeColor: System.ConsoleColor, $sourceBackColor: System.ConsoleColor) : void
            public static Clear () : void
            public static SetCursorPosition ($left: number, $top: number) : void
            public static add_CancelKeyPress ($value: System.ConsoleCancelEventHandler) : void
            public static remove_CancelKeyPress ($value: System.ConsoleCancelEventHandler) : void
            public static OpenStandardInput () : System.IO.Stream
            public static OpenStandardInput ($bufferSize: number) : System.IO.Stream
            public static OpenStandardOutput () : System.IO.Stream
            public static OpenStandardOutput ($bufferSize: number) : System.IO.Stream
            public static OpenStandardError () : System.IO.Stream
            public static OpenStandardError ($bufferSize: number) : System.IO.Stream
            public static SetIn ($newIn: System.IO.TextReader) : void
            public static SetOut ($newOut: System.IO.TextWriter) : void
            public static SetError ($newError: System.IO.TextWriter) : void
            public static Read () : number
            public static ReadLine () : string
            public static WriteLine () : void
            public static WriteLine ($value: boolean) : void
            public static WriteLine ($value: number) : void
            public static WriteLine ($buffer: System.Array$1<number>) : void
            public static WriteLine ($buffer: System.Array$1<number>, $index: number, $count: number) : void
            public static WriteLine ($value: System.Decimal) : void
            public static WriteLine ($value: bigint) : void
            public static WriteLine ($value: any) : void
            public static WriteLine ($value: string) : void
            public static WriteLine ($format: string, $arg0: any) : void
            public static WriteLine ($format: string, $arg0: any, $arg1: any) : void
            public static WriteLine ($format: string, $arg0: any, $arg1: any, $arg2: any) : void
            public static WriteLine ($format: string, ...arg: any[]) : void
            public static Write ($format: string, $arg0: any) : void
            public static Write ($format: string, $arg0: any, $arg1: any) : void
            public static Write ($format: string, $arg0: any, $arg1: any, $arg2: any) : void
            public static Write ($format: string, ...arg: any[]) : void
            public static Write ($value: boolean) : void
            public static Write ($value: number) : void
            public static Write ($buffer: System.Array$1<number>) : void
            public static Write ($buffer: System.Array$1<number>, $index: number, $count: number) : void
            public static Write ($value: System.Decimal) : void
            public static Write ($value: bigint) : void
            public static Write ($value: any) : void
            public static Write ($value: string) : void
        }
        class MarshalByRefObject extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        interface IDisposable
        {
        }
        interface ICloneable
        {
        }
        class ValueType extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class Void extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class Boolean extends System.ValueType implements System.IComparable, System.IConvertible, System.IComparable$1<boolean>, System.IEquatable$1<boolean>, System.ISpanParsable$1<boolean>, System.IParsable$1<boolean>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IComparable
        {
        }
        interface IConvertible
        {
        }
        interface IComparable$1<T>
        {
        }
        interface IEquatable$1<T>
        {
        }
        interface ISpanParsable$1<TSelf> extends System.IParsable$1<TSelf>
        {
        }
        interface IParsable$1<TSelf>
        {
        }
        class ConsoleKeyInfo extends System.ValueType implements System.IEquatable$1<System.ConsoleKeyInfo>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IAsyncDisposable
        {
        }
        class Int32 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.Numerics.IBinaryInteger$1<number>, System.Numerics.IBinaryNumber$1<number>, System.Numerics.IBitwiseOperators$3<number, number, number>, System.Numerics.INumber$1<number>, System.Numerics.IComparisonOperators$3<number, number, boolean>, System.Numerics.IEqualityOperators$3<number, number, boolean>, System.Numerics.IModulusOperators$3<number, number, number>, System.Numerics.INumberBase$1<number>, System.Numerics.IAdditionOperators$3<number, number, number>, System.Numerics.IAdditiveIdentity$2<number, number>, System.Numerics.IDecrementOperators$1<number>, System.Numerics.IDivisionOperators$3<number, number, number>, System.Numerics.IIncrementOperators$1<number>, System.Numerics.IMultiplicativeIdentity$2<number, number>, System.Numerics.IMultiplyOperators$3<number, number, number>, System.ISpanParsable$1<number>, System.IParsable$1<number>, System.Numerics.ISubtractionOperators$3<number, number, number>, System.Numerics.IUnaryPlusOperators$2<number, number>, System.Numerics.IUnaryNegationOperators$2<number, number>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<number>, System.Numerics.IShiftOperators$3<number, number, number>, System.Numerics.IMinMaxValue$1<number>, System.Numerics.ISignedNumber$1<number>, System.IBinaryIntegerParseAndFormatInfo$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface ISpanFormattable extends System.IFormattable
        {
        }
        interface IFormattable
        {
        }
        interface IUtf8SpanFormattable
        {
        }
        interface IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IBinaryIntegerParseAndFormatInfo$1<TSelf> extends System.Numerics.IBinaryInteger$1<TSelf>, System.Numerics.IBinaryNumber$1<TSelf>, System.Numerics.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.IShiftOperators$3<TSelf, number, TSelf>, System.Numerics.IMinMaxValue$1<TSelf>
        {
        }
        class Enum extends System.ValueType implements System.IComparable, System.ISpanFormattable, System.IFormattable, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
        }
        enum ConsoleColor
        { Black = 0, DarkBlue = 1, DarkGreen = 2, DarkCyan = 3, DarkRed = 4, DarkMagenta = 5, DarkYellow = 6, Gray = 7, DarkGray = 8, Blue = 9, Green = 10, Cyan = 11, Red = 12, Magenta = 13, Yellow = 14, White = 15 }
        class ValueTuple$2<T1, T2> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$2<T1, T2>>, System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.IComparable$1<System.ValueTuple$2<T1, T2>>, System.IValueTupleInternal, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
        }
        interface IValueTupleInternal extends System.Runtime.CompilerServices.ITuple
        {
        }
        class String extends System.Object implements System.IComparable, System.Collections.IEnumerable, System.IConvertible, System.Collections.Generic.IEnumerable$1<number>, System.IComparable$1<string>, System.IEquatable$1<string>, System.ICloneable, System.ISpanParsable$1<string>, System.IParsable$1<string>
        {
            protected [__keep_incompatibility]: never;
        }
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IEquatable$1<number>, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.Numerics.IBinaryInteger$1<number>, System.Numerics.IBinaryNumber$1<number>, System.Numerics.IBitwiseOperators$3<number, number, number>, System.Numerics.INumber$1<number>, System.Numerics.IComparisonOperators$3<number, number, boolean>, System.Numerics.IEqualityOperators$3<number, number, boolean>, System.Numerics.IModulusOperators$3<number, number, number>, System.Numerics.INumberBase$1<number>, System.Numerics.IAdditionOperators$3<number, number, number>, System.Numerics.IAdditiveIdentity$2<number, number>, System.Numerics.IDecrementOperators$1<number>, System.Numerics.IDivisionOperators$3<number, number, number>, System.Numerics.IIncrementOperators$1<number>, System.Numerics.IMultiplicativeIdentity$2<number, number>, System.Numerics.IMultiplyOperators$3<number, number, number>, System.ISpanParsable$1<number>, System.IParsable$1<number>, System.Numerics.ISubtractionOperators$3<number, number, number>, System.Numerics.IUnaryPlusOperators$2<number, number>, System.Numerics.IUnaryNegationOperators$2<number, number>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<number>, System.Numerics.IShiftOperators$3<number, number, number>, System.Numerics.IMinMaxValue$1<number>, System.Numerics.IUnsignedNumber$1<number>, System.IUtfChar$1<number>, System.IBinaryIntegerParseAndFormatInfo$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IUtfChar$1<TSelf> extends System.Numerics.IBinaryInteger$1<TSelf>, System.Numerics.IBinaryNumber$1<TSelf>, System.Numerics.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.IShiftOperators$3<TSelf, number, TSelf>
        {
        }
        class Delegate extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
        interface MulticastDelegate
        { 
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
        }
        var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
        interface ConsoleCancelEventHandler
        { 
        (sender: any, e: System.ConsoleCancelEventArgs) : void; 
        Invoke?: (sender: any, e: System.ConsoleCancelEventArgs) => void;
        }
        var ConsoleCancelEventHandler: { new (func: (sender: any, e: System.ConsoleCancelEventArgs) => void): ConsoleCancelEventHandler; }
        class EventArgs extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ConsoleCancelEventArgs extends System.EventArgs
        {
            protected [__keep_incompatibility]: never;
        }
        class Array extends System.Object implements System.ICloneable, System.Collections.IList, System.Collections.ICollection, System.Collections.IEnumerable, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable
        {
            protected [__keep_incompatibility]: never;
        }
        class Decimal extends System.ValueType implements System.ISpanFormattable, System.IFormattable, System.IComparable, System.IConvertible, System.IComparable$1<System.Decimal>, System.IEquatable$1<System.Decimal>, System.Runtime.Serialization.ISerializable, System.Runtime.Serialization.IDeserializationCallback, System.Numerics.IFloatingPoint$1<System.Decimal>, System.Numerics.IFloatingPointConstants$1<System.Decimal>, System.Numerics.INumberBase$1<System.Decimal>, System.Numerics.IAdditionOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.Numerics.IAdditiveIdentity$2<System.Decimal, System.Decimal>, System.Numerics.IDecrementOperators$1<System.Decimal>, System.Numerics.IDivisionOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.Numerics.IEqualityOperators$3<System.Decimal, System.Decimal, boolean>, System.Numerics.IIncrementOperators$1<System.Decimal>, System.Numerics.IMultiplicativeIdentity$2<System.Decimal, System.Decimal>, System.Numerics.IMultiplyOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.ISpanParsable$1<System.Decimal>, System.IParsable$1<System.Decimal>, System.Numerics.ISubtractionOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.Numerics.IUnaryPlusOperators$2<System.Decimal, System.Decimal>, System.Numerics.IUnaryNegationOperators$2<System.Decimal, System.Decimal>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<System.Decimal>, System.Numerics.INumber$1<System.Decimal>, System.Numerics.IComparisonOperators$3<System.Decimal, System.Decimal, boolean>, System.Numerics.IModulusOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.Numerics.ISignedNumber$1<System.Decimal>, System.Numerics.IMinMaxValue$1<System.Decimal>
        {
            protected [__keep_incompatibility]: never;
        }
        class Double extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.Numerics.IBinaryFloatingPointIeee754$1<number>, System.Numerics.IBinaryNumber$1<number>, System.Numerics.IBitwiseOperators$3<number, number, number>, System.Numerics.INumber$1<number>, System.Numerics.IComparisonOperators$3<number, number, boolean>, System.Numerics.IEqualityOperators$3<number, number, boolean>, System.Numerics.IModulusOperators$3<number, number, number>, System.Numerics.INumberBase$1<number>, System.Numerics.IAdditionOperators$3<number, number, number>, System.Numerics.IAdditiveIdentity$2<number, number>, System.Numerics.IDecrementOperators$1<number>, System.Numerics.IDivisionOperators$3<number, number, number>, System.Numerics.IIncrementOperators$1<number>, System.Numerics.IMultiplicativeIdentity$2<number, number>, System.Numerics.IMultiplyOperators$3<number, number, number>, System.ISpanParsable$1<number>, System.IParsable$1<number>, System.Numerics.ISubtractionOperators$3<number, number, number>, System.Numerics.IUnaryPlusOperators$2<number, number>, System.Numerics.IUnaryNegationOperators$2<number, number>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<number>, System.Numerics.IFloatingPointIeee754$1<number>, System.Numerics.IExponentialFunctions$1<number>, System.Numerics.IFloatingPointConstants$1<number>, System.Numerics.IFloatingPoint$1<number>, System.Numerics.ISignedNumber$1<number>, System.Numerics.IHyperbolicFunctions$1<number>, System.Numerics.ILogarithmicFunctions$1<number>, System.Numerics.IPowerFunctions$1<number>, System.Numerics.IRootFunctions$1<number>, System.Numerics.ITrigonometricFunctions$1<number>, System.Numerics.IMinMaxValue$1<number>, System.IBinaryFloatParseAndFormatInfo$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IBinaryFloatParseAndFormatInfo$1<TSelf> extends System.Numerics.IBinaryFloatingPointIeee754$1<TSelf>, System.Numerics.IBinaryNumber$1<TSelf>, System.Numerics.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.IFloatingPointIeee754$1<TSelf>, System.Numerics.IExponentialFunctions$1<TSelf>, System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.IFloatingPoint$1<TSelf>, System.Numerics.ISignedNumber$1<TSelf>, System.Numerics.IHyperbolicFunctions$1<TSelf>, System.Numerics.ILogarithmicFunctions$1<TSelf>, System.Numerics.IPowerFunctions$1<TSelf>, System.Numerics.IRootFunctions$1<TSelf>, System.Numerics.ITrigonometricFunctions$1<TSelf>, System.Numerics.IMinMaxValue$1<TSelf>
        {
        }
        class Single extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.Numerics.IBinaryFloatingPointIeee754$1<number>, System.Numerics.IBinaryNumber$1<number>, System.Numerics.IBitwiseOperators$3<number, number, number>, System.Numerics.INumber$1<number>, System.Numerics.IComparisonOperators$3<number, number, boolean>, System.Numerics.IEqualityOperators$3<number, number, boolean>, System.Numerics.IModulusOperators$3<number, number, number>, System.Numerics.INumberBase$1<number>, System.Numerics.IAdditionOperators$3<number, number, number>, System.Numerics.IAdditiveIdentity$2<number, number>, System.Numerics.IDecrementOperators$1<number>, System.Numerics.IDivisionOperators$3<number, number, number>, System.Numerics.IIncrementOperators$1<number>, System.Numerics.IMultiplicativeIdentity$2<number, number>, System.Numerics.IMultiplyOperators$3<number, number, number>, System.ISpanParsable$1<number>, System.IParsable$1<number>, System.Numerics.ISubtractionOperators$3<number, number, number>, System.Numerics.IUnaryPlusOperators$2<number, number>, System.Numerics.IUnaryNegationOperators$2<number, number>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<number>, System.Numerics.IFloatingPointIeee754$1<number>, System.Numerics.IExponentialFunctions$1<number>, System.Numerics.IFloatingPointConstants$1<number>, System.Numerics.IFloatingPoint$1<number>, System.Numerics.ISignedNumber$1<number>, System.Numerics.IHyperbolicFunctions$1<number>, System.Numerics.ILogarithmicFunctions$1<number>, System.Numerics.IPowerFunctions$1<number>, System.Numerics.IRootFunctions$1<number>, System.Numerics.ITrigonometricFunctions$1<number>, System.Numerics.IMinMaxValue$1<number>, System.IBinaryFloatParseAndFormatInfo$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class UInt32 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.Numerics.IBinaryInteger$1<number>, System.Numerics.IBinaryNumber$1<number>, System.Numerics.IBitwiseOperators$3<number, number, number>, System.Numerics.INumber$1<number>, System.Numerics.IComparisonOperators$3<number, number, boolean>, System.Numerics.IEqualityOperators$3<number, number, boolean>, System.Numerics.IModulusOperators$3<number, number, number>, System.Numerics.INumberBase$1<number>, System.Numerics.IAdditionOperators$3<number, number, number>, System.Numerics.IAdditiveIdentity$2<number, number>, System.Numerics.IDecrementOperators$1<number>, System.Numerics.IDivisionOperators$3<number, number, number>, System.Numerics.IIncrementOperators$1<number>, System.Numerics.IMultiplicativeIdentity$2<number, number>, System.Numerics.IMultiplyOperators$3<number, number, number>, System.ISpanParsable$1<number>, System.IParsable$1<number>, System.Numerics.ISubtractionOperators$3<number, number, number>, System.Numerics.IUnaryPlusOperators$2<number, number>, System.Numerics.IUnaryNegationOperators$2<number, number>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<number>, System.Numerics.IShiftOperators$3<number, number, number>, System.Numerics.IMinMaxValue$1<number>, System.Numerics.IUnsignedNumber$1<number>, System.IBinaryIntegerParseAndFormatInfo$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Int64 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<bigint>, System.IEquatable$1<bigint>, System.Numerics.IBinaryInteger$1<bigint>, System.Numerics.IBinaryNumber$1<bigint>, System.Numerics.IBitwiseOperators$3<bigint, bigint, bigint>, System.Numerics.INumber$1<bigint>, System.Numerics.IComparisonOperators$3<bigint, bigint, boolean>, System.Numerics.IEqualityOperators$3<bigint, bigint, boolean>, System.Numerics.IModulusOperators$3<bigint, bigint, bigint>, System.Numerics.INumberBase$1<bigint>, System.Numerics.IAdditionOperators$3<bigint, bigint, bigint>, System.Numerics.IAdditiveIdentity$2<bigint, bigint>, System.Numerics.IDecrementOperators$1<bigint>, System.Numerics.IDivisionOperators$3<bigint, bigint, bigint>, System.Numerics.IIncrementOperators$1<bigint>, System.Numerics.IMultiplicativeIdentity$2<bigint, bigint>, System.Numerics.IMultiplyOperators$3<bigint, bigint, bigint>, System.ISpanParsable$1<bigint>, System.IParsable$1<bigint>, System.Numerics.ISubtractionOperators$3<bigint, bigint, bigint>, System.Numerics.IUnaryPlusOperators$2<bigint, bigint>, System.Numerics.IUnaryNegationOperators$2<bigint, bigint>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<bigint>, System.Numerics.IShiftOperators$3<bigint, number, bigint>, System.Numerics.IMinMaxValue$1<bigint>, System.Numerics.ISignedNumber$1<bigint>, System.IBinaryIntegerParseAndFormatInfo$1<bigint>
        {
            protected [__keep_incompatibility]: never;
        }
        class UInt64 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<bigint>, System.IEquatable$1<bigint>, System.Numerics.IBinaryInteger$1<bigint>, System.Numerics.IBinaryNumber$1<bigint>, System.Numerics.IBitwiseOperators$3<bigint, bigint, bigint>, System.Numerics.INumber$1<bigint>, System.Numerics.IComparisonOperators$3<bigint, bigint, boolean>, System.Numerics.IEqualityOperators$3<bigint, bigint, boolean>, System.Numerics.IModulusOperators$3<bigint, bigint, bigint>, System.Numerics.INumberBase$1<bigint>, System.Numerics.IAdditionOperators$3<bigint, bigint, bigint>, System.Numerics.IAdditiveIdentity$2<bigint, bigint>, System.Numerics.IDecrementOperators$1<bigint>, System.Numerics.IDivisionOperators$3<bigint, bigint, bigint>, System.Numerics.IIncrementOperators$1<bigint>, System.Numerics.IMultiplicativeIdentity$2<bigint, bigint>, System.Numerics.IMultiplyOperators$3<bigint, bigint, bigint>, System.ISpanParsable$1<bigint>, System.IParsable$1<bigint>, System.Numerics.ISubtractionOperators$3<bigint, bigint, bigint>, System.Numerics.IUnaryPlusOperators$2<bigint, bigint>, System.Numerics.IUnaryNegationOperators$2<bigint, bigint>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<bigint>, System.Numerics.IShiftOperators$3<bigint, number, bigint>, System.Numerics.IMinMaxValue$1<bigint>, System.Numerics.IUnsignedNumber$1<bigint>, System.IBinaryIntegerParseAndFormatInfo$1<bigint>
        {
            protected [__keep_incompatibility]: never;
        }
        class ReadOnlySpan$1<T> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class Span$1<T> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class DateTime extends System.ValueType implements System.IComparable, System.ISpanFormattable, System.IFormattable, System.IConvertible, System.IComparable$1<System.DateTime>, System.IEquatable$1<System.DateTime>, System.Runtime.Serialization.ISerializable, System.ISpanParsable$1<System.DateTime>, System.IParsable$1<System.DateTime>, System.IUtf8SpanFormattable
        {
            protected [__keep_incompatibility]: never;
        }
        class Byte extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.Numerics.IBinaryInteger$1<number>, System.Numerics.IBinaryNumber$1<number>, System.Numerics.IBitwiseOperators$3<number, number, number>, System.Numerics.INumber$1<number>, System.Numerics.IComparisonOperators$3<number, number, boolean>, System.Numerics.IEqualityOperators$3<number, number, boolean>, System.Numerics.IModulusOperators$3<number, number, number>, System.Numerics.INumberBase$1<number>, System.Numerics.IAdditionOperators$3<number, number, number>, System.Numerics.IAdditiveIdentity$2<number, number>, System.Numerics.IDecrementOperators$1<number>, System.Numerics.IDivisionOperators$3<number, number, number>, System.Numerics.IIncrementOperators$1<number>, System.Numerics.IMultiplicativeIdentity$2<number, number>, System.Numerics.IMultiplyOperators$3<number, number, number>, System.ISpanParsable$1<number>, System.IParsable$1<number>, System.Numerics.ISubtractionOperators$3<number, number, number>, System.Numerics.IUnaryPlusOperators$2<number, number>, System.Numerics.IUnaryNegationOperators$2<number, number>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<number>, System.Numerics.IShiftOperators$3<number, number, number>, System.Numerics.IMinMaxValue$1<number>, System.Numerics.IUnsignedNumber$1<number>, System.IUtfChar$1<number>, System.IBinaryIntegerParseAndFormatInfo$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IAsyncResult
        {
        }
        interface Converter$2<TInput, TOutput>
        { 
        (input: TInput) : TOutput; 
        Invoke?: (input: TInput) => TOutput;
        }
        interface Predicate$1<T>
        { 
        (obj: T) : boolean; 
        Invoke?: (obj: T) => boolean;
        }
        interface Action$1<T>
        { 
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
        }
        interface Comparison$1<T>
        { 
        (x: T, y: T) : number; 
        Invoke?: (x: T, y: T) => number;
        }
        class Type extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect
        {
            protected [__keep_incompatibility]: never;
            public static Delimiter : number
            public static EmptyTypes : System.Array$1<System.Type>
            public static Missing : any
            public static FilterAttribute : System.Reflection.MemberFilter
            public static FilterName : System.Reflection.MemberFilter
            public static FilterNameIgnoreCase : System.Reflection.MemberFilter
            public get IsInterface(): boolean;
            public get MemberType(): System.Reflection.MemberTypes;
            public get Namespace(): string;
            public get AssemblyQualifiedName(): string;
            public get FullName(): string;
            public get Assembly(): System.Reflection.Assembly;
            public get Module(): System.Reflection.Module;
            public get IsNested(): boolean;
            public get DeclaringType(): System.Type;
            public get DeclaringMethod(): System.Reflection.MethodBase;
            public get ReflectedType(): System.Type;
            public get UnderlyingSystemType(): System.Type;
            public get IsTypeDefinition(): boolean;
            public get IsArray(): boolean;
            public get IsByRef(): boolean;
            public get IsPointer(): boolean;
            public get IsConstructedGenericType(): boolean;
            public get IsGenericParameter(): boolean;
            public get IsGenericTypeParameter(): boolean;
            public get IsGenericMethodParameter(): boolean;
            public get IsGenericType(): boolean;
            public get IsGenericTypeDefinition(): boolean;
            public get IsSZArray(): boolean;
            public get IsVariableBoundArray(): boolean;
            public get IsByRefLike(): boolean;
            public get IsFunctionPointer(): boolean;
            public get IsUnmanagedFunctionPointer(): boolean;
            public get HasElementType(): boolean;
            public get GenericTypeArguments(): System.Array$1<System.Type>;
            public get GenericParameterPosition(): number;
            public get GenericParameterAttributes(): System.Reflection.GenericParameterAttributes;
            public get Attributes(): System.Reflection.TypeAttributes;
            public get IsAbstract(): boolean;
            public get IsImport(): boolean;
            public get IsSealed(): boolean;
            public get IsSpecialName(): boolean;
            public get IsClass(): boolean;
            public get IsNestedAssembly(): boolean;
            public get IsNestedFamANDAssem(): boolean;
            public get IsNestedFamily(): boolean;
            public get IsNestedFamORAssem(): boolean;
            public get IsNestedPrivate(): boolean;
            public get IsNestedPublic(): boolean;
            public get IsNotPublic(): boolean;
            public get IsPublic(): boolean;
            public get IsAutoLayout(): boolean;
            public get IsExplicitLayout(): boolean;
            public get IsLayoutSequential(): boolean;
            public get IsAnsiClass(): boolean;
            public get IsAutoClass(): boolean;
            public get IsUnicodeClass(): boolean;
            public get IsCOMObject(): boolean;
            public get IsContextful(): boolean;
            public get IsEnum(): boolean;
            public get IsMarshalByRef(): boolean;
            public get IsPrimitive(): boolean;
            public get IsValueType(): boolean;
            public get IsSignatureType(): boolean;
            public get IsSecurityCritical(): boolean;
            public get IsSecuritySafeCritical(): boolean;
            public get IsSecurityTransparent(): boolean;
            public get StructLayoutAttribute(): System.Runtime.InteropServices.StructLayoutAttribute;
            public get TypeInitializer(): System.Reflection.ConstructorInfo;
            public get TypeHandle(): System.RuntimeTypeHandle;
            public get GUID(): System.Guid;
            public get BaseType(): System.Type;
            public static get DefaultBinder(): System.Reflection.Binder;
            public get ContainsGenericParameters(): boolean;
            public get IsVisible(): boolean;
            public static GetType ($typeName: string, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static GetType ($typeName: string, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static GetTypeFromHandle ($handle: System.RuntimeTypeHandle) : System.Type
            public GetType () : System.Type
            public GetElementType () : System.Type
            public GetArrayRank () : number
            public GetGenericTypeDefinition () : System.Type
            public GetGenericArguments () : System.Array$1<System.Type>
            public GetOptionalCustomModifiers () : System.Array$1<System.Type>
            public GetRequiredCustomModifiers () : System.Array$1<System.Type>
            public GetGenericParameterConstraints () : System.Array$1<System.Type>
            public IsAssignableTo ($targetType: System.Type) : boolean
            public GetConstructor ($types: System.Array$1<System.Type>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $types: System.Array$1<System.Type>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructors () : System.Array$1<System.Reflection.ConstructorInfo>
            public GetConstructors ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.ConstructorInfo>
            public GetEvent ($name: string) : System.Reflection.EventInfo
            public GetEvent ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.EventInfo
            public GetEvents () : System.Array$1<System.Reflection.EventInfo>
            public GetEvents ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.EventInfo>
            public GetField ($name: string) : System.Reflection.FieldInfo
            public GetField ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.FieldInfo
            public GetFields () : System.Array$1<System.Reflection.FieldInfo>
            public GetFields ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.FieldInfo>
            public GetFunctionPointerCallingConventions () : System.Array$1<System.Type>
            public GetFunctionPointerReturnType () : System.Type
            public GetFunctionPointerParameterTypes () : System.Array$1<System.Type>
            public GetMember ($name: string) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMembers () : System.Array$1<System.Reflection.MemberInfo>
            public GetMemberWithSameMetadataDefinitionAs ($member: System.Reflection.MemberInfo) : System.Reflection.MemberInfo
            public GetMembers ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMethod ($name: string) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethods () : System.Array$1<System.Reflection.MethodInfo>
            public GetMethods ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MethodInfo>
            public GetNestedType ($name: string) : System.Type
            public GetNestedType ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Type
            public GetNestedTypes () : System.Array$1<System.Type>
            public GetNestedTypes ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Type>
            public GetProperty ($name: string) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperties () : System.Array$1<System.Reflection.PropertyInfo>
            public GetProperties ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.PropertyInfo>
            public GetDefaultMembers () : System.Array$1<System.Reflection.MemberInfo>
            public static GetTypeHandle ($o: any) : System.RuntimeTypeHandle
            public static GetTypeArray ($args: System.Array$1<any>) : System.Array$1<System.Type>
            public static GetTypeCode ($type: System.Type) : System.TypeCode
            public static GetTypeFromCLSID ($clsid: System.Guid) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $throwOnError: boolean) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string) : System.Type
            public static GetTypeFromProgID ($progID: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string, $throwOnError: boolean) : System.Type
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>) : any
            public GetInterface ($name: string) : System.Type
            public GetInterface ($name: string, $ignoreCase: boolean) : System.Type
            public GetInterfaces () : System.Array$1<System.Type>
            public GetInterfaceMap ($interfaceType: System.Type) : System.Reflection.InterfaceMapping
            public IsInstanceOfType ($o: any) : boolean
            public IsEquivalentTo ($other: System.Type) : boolean
            public GetEnumUnderlyingType () : System.Type
            public GetEnumValues () : System.Array
            public GetEnumValuesAsUnderlyingType () : System.Array
            public MakeArrayType () : System.Type
            public MakeArrayType ($rank: number) : System.Type
            public MakeByRefType () : System.Type
            public MakeGenericType (...typeArguments: System.Type[]) : System.Type
            public MakePointerType () : System.Type
            public static MakeGenericSignatureType ($genericTypeDefinition: System.Type, ...typeArguments: System.Type[]) : System.Type
            public static MakeGenericMethodParameter ($position: number) : System.Type
            public Equals ($o: any) : boolean
            public Equals ($o: System.Type) : boolean
            public static op_Equality ($left: System.Type, $right: System.Type) : boolean
            public static op_Inequality ($left: System.Type, $right: System.Type) : boolean
            public IsEnumDefined ($value: any) : boolean
            public GetEnumName ($value: any) : string
            public GetEnumNames () : System.Array$1<string>
            public FindInterfaces ($filter: System.Reflection.TypeFilter, $filterCriteria: any) : System.Array$1<System.Type>
            public FindMembers ($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any) : System.Array$1<System.Reflection.MemberInfo>
            public IsSubclassOf ($c: System.Type) : boolean
            public IsAssignableFrom ($c: System.Type) : boolean
        }
        interface Func$2<T, TResult>
        { 
        (arg: T) : TResult; 
        Invoke?: (arg: T) => TResult;
        }
        interface Func$4<T1, T2, T3, TResult>
        { 
        (arg1: T1, arg2: T2, arg3: T3) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3) => TResult;
        }
        class RuntimeTypeHandle extends System.ValueType implements System.IEquatable$1<System.RuntimeTypeHandle>, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
        class Attribute extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        enum TypeCode
        { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        class Guid extends System.ValueType implements System.ISpanFormattable, System.IFormattable, System.IComparable, System.IComparable$1<System.Guid>, System.IEquatable$1<System.Guid>, System.ISpanParsable$1<System.Guid>, System.IParsable$1<System.Guid>, System.IUtf8SpanFormattable
        {
            protected [__keep_incompatibility]: never;
        }
        interface IFormatProvider
        {
        }
    }
    namespace System.IO {
        class TextReader extends System.MarshalByRefObject implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        class TextWriter extends System.MarshalByRefObject implements System.IDisposable, System.IAsyncDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        class Stream extends System.MarshalByRefObject implements System.IDisposable, System.IAsyncDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        class Path extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static DirectorySeparatorChar : number
            public static AltDirectorySeparatorChar : number
            public static VolumeSeparatorChar : number
            public static PathSeparator : number
            public static ChangeExtension ($path: string, $extension: string) : string
            public static Exists ($path: string) : boolean
            public static GetDirectoryName ($path: string) : string
            public static GetDirectoryName ($path: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static GetExtension ($path: string) : string
            public static GetExtension ($path: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static GetFileName ($path: string) : string
            public static GetFileName ($path: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static GetFileNameWithoutExtension ($path: string) : string
            public static GetFileNameWithoutExtension ($path: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static GetRandomFileName () : string
            public static IsPathFullyQualified ($path: string) : boolean
            public static IsPathFullyQualified ($path: System.ReadOnlySpan$1<number>) : boolean
            public static HasExtension ($path: string) : boolean
            public static HasExtension ($path: System.ReadOnlySpan$1<number>) : boolean
            public static Combine ($path1: string, $path2: string) : string
            public static Combine ($path1: string, $path2: string, $path3: string) : string
            public static Combine ($path1: string, $path2: string, $path3: string, $path4: string) : string
            public static Combine (...paths: string[]) : string
            public static Join ($path1: System.ReadOnlySpan$1<number>, $path2: System.ReadOnlySpan$1<number>) : string
            public static Join ($path1: System.ReadOnlySpan$1<number>, $path2: System.ReadOnlySpan$1<number>, $path3: System.ReadOnlySpan$1<number>) : string
            public static Join ($path1: System.ReadOnlySpan$1<number>, $path2: System.ReadOnlySpan$1<number>, $path3: System.ReadOnlySpan$1<number>, $path4: System.ReadOnlySpan$1<number>) : string
            public static Join ($path1: string, $path2: string) : string
            public static Join ($path1: string, $path2: string, $path3: string) : string
            public static Join ($path1: string, $path2: string, $path3: string, $path4: string) : string
            public static Join (...paths: string[]) : string
            public static TryJoin ($path1: System.ReadOnlySpan$1<number>, $path2: System.ReadOnlySpan$1<number>, $destination: System.Span$1<number>, $charsWritten: $Ref<number>) : boolean
            public static TryJoin ($path1: System.ReadOnlySpan$1<number>, $path2: System.ReadOnlySpan$1<number>, $path3: System.ReadOnlySpan$1<number>, $destination: System.Span$1<number>, $charsWritten: $Ref<number>) : boolean
            public static GetRelativePath ($relativeTo: string, $path: string) : string
            public static TrimEndingDirectorySeparator ($path: string) : string
            public static TrimEndingDirectorySeparator ($path: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static EndsInDirectorySeparator ($path: System.ReadOnlySpan$1<number>) : boolean
            public static EndsInDirectorySeparator ($path: string) : boolean
            public static GetInvalidFileNameChars () : System.Array$1<number>
            public static GetInvalidPathChars () : System.Array$1<number>
            public static GetFullPath ($path: string) : string
            public static GetFullPath ($path: string, $basePath: string) : string
            public static GetTempPath () : string
            public static GetTempFileName () : string
            public static IsPathRooted ($path: string) : boolean
            public static IsPathRooted ($path: System.ReadOnlySpan$1<number>) : boolean
            public static GetPathRoot ($path: string) : string
            public static GetPathRoot ($path: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
        }
        class File extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static OpenText ($path: string) : System.IO.StreamReader
            public static CreateText ($path: string) : System.IO.StreamWriter
            public static AppendText ($path: string) : System.IO.StreamWriter
            public static Copy ($sourceFileName: string, $destFileName: string) : void
            public static Copy ($sourceFileName: string, $destFileName: string, $overwrite: boolean) : void
            public static Create ($path: string) : System.IO.FileStream
            public static Create ($path: string, $bufferSize: number) : System.IO.FileStream
            public static Create ($path: string, $bufferSize: number, $options: System.IO.FileOptions) : System.IO.FileStream
            public static Delete ($path: string) : void
            public static Exists ($path: string) : boolean
            public static Open ($path: string, $options: System.IO.FileStreamOptions) : System.IO.FileStream
            public static Open ($path: string, $mode: System.IO.FileMode) : System.IO.FileStream
            public static Open ($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess) : System.IO.FileStream
            public static Open ($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess, $share: System.IO.FileShare) : System.IO.FileStream
            public static OpenHandle ($path: string, $mode?: System.IO.FileMode, $access?: System.IO.FileAccess, $share?: System.IO.FileShare, $options?: System.IO.FileOptions, $preallocationSize?: bigint) : Microsoft.Win32.SafeHandles.SafeFileHandle
            public static SetCreationTime ($path: string, $creationTime: System.DateTime) : void
            public static SetCreationTime ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle, $creationTime: System.DateTime) : void
            public static SetCreationTimeUtc ($path: string, $creationTimeUtc: System.DateTime) : void
            public static SetCreationTimeUtc ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle, $creationTimeUtc: System.DateTime) : void
            public static GetCreationTime ($path: string) : System.DateTime
            public static GetCreationTime ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle) : System.DateTime
            public static GetCreationTimeUtc ($path: string) : System.DateTime
            public static GetCreationTimeUtc ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle) : System.DateTime
            public static SetLastAccessTime ($path: string, $lastAccessTime: System.DateTime) : void
            public static SetLastAccessTime ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle, $lastAccessTime: System.DateTime) : void
            public static SetLastAccessTimeUtc ($path: string, $lastAccessTimeUtc: System.DateTime) : void
            public static SetLastAccessTimeUtc ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle, $lastAccessTimeUtc: System.DateTime) : void
            public static GetLastAccessTime ($path: string) : System.DateTime
            public static GetLastAccessTime ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle) : System.DateTime
            public static GetLastAccessTimeUtc ($path: string) : System.DateTime
            public static GetLastAccessTimeUtc ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle) : System.DateTime
            public static SetLastWriteTime ($path: string, $lastWriteTime: System.DateTime) : void
            public static SetLastWriteTime ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle, $lastWriteTime: System.DateTime) : void
            public static SetLastWriteTimeUtc ($path: string, $lastWriteTimeUtc: System.DateTime) : void
            public static SetLastWriteTimeUtc ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle, $lastWriteTimeUtc: System.DateTime) : void
            public static GetLastWriteTime ($path: string) : System.DateTime
            public static GetLastWriteTime ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle) : System.DateTime
            public static GetLastWriteTimeUtc ($path: string) : System.DateTime
            public static GetLastWriteTimeUtc ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle) : System.DateTime
            public static GetAttributes ($path: string) : System.IO.FileAttributes
            public static GetAttributes ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle) : System.IO.FileAttributes
            public static SetAttributes ($path: string, $fileAttributes: System.IO.FileAttributes) : void
            public static SetAttributes ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle, $fileAttributes: System.IO.FileAttributes) : void
            public static GetUnixFileMode ($path: string) : System.IO.UnixFileMode
            public static GetUnixFileMode ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle) : System.IO.UnixFileMode
            public static SetUnixFileMode ($path: string, $mode: System.IO.UnixFileMode) : void
            public static SetUnixFileMode ($fileHandle: Microsoft.Win32.SafeHandles.SafeFileHandle, $mode: System.IO.UnixFileMode) : void
            public static OpenRead ($path: string) : System.IO.FileStream
            public static OpenWrite ($path: string) : System.IO.FileStream
            public static ReadAllText ($path: string) : string
            public static ReadAllText ($path: string, $encoding: System.Text.Encoding) : string
            public static WriteAllText ($path: string, $contents: string) : void
            public static WriteAllText ($path: string, $contents: string, $encoding: System.Text.Encoding) : void
            public static ReadAllBytes ($path: string) : System.Array$1<number>
            public static WriteAllBytes ($path: string, $bytes: System.Array$1<number>) : void
            public static ReadAllLines ($path: string) : System.Array$1<string>
            public static ReadAllLines ($path: string, $encoding: System.Text.Encoding) : System.Array$1<string>
            public static ReadLines ($path: string) : System.Collections.Generic.IEnumerable$1<string>
            public static ReadLines ($path: string, $encoding: System.Text.Encoding) : System.Collections.Generic.IEnumerable$1<string>
            public static ReadLinesAsync ($path: string, $cancellationToken?: System.Threading.CancellationToken) : System.Collections.Generic.IAsyncEnumerable$1<string>
            public static ReadLinesAsync ($path: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Collections.Generic.IAsyncEnumerable$1<string>
            public static WriteAllLines ($path: string, $contents: System.Array$1<string>) : void
            public static WriteAllLines ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>) : void
            public static WriteAllLines ($path: string, $contents: System.Array$1<string>, $encoding: System.Text.Encoding) : void
            public static WriteAllLines ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding) : void
            public static AppendAllText ($path: string, $contents: string) : void
            public static AppendAllText ($path: string, $contents: string, $encoding: System.Text.Encoding) : void
            public static AppendAllLines ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>) : void
            public static AppendAllLines ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding) : void
            public static Replace ($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string) : void
            public static Replace ($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string, $ignoreMetadataErrors: boolean) : void
            public static Move ($sourceFileName: string, $destFileName: string) : void
            public static Move ($sourceFileName: string, $destFileName: string, $overwrite: boolean) : void
            public static Encrypt ($path: string) : void
            public static Decrypt ($path: string) : void
            public static ReadAllTextAsync ($path: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<string>
            public static ReadAllTextAsync ($path: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<string>
            public static WriteAllTextAsync ($path: string, $contents: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static WriteAllTextAsync ($path: string, $contents: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static ReadAllBytesAsync ($path: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<System.Array$1<number>>
            public static WriteAllBytesAsync ($path: string, $bytes: System.Array$1<number>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static ReadAllLinesAsync ($path: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<System.Array$1<string>>
            public static ReadAllLinesAsync ($path: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<System.Array$1<string>>
            public static WriteAllLinesAsync ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static WriteAllLinesAsync ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static AppendAllTextAsync ($path: string, $contents: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static AppendAllTextAsync ($path: string, $contents: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static AppendAllLinesAsync ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static AppendAllLinesAsync ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static CreateSymbolicLink ($path: string, $pathToTarget: string) : System.IO.FileSystemInfo
            public static ResolveLinkTarget ($linkPath: string, $returnFinalTarget: boolean) : System.IO.FileSystemInfo
        }
        class StreamReader extends System.IO.TextReader implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        class StreamWriter extends System.IO.TextWriter implements System.IDisposable, System.IAsyncDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        class FileStream extends System.IO.Stream implements System.IDisposable, System.IAsyncDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        enum FileOptions
        { None = 0, WriteThrough = -2147483648, Asynchronous = 1073741824, RandomAccess = 268435456, DeleteOnClose = 67108864, SequentialScan = 134217728, Encrypted = 16384 }
        class FileStreamOptions extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        enum FileMode
        { CreateNew = 1, Create = 2, Open = 3, OpenOrCreate = 4, Truncate = 5, Append = 6 }
        enum FileAccess
        { Read = 1, Write = 2, ReadWrite = 3 }
        enum FileShare
        { None = 0, Read = 1, Write = 2, ReadWrite = 3, Delete = 4, Inheritable = 16 }
        enum FileAttributes
        { None = 0, ReadOnly = 1, Hidden = 2, System = 4, Directory = 16, Archive = 32, Device = 64, Normal = 128, Temporary = 256, SparseFile = 512, ReparsePoint = 1024, Compressed = 2048, Offline = 4096, NotContentIndexed = 8192, Encrypted = 16384, IntegrityStream = 32768, NoScrubData = 131072 }
        enum UnixFileMode
        { None = 0, OtherExecute = 1, OtherWrite = 2, OtherRead = 4, GroupExecute = 8, GroupWrite = 16, GroupRead = 32, UserExecute = 64, UserWrite = 128, UserRead = 256, StickyBit = 512, SetGroup = 1024, SetUser = 2048 }
        class FileSystemInfo extends System.MarshalByRefObject implements System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Text {
        class Encoding extends System.Object implements System.ICloneable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Numerics {
        interface IBinaryInteger$1<TSelf> extends System.Numerics.IBinaryNumber$1<TSelf>, System.Numerics.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.IShiftOperators$3<TSelf, number, TSelf>
        {
        }
        interface IBinaryNumber$1<TSelf> extends System.Numerics.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IBitwiseOperators$3<TSelf, TOther, TResult>
        {
        }
        interface INumber$1<TSelf> extends System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IComparisonOperators$3<TSelf, TOther, TResult> extends System.Numerics.IEqualityOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IEqualityOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IModulusOperators$3<TSelf, TOther, TResult>
        {
        }
        interface INumberBase$1<TSelf> extends System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IAdditionOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IAdditiveIdentity$2<TSelf, TResult>
        {
        }
        interface IDecrementOperators$1<TSelf>
        {
        }
        interface IDivisionOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IIncrementOperators$1<TSelf>
        {
        }
        interface IMultiplicativeIdentity$2<TSelf, TResult>
        {
        }
        interface IMultiplyOperators$3<TSelf, TOther, TResult>
        {
        }
        interface ISubtractionOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IUnaryPlusOperators$2<TSelf, TResult>
        {
        }
        interface IUnaryNegationOperators$2<TSelf, TResult>
        {
        }
        interface IShiftOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IMinMaxValue$1<TSelf>
        {
        }
        interface ISignedNumber$1<TSelf> extends System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IUnsignedNumber$1<TSelf> extends System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IFloatingPoint$1<TSelf> extends System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.ISignedNumber$1<TSelf>
        {
        }
        interface IFloatingPointConstants$1<TSelf> extends System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IBinaryFloatingPointIeee754$1<TSelf> extends System.Numerics.IBinaryNumber$1<TSelf>, System.Numerics.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.IFloatingPointIeee754$1<TSelf>, System.Numerics.IExponentialFunctions$1<TSelf>, System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.IFloatingPoint$1<TSelf>, System.Numerics.ISignedNumber$1<TSelf>, System.Numerics.IHyperbolicFunctions$1<TSelf>, System.Numerics.ILogarithmicFunctions$1<TSelf>, System.Numerics.IPowerFunctions$1<TSelf>, System.Numerics.IRootFunctions$1<TSelf>, System.Numerics.ITrigonometricFunctions$1<TSelf>
        {
        }
        interface IFloatingPointIeee754$1<TSelf> extends System.Numerics.IExponentialFunctions$1<TSelf>, System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.IFloatingPoint$1<TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.ISignedNumber$1<TSelf>, System.Numerics.IHyperbolicFunctions$1<TSelf>, System.Numerics.ILogarithmicFunctions$1<TSelf>, System.Numerics.IPowerFunctions$1<TSelf>, System.Numerics.IRootFunctions$1<TSelf>, System.Numerics.ITrigonometricFunctions$1<TSelf>
        {
        }
        interface IExponentialFunctions$1<TSelf> extends System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IHyperbolicFunctions$1<TSelf> extends System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface ILogarithmicFunctions$1<TSelf> extends System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IPowerFunctions$1<TSelf> extends System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IRootFunctions$1<TSelf> extends System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface ITrigonometricFunctions$1<TSelf> extends System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanFormattable, System.IUtf8SpanParsable$1<TSelf>
        {
        }
    }
    namespace System.Collections {
        interface IStructuralEquatable
        {
        }
        interface IStructuralComparable
        {
        }
        interface IEnumerable
        {
        }
        interface IList extends System.Collections.ICollection, System.Collections.IEnumerable
        {
        }
        interface ICollection extends System.Collections.IEnumerable
        {
        }
        interface IEnumerator
        {
        }
    }
    namespace System.Runtime.CompilerServices {
        interface ITuple
        {
        }
    }
    namespace System.Collections.Generic {
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
        }
        interface IList$1<T> extends System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IReadOnlyList$1<T> extends System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IAsyncEnumerable$1<T>
        {
        }
        interface IEnumerator$1<T> extends System.IDisposable, System.Collections.IEnumerator
        {
        }
        class List$1<T> extends System.Object implements System.Collections.Generic.IList$1<T>, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.IList, System.Collections.ICollection, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
            protected [__keep_incompatibility]: never;
            public get Capacity(): number;
            public set Capacity(value: number);
            public get Count(): number;
            public get_Item ($index: number) : T
            public set_Item ($index: number, $value: T) : void
            public Add ($item: T) : void
            public AddRange ($collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public AsReadOnly () : System.Collections.ObjectModel.ReadOnlyCollection$1<T>
            public BinarySearch ($index: number, $count: number, $item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public BinarySearch ($item: T) : number
            public BinarySearch ($item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public Clear () : void
            public Contains ($item: T) : boolean
            public CopyTo ($array: System.Array$1<T>) : void
            public CopyTo ($index: number, $array: System.Array$1<T>, $arrayIndex: number, $count: number) : void
            public CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
            public EnsureCapacity ($capacity: number) : number
            public Exists ($match: System.Predicate$1<T>) : boolean
            public Find ($match: System.Predicate$1<T>) : T
            public FindAll ($match: System.Predicate$1<T>) : System.Collections.Generic.List$1<T>
            public FindIndex ($match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public FindLast ($match: System.Predicate$1<T>) : T
            public FindLastIndex ($match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public ForEach ($action: System.Action$1<T>) : void
            public GetEnumerator () : System.Collections.Generic.List$1.Enumerator<T>
            public GetRange ($index: number, $count: number) : System.Collections.Generic.List$1<T>
            public Slice ($start: number, $length: number) : System.Collections.Generic.List$1<T>
            public IndexOf ($item: T) : number
            public IndexOf ($item: T, $index: number) : number
            public IndexOf ($item: T, $index: number, $count: number) : number
            public Insert ($index: number, $item: T) : void
            public InsertRange ($index: number, $collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public LastIndexOf ($item: T) : number
            public LastIndexOf ($item: T, $index: number) : number
            public LastIndexOf ($item: T, $index: number, $count: number) : number
            public Remove ($item: T) : boolean
            public RemoveAll ($match: System.Predicate$1<T>) : number
            public RemoveAt ($index: number) : void
            public RemoveRange ($index: number, $count: number) : void
            public Reverse () : void
            public Reverse ($index: number, $count: number) : void
            public Sort () : void
            public Sort ($comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($index: number, $count: number, $comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($comparison: System.Comparison$1<T>) : void
            public ToArray () : System.Array$1<T>
            public TrimExcess () : void
            public TrueForAll ($match: System.Predicate$1<T>) : boolean
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<T>)
            public [Symbol.iterator]() : IterableIterator<T>
        }
        interface IComparer$1<T>
        {
        }
    }
    namespace System.Runtime.Serialization {
        interface ISerializable
        {
        }
        interface IDeserializationCallback
        {
        }
    }
    namespace System.Runtime.ConstrainedExecution {
        class CriticalFinalizerObject extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Runtime.InteropServices {
        class SafeHandle extends System.Runtime.ConstrainedExecution.CriticalFinalizerObject implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        class StructLayoutAttribute extends System.Attribute
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace Microsoft.Win32.SafeHandles {
        class SafeHandleZeroOrMinusOneIsInvalid extends System.Runtime.InteropServices.SafeHandle implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        class SafeFileHandle extends Microsoft.Win32.SafeHandles.SafeHandleZeroOrMinusOneIsInvalid implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Threading {
        class CancellationToken extends System.ValueType implements System.IEquatable$1<System.Threading.CancellationToken>
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Threading.Tasks {
        class Task extends System.Object implements System.IAsyncResult, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        class Task$1<TResult> extends System.Threading.Tasks.Task implements System.IAsyncResult, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace CppAst {
        /** Base class for all Cpp elements of the AST nodes.
        */
        class CppElement extends System.Object implements CppAst.ICppElement
        {
            protected [__keep_incompatibility]: never;
            /** Gets or sets the source span of this element.
            */
            public Span : CppAst.CppSourceSpan
            /** Gets or sets the parent container of this element. Might be null.
            */
            public get Parent(): CppAst.ICppContainer;
            public get FullParentName(): string;
            /** Gets the source file of this element.
            */
            public get SourceFile(): string;
        }
        /** Base interface of for
        */
        interface ICppElement
        {
        }
        /** Base class for C++ types.
        */
        class CppType extends CppAst.CppElement implements CppAst.ICppElement
        {
            protected [__keep_incompatibility]: never;
            /**
            * Gets the
            * of this instance.
            */
            public get TypeKind(): CppAst.CppTypeKind;
            public get SizeOf(): number;
            public set SizeOf(value: number);
            /** We can use this name in exporter to use this type.
            */
            public get FullName(): string;
            /** Gets the canonical type of this type instance.
            * @returns A canonical type of this type instance
            */
            public GetCanonicalType () : CppAst.CppType
        }
        /** Base class for C++ types.
        */
        interface CppType {
            /**
            * Gets the display name of the specified type. If the type is
            * it will
            * only use the name provided by
            * @param $type The type
            * @returns The display name
            */
            GetDisplayName () : string;
        }
        /**
        * Base class for a type declaration (
        * ,
        * ,
        * or
        * )
        */
        class CppTypeDeclaration extends CppAst.CppType implements CppAst.ICppElement, CppAst.ICppDeclaration, CppAst.ICppContainer
        {
            protected [__keep_incompatibility]: never;
            public get Comment(): CppAst.CppComment;
            public set Comment(value: CppAst.CppComment);
            public Children () : System.Collections.Generic.IEnumerable$1<CppAst.ICppDeclaration>
        }
        /** Base interface for all Cpp declaration.
        */
        interface ICppDeclaration extends CppAst.ICppElement
        {
        }
        /** Base tag interface used to describe a container of
        */
        interface ICppContainer
        {
        }
        /** A C++ class, struct or union.
        */
        class CppClass extends CppAst.CppTypeDeclaration implements CppAst.ICppElement, CppAst.ICppDeclaration, CppAst.ICppContainer, CppAst.ICppMemberWithVisibility, CppAst.ICppMember, CppAst.ICppDeclarationContainer, CppAst.ICppAttributeContainer, CppAst.ICppTemplateOwner
        {
            protected [__keep_incompatibility]: never;
            /** Kind of the instance (`class` `struct` or `union`)
            */
            public get ClassKind(): CppAst.CppClassKind;
            public set ClassKind(value: CppAst.CppClassKind);
            public get TemplateKind(): CppAst.CppTemplateKind;
            public set TemplateKind(value: CppAst.CppTemplateKind);
            public get Name(): string;
            public set Name(value: string);
            public get FullName(): string;
            public get Visibility(): CppAst.CppVisibility;
            public set Visibility(value: CppAst.CppVisibility);
            public get Attributes(): System.Collections.Generic.List$1<CppAst.CppAttribute>;
            /**
            * Gets or sets a boolean indicating if this type is a definition. If
            * false
            * the type was only declared but is not defined.
            */
            public get IsDefinition(): boolean;
            public set IsDefinition(value: boolean);
            /** Gets or sets a boolean indicating if this declaration is anonymous.
            */
            public get IsAnonymous(): boolean;
            public set IsAnonymous(value: boolean);
            /** Get the base types of this type.
            */
            public get BaseTypes(): System.Collections.Generic.List$1<CppAst.CppBaseType>;
            public get Fields(): CppAst.CppContainerList$1<CppAst.CppField>;
            /** Gets the constructors of this instance.
            */
            public get Constructors(): CppAst.CppContainerList$1<CppAst.CppFunction>;
            public set Constructors(value: CppAst.CppContainerList$1<CppAst.CppFunction>);
            /** Gets the destructors of this instance.
            */
            public get Destructors(): CppAst.CppContainerList$1<CppAst.CppFunction>;
            public set Destructors(value: CppAst.CppContainerList$1<CppAst.CppFunction>);
            public get Functions(): CppAst.CppContainerList$1<CppAst.CppFunction>;
            public get Enums(): CppAst.CppContainerList$1<CppAst.CppEnum>;
            public get Classes(): CppAst.CppContainerList$1<CppAst.CppClass>;
            public get Typedefs(): CppAst.CppContainerList$1<CppAst.CppTypedef>;
            public get TemplateParameters(): System.Collections.Generic.List$1<CppAst.CppType>;
            public get TemplateSpecializedArguments(): System.Collections.Generic.List$1<CppAst.CppTemplateArgument>;
            /** Gets the specialized class template of this instance.
            */
            public get SpecializedTemplate(): CppAst.CppClass;
            public set SpecializedTemplate(value: CppAst.CppClass);
            public get IsEmbeded(): boolean;
            public get IsAbstract(): boolean;
            public set IsAbstract(value: boolean);
            public get SizeOf(): number;
            public set SizeOf(value: number);
            /** Gets the alignment of this instance.
            */
            public get AlignOf(): number;
            public set AlignOf(value: number);
            public constructor ($name: string)
        }
        /** A C++ class, struct or union.
        */
        interface CppClass {
            /** Gets a boolean indicating whether the function is a dllexport or visibility("default")
            * @param $cppClass The class to check against
            * @returns true if the class is a dllexport or visibility("default")
            */
            IsPublicExport () : boolean;
        }
        /**
        * Interface of a
        * with a
        * .
        */
        interface ICppMemberWithVisibility extends CppAst.ICppMember, CppAst.ICppElement
        {
        }
        /** A C++ declaration that has a name
        */
        interface ICppMember extends CppAst.ICppElement
        {
        }
        /**
        * Base interface of a
        * containing fields, functions, enums, classes, typedefs.
        */
        interface ICppDeclarationContainer extends CppAst.ICppContainer, CppAst.ICppAttributeContainer
        {
        }
        /** Base interface for all with attribute element.
        */
        interface ICppAttributeContainer
        {
        }
        /** Base interface of a type/method declared with template parameters.
        */
        interface ICppTemplateOwner
        {
        }
        class CppContainerList$1<TElement> extends System.Object implements System.Collections.Generic.IList$1<TElement>, System.Collections.Generic.ICollection$1<TElement>, System.Collections.Generic.IEnumerable$1<TElement>, System.Collections.IEnumerable
        {
            protected [__keep_incompatibility]: never;
            /** Gets the container this list is attached to.
            */
            public get Container(): CppAst.ICppContainer;
            public get Count(): number;
            public get IsReadOnly(): boolean;
            public GetEnumerator () : System.Collections.Generic.IEnumerator$1<TElement>
            public Add ($item: TElement) : void
            public AddRange ($collection: System.Collections.Generic.IEnumerable$1<TElement>) : void
            public Clear () : void
            public Contains ($item: TElement) : boolean
            public CopyTo ($array: System.Array$1<TElement>, $arrayIndex: number) : void
            public Remove ($item: TElement) : boolean
            public IndexOf ($item: TElement) : number
            public Insert ($index: number, $item: TElement) : void
            public RemoveAt ($index: number) : void
            public get_Item ($index: number) : TElement
            public set_Item ($index: number, $value: TElement) : void
            public constructor ($container: CppAst.ICppContainer)
            public [Symbol.iterator]() : IterableIterator<TElement>
        }
        /** Base class for a type using an element type.
        */
        class CppTypeWithElementType extends CppAst.CppType implements CppAst.ICppElement
        {
            protected [__keep_incompatibility]: never;
            public get ElementType(): CppAst.CppType;
            public get SizeOf(): number;
            public set SizeOf(value: number);
        }
        /** Kinds of a C++ type (e.g primitive, pointer...)
        */
        enum CppTypeKind
        { Primitive = 0, Pointer = 1, Reference = 2, Array = 3, Qualified = 4, Function = 5, Typedef = 6, StructOrClass = 7, Enum = 8, TemplateParameterType = 9, TemplateParameterNonType = 10, TemplateArgumentType = 11, Unexposed = 12 }
        /** A range of source location.
        */
        class CppSourceSpan extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Extension methods.
        */
        class CppExtensions extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Gets a boolean indicating whether this token kind is an identifier or keyword
            * @param $kind The token kind
            * @returns true if the token is an identifier or keyword, false otherwise
            */
            public static IsIdentifierOrKeyword ($kind: CppAst.CppTokenKind) : boolean
            /**
            * Gets the display name of the specified type. If the type is
            * it will
            * only use the name provided by
            * @param $type The type
            * @returns The display name
            */
            public static GetDisplayName ($type: CppAst.CppType) : string
            /** Gets a boolean indicating whether the attribute is a dllexport or visibility("default")
            * @param $attribute The attribute to check against
            * @returns true if the attribute is a dllexport or visibility("default")
            */
            public static IsPublicExport ($attribute: CppAst.CppAttribute) : boolean
            /** Gets a boolean indicating whether the function is a dllexport or visibility("default")
            * @param $cppClass The class to check against
            * @returns true if the class is a dllexport or visibility("default")
            */
            public static IsPublicExport ($cppClass: CppAst.CppClass) : boolean
            /** Gets a boolean indicating whether the function is a dllexport or visibility("default")
            * @param $function The function to check against
            * @returns true if the function is a dllexport or visibility("default")
            */
            public static IsPublicExport ($function: CppAst.CppFunction) : boolean
        }
        /**
        * Kind of a
        * used by
        */
        enum CppTokenKind
        { Punctuation = 0, Keyword = 1, Identifier = 2, Literal = 3, Comment = 4 }
        /** An attached C++ attribute
        */
        class CppAttribute extends CppAst.CppElement implements CppAst.ICppElement
        {
            protected [__keep_incompatibility]: never;
            /** Gets or sets the scope of this attribute
            */
            public get Scope(): string;
            public set Scope(value: string);
            /** Gets the attribute name.
            */
            public get Name(): string;
            public set Name(value: string);
            /** Gets the attribute arguments
            */
            public get Arguments(): string;
            public set Arguments(value: string);
            /** Gets a boolean indicating whether this attribute is variadic
            */
            public get IsVariadic(): boolean;
            public set IsVariadic(value: boolean);
            public get Kind(): CppAst.AttributeKind;
            public constructor ($name: string, $kind: CppAst.AttributeKind)
        }
        /** An attached C++ attribute
        */
        interface CppAttribute {
            /** Gets a boolean indicating whether the attribute is a dllexport or visibility("default")
            * @param $attribute The attribute to check against
            * @returns true if the attribute is a dllexport or visibility("default")
            */
            IsPublicExport () : boolean;
        }
        /**
        * Base class for any declaration that is not a type (
        * )
        */
        class CppDeclaration extends CppAst.CppElement implements CppAst.ICppElement, CppAst.ICppDeclaration
        {
            protected [__keep_incompatibility]: never;
            /** Gets or sets the comment attached to this element. Might be null.
            */
            public get Comment(): CppAst.CppComment;
            public set Comment(value: CppAst.CppComment);
        }
        /** A C++ function/method declaration.
        */
        class CppFunction extends CppAst.CppDeclaration implements CppAst.ICppElement, CppAst.ICppDeclaration, CppAst.ICppMemberWithVisibility, CppAst.ICppMember, CppAst.ICppTemplateOwner, CppAst.ICppContainer, CppAst.ICppAttributeContainer
        {
            protected [__keep_incompatibility]: never;
            public get Visibility(): CppAst.CppVisibility;
            public set Visibility(value: CppAst.CppVisibility);
            /** Gets or sets the calling convention.
            */
            public get CallingConvention(): CppAst.CppCallingConvention;
            public set CallingConvention(value: CppAst.CppCallingConvention);
            /** Gets the attached attributes.
            */
            public get Attributes(): System.Collections.Generic.List$1<CppAst.CppAttribute>;
            /** Gets or sets the storage qualifier.
            */
            public get StorageQualifier(): CppAst.CppStorageQualifier;
            public set StorageQualifier(value: CppAst.CppStorageQualifier);
            /** Gets or sets the linkage kind
            */
            public get LinkageKind(): CppAst.CppLinkageKind;
            public set LinkageKind(value: CppAst.CppLinkageKind);
            /** Gets or sets the return type.
            */
            public get ReturnType(): CppAst.CppType;
            public set ReturnType(value: CppAst.CppType);
            /** Gets or sets a boolean indicating whether this method is a constructor method.
            */
            public get IsConstructor(): boolean;
            public set IsConstructor(value: boolean);
            /** Gets or sets a boolean indicating whether this method is a destructor method.
            */
            public get IsDestructor(): boolean;
            public set IsDestructor(value: boolean);
            public get Name(): string;
            public set Name(value: string);
            /** Gets a list of the parameters.
            */
            public get Parameters(): CppAst.CppContainerList$1<CppAst.CppParameter>;
            public get DefaultParamCount(): number;
            /** Gets or sets the flags of this function.
            */
            public get Flags(): CppAst.CppFunctionFlags;
            public set Flags(value: CppAst.CppFunctionFlags);
            public get IsCxxClassMethod(): boolean;
            public get IsPureVirtual(): boolean;
            public get IsVirtual(): boolean;
            public get IsStatic(): boolean;
            public get IsConst(): boolean;
            public get IsFunctionTemplate(): boolean;
            public get TemplateParameters(): System.Collections.Generic.List$1<CppAst.CppType>;
            public Children () : System.Collections.Generic.IEnumerable$1<CppAst.ICppDeclaration>
            public constructor ($name: string)
        }
        /** A C++ function/method declaration.
        */
        interface CppFunction {
            /** Gets a boolean indicating whether the function is a dllexport or visibility("default")
            * @param $function The function to check against
            * @returns true if the function is a dllexport or visibility("default")
            */
            IsPublicExport () : boolean;
        }
        /** For c++ specialized template argument
        */
        class CppTemplateArgument extends CppAst.CppType implements CppAst.ICppElement
        {
            protected [__keep_incompatibility]: never;
            public get ArgKind(): CppAst.CppTemplateArgumentKind;
            public get ArgAsType(): CppAst.CppType;
            public get ArgAsInteger(): bigint;
            public get ArgAsUnknown(): string;
            public get ArgString(): string;
            /** Gets the default value.
            */
            public get SourceParam(): CppAst.CppType;
            public get IsSpecializedArgument(): boolean;
            public get SizeOf(): number;
            public set SizeOf(value: number);
            public constructor ($sourceParam: CppAst.CppType, $typeArg: CppAst.CppType, $isSpecializedArgument: boolean)
            public constructor ($sourceParam: CppAst.CppType, $intArg: bigint)
            public constructor ($sourceParam: CppAst.CppType, $unknownStr: string)
        }
        /** Type of a template argument
        */
        enum CppTemplateArgumentKind
        { AsType = 0, AsInteger = 1, Unknown = 2 }
        /** A C++ function type (e.g `void (*)(int arg1, int arg2)`)
        */
        class CppFunctionType extends CppAst.CppTypeDeclaration implements CppAst.ICppElement, CppAst.ICppDeclaration, CppAst.ICppContainer
        {
            protected [__keep_incompatibility]: never;
            /** Gets or sets the calling convention of this function type.
            */
            public get CallingConvention(): CppAst.CppCallingConvention;
            public set CallingConvention(value: CppAst.CppCallingConvention);
            /** Gets or sets the return type of this function type.
            */
            public get ReturnType(): CppAst.CppType;
            public set ReturnType(value: CppAst.CppType);
            /** Gets a list of the parameters.
            */
            public get Parameters(): CppAst.CppContainerList$1<CppAst.CppParameter>;
            public get SizeOf(): number;
            public set SizeOf(value: number);
            public constructor ($returnType: CppAst.CppType)
        }
        /**
        * The calling function of a
        * or
        */
        enum CppCallingConvention
        { Default = 0, C = 1, X86StdCall = 2, X86FastCall = 3, X86ThisCall = 4, X86Pascal = 5, AAPCS = 6, AAPCS_VFP = 7, X86RegCall = 8, IntelOclBicc = 9, Win64 = 10, X86_64SysV = 11, X86VectorCall = 12, Swift = 13, PreserveMost = 14, PreserveAll = 15, AArch64VectorCall = 16, Invalid = 17, Unexposed = 18 }
        /** A C++ function parameter.
        */
        class CppParameter extends CppAst.CppDeclaration implements CppAst.ICppElement, CppAst.ICppDeclaration, CppAst.ICppMember
        {
            protected [__keep_incompatibility]: never;
            /** Gets the type of this parameter.
            */
            public get Type(): CppAst.CppType;
            public set Type(value: CppAst.CppType);
            /** Gets the name of this parameter.
            */
            public get Name(): string;
            public set Name(value: string);
            /** Gets or sets the default value.
            */
            public get InitValue(): CppAst.CppValue;
            public set InitValue(value: CppAst.CppValue);
            /** Gets or sets the default value as an expression.
            */
            public get InitExpression(): CppAst.CppExpression;
            public set InitExpression(value: CppAst.CppExpression);
            public constructor ($type: CppAst.CppType, $name: string)
        }
        /** Base class for all comments.
        */
        class CppComment extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /**
        * Base class for expressions used in
        * and
        */
        class CppExpression extends CppAst.CppElement implements CppAst.ICppElement
        {
            protected [__keep_incompatibility]: never;
            /** Gets the kind of this expression.
            */
            public get Kind(): CppAst.CppExpressionKind;
            /** Gets the arguments of this expression. Might be null.
            */
            public get Arguments(): System.Collections.Generic.List$1<CppAst.CppExpression>;
            public set Arguments(value: System.Collections.Generic.List$1<CppAst.CppExpression>);
            /** Adds an argument to this expression.
            * @param $arg An argument
            */
            public AddArgument ($arg: CppAst.CppExpression) : void
        }
        enum CppExpressionKind
        { Unexposed = 0, DeclRef = 1, MemberRef = 2, Call = 3, ObjCMessage = 4, Block = 5, IntegerLiteral = 6, FloatingLiteral = 7, ImaginaryLiteral = 8, StringLiteral = 9, CharacterLiteral = 10, Paren = 11, UnaryOperator = 12, ArraySubscript = 13, BinaryOperator = 14, CompoundAssignOperator = 15, ConditionalOperator = 16, CStyleCast = 17, CompoundLiteral = 18, InitList = 19, AddrLabel = 20, Stmt = 21, GenericSelection = 22, GNUNull = 23, CXXStaticCast = 24, CXXDynamicCast = 25, CXXReinterpretCast = 26, CXXConstCast = 27, CXXFunctionalCast = 28, CXXTypeid = 29, CXXBoolLiteral = 30, CXXNullPtrLiteral = 31, CXXThis = 32, CXXThrow = 33, CXXNew = 34, CXXDelete = 35, Unary = 36, ObjCStringLiteral = 37, ObjCEncode = 38, ObjCSelector = 39, ObjCProtocol = 40, ObjCBridgedCast = 41, PackExpansion = 42, SizeOfPack = 43, Lambda = 44, ObjCBoolLiteral = 45, ObjCSelf = 46, OMPArraySection = 47, ObjCAvailabilityCheck = 48, FixedPointLiteral = 49 }
        /**
        * An expression that is not exposed in details but only through a list of
        * and a textual representation
        */
        class CppRawExpression extends CppAst.CppExpression implements CppAst.ICppElement
        {
            protected [__keep_incompatibility]: never;
            /** Gets the tokens associated to this raw expression.
            */
            public get Tokens(): System.Collections.Generic.List$1<CppAst.CppToken>;
            /** Gets or sets a textual representation from the tokens.
            */
            public get Text(): string;
            public set Text(value: string);
            /**
            * Update the
            * representation from the
            * .
            */
            public UpdateTextFromTokens () : void
            public constructor ($kind: CppAst.CppExpressionKind)
        }
        /**
        * A C++ token used by
        * .
        */
        class CppToken extends CppAst.CppElement implements CppAst.ICppElement
        {
            protected [__keep_incompatibility]: never;
        }
        /** A base Cpp container for macros, classes, fields, functions, enums, typesdefs.
        */
        class CppGlobalDeclarationContainer extends CppAst.CppElement implements CppAst.ICppElement, CppAst.ICppGlobalDeclarationContainer, CppAst.ICppDeclarationContainer, CppAst.ICppContainer, CppAst.ICppAttributeContainer
        {
            protected [__keep_incompatibility]: never;
            /** Gets the macros defines for this container.
            */
            public get Macros(): System.Collections.Generic.List$1<CppAst.CppMacro>;
            public get Fields(): CppAst.CppContainerList$1<CppAst.CppField>;
            public get Functions(): CppAst.CppContainerList$1<CppAst.CppFunction>;
            public get Enums(): CppAst.CppContainerList$1<CppAst.CppEnum>;
            public get Classes(): CppAst.CppContainerList$1<CppAst.CppClass>;
            public get Typedefs(): CppAst.CppContainerList$1<CppAst.CppTypedef>;
            public get Namespaces(): CppAst.CppContainerList$1<CppAst.CppNamespace>;
            public get Attributes(): System.Collections.Generic.List$1<CppAst.CppAttribute>;
            public Children () : System.Collections.Generic.IEnumerable$1<CppAst.ICppDeclaration>
            /**
            * Find a
            * by name declared directly by this container.
            * @param $name Name of the element to find
            * @returns The CppElement found or null if not found
            */
            public FindByName ($name: string) : CppAst.CppElement
            /**
            * Find a
            * by full name(such as gbf::math::Vector3).
            * @param $name Name of the element to find
            * @returns The CppElement found or null if not found
            */
            public FindByFullName ($name: string) : CppAst.CppElement
            /**
            * Find a
            * by name declared within the specified container.
            * @param $container The container to search for the element by name
            * @param $name Name of the element to find
            * @returns The CppElement found or null if not found
            */
            public FindByName ($container: CppAst.ICppContainer, $name: string) : CppAst.CppElement
            /**
            * Find a list of
            * matching name (overloads) declared within the specified container.
            * @param $container The container to search for the element by name
            * @param $name Name of the element to find
            * @returns A list of CppElement found or empty enumeration if not found
            */
            public FindListByName ($container: CppAst.ICppContainer, $name: string) : System.Collections.Generic.IEnumerable$1<CppAst.CppElement>
            /**
            * Clear the cache used by all
            * functions.
            */
            public ClearCacheByName () : void
            public constructor ()
        }
        /**
        * A
        * that can contain also namespaces.
        */
        interface ICppGlobalDeclarationContainer extends CppAst.ICppDeclarationContainer, CppAst.ICppContainer, CppAst.ICppAttributeContainer
        {
        }
        /** The result of a compilation for a sets of C++ files.
        */
        class CppCompilation extends CppAst.CppGlobalDeclarationContainer implements CppAst.ICppElement, CppAst.ICppGlobalDeclarationContainer, CppAst.ICppDeclarationContainer, CppAst.ICppContainer, CppAst.ICppAttributeContainer
        {
            protected [__keep_incompatibility]: never;
            /** Gets the attached diagnostic messages.
            */
            public get Diagnostics(): CppAst.CppDiagnosticBag;
            /** Gets the final input header text used by this compilation.
            */
            public get InputText(): string;
            public set InputText(value: string);
            /**
            * Gets a boolean indicating whether this instance has errors. See
            * for more details.
            */
            public get HasErrors(): boolean;
            /** Gets all the declarations that are coming from system include folders used by the declarations in this object.
            */
            public get System(): CppAst.CppGlobalDeclarationContainer;
            public constructor ()
        }
        class CppDiagnosticBag extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** A C++ Macro, only valid if the parser is initialized with
        */
        class CppMacro extends CppAst.CppElement implements CppAst.ICppElement, CppAst.ICppMember
        {
            protected [__keep_incompatibility]: never;
        }
        /** A C++ field (of a struct/class) or global variable.
        */
        class CppField extends CppAst.CppDeclaration implements CppAst.ICppElement, CppAst.ICppDeclaration, CppAst.ICppMemberWithVisibility, CppAst.ICppMember, CppAst.ICppAttributeContainer
        {
            protected [__keep_incompatibility]: never;
            public get Visibility(): CppAst.CppVisibility;
            public set Visibility(value: CppAst.CppVisibility);
            /** Gets or sets the storage qualifier of this field/variable.
            */
            public get StorageQualifier(): CppAst.CppStorageQualifier;
            public set StorageQualifier(value: CppAst.CppStorageQualifier);
            /** Gets attached attributes. Might be null.
            */
            public get Attributes(): System.Collections.Generic.List$1<CppAst.CppAttribute>;
            /** Gets the type of this field/variable.
            */
            public get Type(): CppAst.CppType;
            public set Type(value: CppAst.CppType);
            public get Name(): string;
            public set Name(value: string);
            /** Gets or sets a boolean indicating if this field was created from an anonymous type
            */
            public get IsAnonymous(): boolean;
            public set IsAnonymous(value: boolean);
            /** Gets the associated init value (either an integer or a string...)
            */
            public get InitValue(): CppAst.CppValue;
            public set InitValue(value: CppAst.CppValue);
            /** Gets the associated init value as an expression.
            */
            public get InitExpression(): CppAst.CppExpression;
            public set InitExpression(value: CppAst.CppExpression);
            /**
            * Gets or sets a boolean indicating that this field is a bit field. See
            * to get the width of this field if
            * is
            * true
            */
            public get IsBitField(): boolean;
            public set IsBitField(value: boolean);
            /**
            * Gets or sets the number of bits for this bit field. Only valid if
            * is
            * true
            * .
            */
            public get BitFieldWidth(): number;
            public set BitFieldWidth(value: number);
            /** Gets or sets the offset of the field in bytes.
            */
            public get Offset(): bigint;
            public set Offset(value: bigint);
            public constructor ($type: CppAst.CppType, $name: string)
        }
        /** A C++ standard or scoped enum.
        */
        class CppEnum extends CppAst.CppTypeDeclaration implements CppAst.ICppElement, CppAst.ICppDeclaration, CppAst.ICppContainer, CppAst.ICppMemberWithVisibility, CppAst.ICppMember, CppAst.ICppAttributeContainer
        {
            protected [__keep_incompatibility]: never;
            public get Visibility(): CppAst.CppVisibility;
            public set Visibility(value: CppAst.CppVisibility);
            public get Name(): string;
            public set Name(value: string);
            public get FullName(): string;
            /** Gets or sets a boolean indicating if this enum is scoped.
            */
            public get IsScoped(): boolean;
            public set IsScoped(value: boolean);
            /** Gets or sets the underlying integer type of this enum.
            */
            public get IntegerType(): CppAst.CppType;
            public set IntegerType(value: CppAst.CppType);
            /** Gets the definition of the enum items.
            */
            public get Items(): CppAst.CppContainerList$1<CppAst.CppEnumItem>;
            public get IsAnonymous(): boolean;
            public set IsAnonymous(value: boolean);
            /** Gets the list of attached attributes.
            */
            public get Attributes(): System.Collections.Generic.List$1<CppAst.CppAttribute>;
            public get SizeOf(): number;
            public set SizeOf(value: number);
            public constructor ($name: string)
        }
        /** A C++ typedef (e.g `typedef int XXX`)
        */
        class CppTypedef extends CppAst.CppTypeDeclaration implements CppAst.ICppElement, CppAst.ICppDeclaration, CppAst.ICppContainer, CppAst.ICppMemberWithVisibility, CppAst.ICppMember
        {
            protected [__keep_incompatibility]: never;
        }
        /** Defines a C++ namespace. This is only one level of namespace (e.g `A` in `A::B::C`)
        */
        class CppNamespace extends CppAst.CppDeclaration implements CppAst.ICppElement, CppAst.ICppDeclaration, CppAst.ICppMember, CppAst.ICppGlobalDeclarationContainer, CppAst.ICppDeclarationContainer, CppAst.ICppContainer, CppAst.ICppAttributeContainer
        {
            protected [__keep_incompatibility]: never;
            /** Name of the namespace.
            */
            public get Name(): string;
            public set Name(value: string);
            /** Is the namespace inline or not(such as std::__1::vector).
            */
            public get IsInlineNamespace(): boolean;
            public set IsInlineNamespace(value: boolean);
            public get Fields(): CppAst.CppContainerList$1<CppAst.CppField>;
            public get Functions(): CppAst.CppContainerList$1<CppAst.CppFunction>;
            public get Enums(): CppAst.CppContainerList$1<CppAst.CppEnum>;
            public get Classes(): CppAst.CppContainerList$1<CppAst.CppClass>;
            public get Typedefs(): CppAst.CppContainerList$1<CppAst.CppTypedef>;
            public get Namespaces(): CppAst.CppContainerList$1<CppAst.CppNamespace>;
            public get Attributes(): System.Collections.Generic.List$1<CppAst.CppAttribute>;
            public Children () : System.Collections.Generic.IEnumerable$1<CppAst.ICppDeclaration>
            public constructor ($name: string)
        }
        /**
        * Type of a
        * (class, struct or union)
        */
        enum CppClassKind
        { Class = 0, Struct = 1, Union = 2 }
        /** Type of a template
        */
        enum CppTemplateKind
        { NormalClass = 0, TemplateClass = 1, PartialTemplateClass = 2, TemplateSpecializedClass = 3 }
        /** Gets the visibility of a C++ element.
        */
        enum CppVisibility
        { Default = 0, Public = 1, Protected = 2, Private = 3 }
        /** A C++ base type used by
        */
        class CppBaseType extends CppAst.CppElement implements CppAst.ICppElement
        {
            protected [__keep_incompatibility]: never;
            /** Gets or sets the visibility of this type.
            */
            public get Visibility(): CppAst.CppVisibility;
            public set Visibility(value: CppAst.CppVisibility);
            /** Gets or sets if this element is virtual.
            */
            public get IsVirtual(): boolean;
            public set IsVirtual(value: boolean);
            /** Gets the C++ type associated.
            */
            public get Type(): CppAst.CppType;
            public constructor ($baseType: CppAst.CppType)
        }
        /** Defines the type of storage.
        */
        enum CppStorageQualifier
        { None = 0, Extern = 1, Static = 2 }
        /** Type of linkage.
        */
        enum CppLinkageKind
        { Invalid = 0, NoLinkage = 1, Internal = 2, UniqueExternal = 3, External = 4 }
        /** Flags attached to a
        */
        enum CppFunctionFlags
        { None = 0, Const = 1, Defaulted = 2, Pure = 4, Virtual = 8, Method = 16, Inline = 32, Constructor = 64, Destructor = 128, Variadic = 256, FunctionTemplate = 512, Deleted = 1024 }
        /** A C++ default value used to initialize
        */
        class CppValue extends CppAst.CppElement implements CppAst.ICppElement
        {
            protected [__keep_incompatibility]: never;
        }
        /**
        * An enum item of
        * .
        */
        class CppEnumItem extends CppAst.CppDeclaration implements CppAst.ICppElement, CppAst.ICppDeclaration, CppAst.ICppMember, CppAst.ICppAttributeContainer
        {
            protected [__keep_incompatibility]: never;
        }
        /** Attribute kind enum here
        */
        enum AttributeKind
        { CxxSystemAttribute = 0, AnnotateAttribute = 1, CommentAttribute = 2, TokenAttribute = 3 }
    }
    namespace System.Collections.ObjectModel {
        class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.Generic.IList$1<T>, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.IList, System.Collections.ICollection, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
            protected [__keep_incompatibility]: never;
            public [Symbol.iterator]() : IterableIterator<T>
        }
    }
    namespace System.Collections.Generic.List$1 {
        class Enumerator<T> extends System.ValueType implements System.Collections.Generic.IEnumerator$1<T>, System.IDisposable, System.Collections.IEnumerator
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICustomAttributeProvider
        {
        }
        interface IReflect
        {
        }
        interface MemberFilter
        { 
        (m: System.Reflection.MemberInfo, filterCriteria: any) : boolean; 
        Invoke?: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean;
        }
        var MemberFilter: { new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter; }
        class AssemblyName extends System.Object implements System.ICloneable, System.Runtime.Serialization.IDeserializationCallback, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
        class Assembly extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
        enum MemberTypes
        { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        class Module extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
        class MethodBase extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        enum GenericParameterAttributes
        { None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        enum TypeAttributes
        { VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, RTSpecialName = 2048, HasSecurity = 262144, ReservedMask = 264192 }
        class ConstructorInfo extends System.Reflection.MethodBase implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        enum BindingFlags
        { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216, DoNotWrapExceptions = 33554432 }
        class Binder extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ParameterModifier extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        enum CallingConventions
        { Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        class EventInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class FieldInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class MethodInfo extends System.Reflection.MethodBase implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class PropertyInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class InterfaceMapping extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        interface TypeFilter
        { 
        (m: System.Type, filterCriteria: any) : boolean; 
        Invoke?: (m: System.Type, filterCriteria: any) => boolean;
        }
        var TypeFilter: { new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter; }
    }
    namespace System.Globalization {
        class CultureInfo extends System.Object implements System.IFormatProvider, System.ICloneable
        {
            protected [__keep_incompatibility]: never;
        }
    }
}
