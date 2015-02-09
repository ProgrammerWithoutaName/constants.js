'use strict';

var sinon, domConstantsLibrary;

sinon = require('sinon');

function stubDictionaryBuild(){
  var results = {};

  sinon.stub(domConstantsLibrary.dictionary, 'build', function(options){
    var returned = {};
    results.build = {};
    results.build.given = options;
    results.returned = returned;

    return returned;
  });


  return results;
}


describe('dictionaryBuilder', function(){
  var results, given;

  beforeAll(function(){
    given = {};
    results = {};

    results.dictionary = stubDictionaryBuild();
  });

  it('should return a dictionaryObject', function(){
    expect(results.dictionary.build.returned).toBe(results.dictionaryBuilder.build);
  });

  it('should add "$setFindElementsFunction" to reservedNames');
  it('should not modify any reservedNames already passed in');
  it('should return the correct getValueKey function');
  it('should pass the correct dictionaryName given to it in options to the dictionary.build function');
});
/*
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
 */
