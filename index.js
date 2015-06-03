#!/usr/bin/env node
var fs = require('fs');
var index, jsx, spec, css;

var name = process.argv[2];
var path = process.argv[3];

index = '' +
    '"use strict";\n' +
    'module.exports = require("./'+ name+'.jsx");\n' +
    '\n';

jsx = '' +
  '"use strict";\n' +
  'const React = require("react");\n' +
  '\n' +
  'module.exports = React.createClass({\n' +
  ' displayName : "'+name+'",\n' +
  '\n' +
  ' propTypes : {},\n' +
  '\n' +
  ' render : function render() {\n' +
  '   return (\n' +
  '     <div className="'+name+'">\n' +
  '     <\/div>\n' +
  '   );\n' +
  ' }\n' +
  '});\n' +
  '';

spec = '' +
  '"use strict";\n' +
  'const React = require("react/addons");\n' +
  'const TestUtils = React.addons.TestUtils;\n' +
  'const expect = require("chai").expect;\n' +
  'const sinon = require("sinon");\n' +
  '\n' +
  'const '+name+' = require("./'+name+'.jsx");\n' +
  '\n' +
  'describe("'+name+'", function () {\n' +
  ' let renderedComponent;\n' +
  '\n' +
  ' beforeEach("Render '+name+'", function () {\n' +
  '   renderedComponent = TestUtils.renderIntoDocument(<'+name+'/>);\n' +
  ' });\n' +
  '\n' +
  '});\n' +
  '';

css = '' +
  '/** @define '+name+'; use strict */\n' +
  '.'+name+'{}\n' +
  '';

console.log("Component Creation started :", name);

fs.writeFile((path || ".") + "/index.js", index, function(err){
    if(err){
        return console.log(err);
    }
    console.log("index successfully created");
});

fs.writeFile((path || ".") + "/"+name+".jsx", jsx, function(err){
if(err){
  return console.log(err);
}
console.log("jsx successfully created");
});

fs.writeFile((path || ".") + "/"+name+".spec.js", spec, function(err){
if(err){
  return console.log(err);
}
console.log("spec successfully created");
});

fs.writeFile((path || ".") + "/"+name+".css", css, function(err){
if(err){
  return console.log(err);
}
console.log("css successfully created");
});


