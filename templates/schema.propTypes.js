"use strict";
const React = require("react");

const {{componentName}} = React.PropTypes.shape({
{{#each fields}}
  {{this.name}} : {{proptype this.type}},
{{/each}}
});

module.exports = {{componentName}};
