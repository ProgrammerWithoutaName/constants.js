'use strict';

var dictionary;

dictionary = require('dictionary.js');

function getReservedNames(givenReservedNames) {
  var reservedNames;
  reservedNames = givenReservedNames ? givenReservedNames : [];
  reservedNames.push('$setFindElementsFunction');
  return reservedNames;
}

function getValueKey(nameValue){
  return nameValue.value.name;
}

function buildConstantsDictionary(options) {
  var domConstants;

  domConstants = dictionary.build({
    reservedNames: getReservedNames(options.reservedNames),
    dictionaryName: options.dictionaryName,
    valueKeyFunction: getValueKey
  });

  return domConstants;
}

module.exports = {
  build: buildConstantsDictionary
};
