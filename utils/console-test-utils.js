function testConsoleLog(func, expectedLog) {
    const spy = jest.spyOn(console, "log").mockImplementation(() => { });
    try {
        func();
        const combinedOutput = spy.mock.calls
            .map((args) => args.join(" "))  // 处理多参数
            .join("\n");                      // 拼接所有调用
        expect(combinedOutput).toBe(expectedLog);
    } finally {
        spy.mockRestore();
    }
}

module.exports = testConsoleLog;