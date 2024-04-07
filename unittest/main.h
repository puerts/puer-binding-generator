#define NUMBER 1

class UnitTest {
public:
	static const char DEFAULT_BYTE;
	static const int DEFAULT_INT;
    UnitTest(int a = DEFAULT_INT) {}
	
	UnitTest() = delete;
	UnitTest& operator=(const UnitTest&) = delete;
};