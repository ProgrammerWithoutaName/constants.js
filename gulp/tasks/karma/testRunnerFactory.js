'use strict';

var baseConfig, config, karma;

baseConfig = require('../../../karma/karmaBaseConfiguration');
config = require('../../config');
karma = require('karma').server;

function getBaseConfiguration() {
  var karmaConfig = baseConfig.getConfiguration(config.karma.configFile);

  return karmaConfig;
}

function modifyConfig(configurationDefinition) {
  var i;

  for(i = 0; i < configurationDefinition.modifiers; i +=1) {
    configurationDefinition.baseConfig = configurationDefinition.modifiers[i].modifyConfiguration(configurationDefinition.baseConfig);
  }

  return configurationDefinition.baseConfig;
}

function buildTestRunner(modifiers) {
  var karmaConfig;

  karmaConfig = getBaseConfiguration();

  karmaConfig = modifyConfig({
    baseConfig: karmaConfig,
    modifiers: modifiers
  });

  return function(done) { karma.start(karmaConfig, done); };
}


module.exports = {
  buildTestRunner: buildTestRunner
};
