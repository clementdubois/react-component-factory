#!/usr/bin/env node
const fs = require('fs');
const colors = require('colors');
const Handlebars = require('handlebars');

const name = process.argv[2];
const dest = process.argv[3];
const fields = process.argv.slice(4);
const utilsPath = getUtilsPath(dest);

function getUtilsPath(src){
  const pathSplit = src.split("/");
  const upPathNumber = pathSplit.length - pathSplit.findIndex((element) => element === "src") - 1;
  return new Array(upPathNumber).fill("..").concat("utils").join("/");
}

const layouts = [
  {"file" : "schema.js", "dest" : name + ".js"},
  {"file" : "schema.serverSpec.js", "dest" : name + ".serverSpec.js"},
  {"file" : "schema.propTypes.js", "dest" : name + ".propTypes.js"},
  {"file" : "schema.fixtures.js", "dest" : name + ".fixtures.js"},
];

console.log("Schema Creation started :".rainbow, name.rainbow);

function mapFields(fields) {
  return fields.map((field) => {
    const fieldsDetails = field.split(":");
    return {
      name : fieldsDetails[0],
      type : fieldsDetails[1],
      default : fieldsDetails[2]
    };
  });
}

Handlebars.registerHelper('graphqlType', require("./templates/helpers").graphqlType);
Handlebars.registerHelper('proptype', require("./templates/helpers").proptype);


layouts.forEach((layout) => {
  fs.readFile(__dirname + '/templates/' + layout.file, 'utf8', (err, data) => {
    if(err){
      return console.err(err.error);
    }
    const result = Handlebars.compile(data)({componentName: name, fields : mapFields(fields), utilsPath : utilsPath});
    fs.writeFile((dest || ".") + "/" + layout.dest, result, (err) => {
      if(err){
        return console.err(err.error);
      }
      return console.log((layout.dest + " successfully created").green);
    });
  });
});
