'use strict';

var domValueBuilder = require('./domValueBuilder');

function extendAddFunction(options) {
  var superAdd = options.constantsBase.$add;

  options.constantsBase.$add = function(nameValues) {
    var valuesToAdd, nameValueNames;

    valuesToAdd = {};

    nameValueNames = Object.keys(nameValues);

    nameValueNames.forEach(function(domName){
      valuesToAdd[domName] = domValueBuilder.build(nameValues[domName], options.constantsBase, options.selectorSymbol);
    });

    superAdd(valuesToAdd);
  };
}

module.exports = {
  extend: extendAddFunction
};
