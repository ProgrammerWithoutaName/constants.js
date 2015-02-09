'use strict';

function createDomValue(domValue, domConstants, selectorSymbol){
  var selector = selectorSymbol + domValue;

  return {
    name: domValue,
    selector: selector,
    findElements: function() {
      return domConstants.$findElements(selector);
    }
  };
}

module.exports = {
  build: createDomValue
};
