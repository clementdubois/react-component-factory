#!/usr/bin/env node
var fs = require('fs');
var colors = require('colors');
var Handlebars = require('handlebars');
var index, indexcss, jsx, spec, css;

var name = process.argv[2];
var path = process.argv[3];

var layouts = [
  {"file" : "index.js", "dest" : "index.js"},
  {"file" : "index.css", "dest" : "index.css"},
  {"file" : "Component.jsx", "dest" : name + ".jsx"},
  {"file" : "Component.spec.js", "dest" : name + ".spec.js"},
  {"file" : "Component.css", "dest" : name + ".css"}
];

console.log("Component Creation started :".rainbow, name.rainbow);

layouts.forEach(function(layout){
  fs.readFile(__dirname + '/templates/' + layout.file, 'utf8', function(err, data){
    if(err){
      return console.log(err.error);
    }
    var result = Handlebars.compile(data)({name: name});
    fs.writeFile((path || ".") + "/" + layout.dest, result, function(err){
      if(err){
        return console.log(err.error);
      }
      return console.log((layout.dest + " successfully created").green);
    });
  });
});
