'use strict';

var dictionaryBuilder, addFunctionality;

dictionaryBuilder = require('./domConstants/dictionaryBuilder');
addFunctionality = require('./domConstants/addFunctionality');

function buildDomConstantsDictionary(options) {
  var constantsDictionary;

  constantsDictionary = dictionaryBuilder.build(options);

  addFunctionality.extend({
    selectorSymbol: options.selectorSymbol,
    constantsBase: constantsDictionary
  });

  constantsDictionary.$setFindElementsFunction = function(findElements) {
    constantsDictionary.$findElements = findElements;
  };

  return constantsDictionary;
}

module.exports = {
  build: buildDomConstantsDictionary
};
