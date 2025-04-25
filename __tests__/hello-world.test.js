const helloWorld = require("../exercises/hello-world");

describe("helloWorld", () => {
  it("should log 'hello world' to the console", () => {
    // 模拟 console.log
    const consoleSpy = jest.spyOn(console, "log");

    helloWorld();

    // 验证 console.log 是否被调用，且参数是 "hello world"
    expect(consoleSpy).toHaveBeenCalledWith("hello world");

    // 清理 spy
    consoleSpy.mockRestore();
  });
});
