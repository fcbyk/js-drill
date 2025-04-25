function testConsoleLog(func, expectedLog) {
    const spy = jest.spyOn(console, "log");
    try {
        func();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(expectedLog);
    } finally {
        spy.mockRestore();
    }
}

module.exports = testConsoleLog;