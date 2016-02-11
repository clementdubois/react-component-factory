"use strict";
const colors = require('colors');

module.exports = {
  proptype : (type) => {
    switch (type) {
      case "string":
        return "React.PropTypes.string";
      case "int":
        return "React.PropTypes.string";
      case "list":
        return "React.PropTypes.arrayOf()";
      case "object":
        return "React.PropTypes.shape()";
      default :
        return console.warn(`Type : ${type} is not yet implemented`.orange);
    }
  },
  graphqlType : (type) => {
    switch(type) {
      case "string":
        return "graphql.GraphQLString";
      case "int":
        return "graphql.GraphQLInt";
      case "list":
        return "new graphql.GraphQLList()";
      case "object":
        return "new graphql.GraphQLObjectType({})";
      default :
        return console.warn(`Type : ${type} is not yet implemented`.orange);
    }
  }
};