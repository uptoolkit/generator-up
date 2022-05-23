"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generate a react-component", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      username: "johndoe",
      template: "react-component",
      package: "mytestcomponent",
      vendor: "acme",
      component: "MyComponent",
      target: "."
    });
  });

  it("creates files", () => {
    assert.file("mytestcomponent/package.json");
  });
});

describe("generate a react-hook", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      username: "johndoe",
      template: "react-component",
      package: "myhook",
      vendor: "acme",
      component: "useHook",
      target: "."
    });
  });

  it("creates files", () => {
    assert.file("myhook/package.json");
  });
});
