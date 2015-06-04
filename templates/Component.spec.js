"use strict";
const React = require("react/addons");
const TestUtils = React.addons.TestUtils;
const expect = require("chai").expect;
const sinon = require("sinon");

const name = require("./{{name}}.jsx");

describe("{{name}}", function () {
 let renderedComponent;

 beforeEach("Render {{name}}", function () {
   renderedComponent = TestUtils.renderIntoDocument(<{{name}} />);
 });

});