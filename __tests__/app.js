"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-up:app", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      username: "johndoe",
      template: "react-component",
      package: "mytest",
      vendor: "acme",
      component: "MyComponent",
      target: "."
    });
  });

  it("creates files", () => {
    assert.file(["./mytest/package.json"]);
  });
});
