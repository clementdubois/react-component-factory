"use strict";

const graphql = require("graphql");
const expect = require("chai").expect;
const sinon = require("sinon");
const expectType = require("{{utilsPath}}").Test.Graphql.expectType;
const {{componentName}} = require("./{{componentName}}").query;
const fixture = require("./{{componentName}}.fixtures");

describe("{{componentName}} query", () => {
{{#each fields}}
  describe("Field {{this.name}}", () => {
    it("Should have type {{this.type}}", () => {
      expectType({{../componentName}}.type).to.have.fieldType({{this.name}}, {{graphqlType this.type}});
    });

    it("Should resolve", () => {
      expectType({{../componentName}}.type, fixture({ {{this.name}} : "{{this.default}}" })).to.resolve.field({{this.name}}, "{{this.default}}");
    });
  });
{{/each}}

});
