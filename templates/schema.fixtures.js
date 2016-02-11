"use strict";

const Test = require("{{utilsPath}}").Test;

module.exports = Test.Fixture.create({
{{#each fields}}
  {{this.name}} : "{{this.default}}",
{{/each}}
});
