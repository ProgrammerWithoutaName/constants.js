'use strict';

var domConstantsLibrary = require('../../../../locationHelpers/domConstantsLibrary');

function buildDomConstantsMock () {
  var results = {};
  return {
    __mockCallResults: results,
    $findElements: function(givenValue) {
      results.$findElements = {
        given: givenValue
      };
    }
  };
}

describe('domValueBuilder', function(){
  var results, given;

  beforeAll(function() {

    given = {
      domValue: 'foo',
      domConstants: buildDomConstantsMock(),
      selectorSymbol: '~'
    };

    results = {};
    results.domConstants = given.domConstants.__mockCallResults;

    results.build = domConstantsLibrary.domValueBuilder.build(given.domValue, given.domConstants, given.selectorSymbol);
  });

  it('should return a value object', function (){
    expect(results.build).not.toBe(undefined);
    expect(results.build.selector).not.toBe(undefined);
    expect(results.build.name).toBe(given.domValue);

    expect(typeof results.build.findElements).toBe('function');
  });

  it('should return the correct value for the selector', function(){
    expect(results.build.selector).toBe(given.selectorSymbol + given.domValue);
  });

  it('should pass in the correct value when findElements is called', function(){
    results.build.findElements();
    expect(results.domConstants.$findElements.given).toBe(given.selectorSymbol + given.domValue);
  });
});
