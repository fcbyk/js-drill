const helloWorld = require("../exercises/hello-world");
const testConsoleLog = require("../utils/console-test-utils")

describe("helloWorld", () => {
  it("should log 'hello world' to the console", () => {
    testConsoleLog(helloWorld,"hello world")
  });
});