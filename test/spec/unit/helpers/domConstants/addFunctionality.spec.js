'use strict';
var domConstantsLibrary, sinon;

sinon = require('sinon');
domConstantsLibrary = require('../../../../locationHelpers/domConstantsLibrary');

function buildConstantsDictionary(){
  var results = {};

  var addFunction = function(given) {
    results.$add = given;
  };

  results.originalAddFunction = addFunction;
  results.dictionary = {
    __mockResults: results,
    $add: addFunction
  };

  return results.dictionary;
}

function stubDomValueBuilder(){
  var results = {
    build: []
  };
  sinon.stub(domConstantsLibrary.domValueBuilder, 'build', function(nameValue, dictionary, selectorSymbol){
    var result = {
      given: {
        nameValue: nameValue,
        dictionary: dictionary,
        selector: selectorSymbol
      },
      returned: {
        name: nameValue.name,
        value: nameValue.value
      }
    };
    results.build.push(result);
    return result.returned;
  });

  return results;
}

describe('addFunctionality', function(){
  var results, given;

  beforeAll(function() {
    given = {
      addFunctionality: {
        constantsBase: buildConstantsDictionary(),
        selectorSymbol: '~'
      },
      $add: {
        foo: 'fooThing',
        bar: 'barThing'
      }
    };

    results = {};
    results.constantsDictionary = given.addFunctionality.constantsBase.__mockResults;
    results.domValueBuild = stubDomValueBuilder();

    domConstantsLibrary.addFunctionality.extend(given.addFunctionality);
    results.constantsDictionary.dictionary.$add(given.$add);

    domConstantsLibrary.domValueBuilder.build.restore();
  });

  it('should extend the add functionality', function(){
    expect(results.constantsDictionary.dictionary.$add).not.toBe(results.constantsDictionary.originalAddFunction);
  });

  it('should call domValueBuilder with the correct selector', function(){
    var symbols, expected;

    symbols = results.domValueBuild.build.map(function(item){
      return item.given.selector;
    });

    expected = [given.addFunctionality.selectorSymbol, given.addFunctionality.selectorSymbol];

    expect(symbols).toEqual(expected);
  });

  it('should call domValueBuilder with the correct dictionary', function(){
    var dictionarys, expected;

    dictionarys = results.domValueBuild.build.map(function(item){
      return item.given.dictionary;
    });

    expected = [given.addFunctionality.constantsBase, given.addFunctionality.constantsBase];

    expect(dictionarys).toEqual(expected);
  });

  it('should call domValueBuilder for each item passed in add with item passed into add', function(){
    expect(results.domValueBuild.build.length).toBe(2);

    results.domValueBuild.build.forEach(function(options){
      expect(options.given.nameValue.value).toBe(given.$add[options.given.nameValue.name]);
    });

  });

});
