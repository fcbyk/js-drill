const helloWorld = require("../grammar/hello-world.js");
const testConsoleLog = require("../../utils/console-test-utils.js")

describe("helloWorld", () => {
  it("should log 'hello world' to the console", () => {
    testConsoleLog(helloWorld,"hello world")
  });
});