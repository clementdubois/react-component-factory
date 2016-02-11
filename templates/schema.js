"use strict";
const graphql = require("graphql");

const {{componentName}}Type = new graphql.GraphQLObjectType({
  name : "{{componentName}}Type",
  description : "{{componentName}}",
  fields : () => ({
{{#each fields}}
    {{this.name}} : {
      type : {{graphqlType this.type}},
      defaultValue : "{{this.default}}",
      resolve : (parent) => parent.{{this.name}},
    },
{{/each}}
  }),
});

module.exports = {
  query : {
    type : {{componentName}}Type,
  },
};
