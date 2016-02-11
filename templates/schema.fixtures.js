"use strict";

const Test = require("../../../utils").Test;

module.exports = Test.Fixture.create({
{{#each fields}}
  {{this.name}} : "{{this.default}}",
{{/each}}
});
