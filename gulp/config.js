var dest, src, test, reports, path;

path = require('path');

dest = './dist';
src = './src';
test = './test';
reports = './reports';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    }
  },
  browserify: {
    // A separate bundle will be generated for each bundle config in the list below
    bundleConfigs: [{
      entries: src + '/constants.js',
      dest: dest,
      template: src + '/_bundleTemplate.js',
      outputName: 'constants.js',
      require: [],
      external: [],
      noParse: ['/node_modules/dictionary.js/dist/dictionary.js']
    }]
  },
  production: {
    jsSrc: dest + '/constants.js',
    dest: dest
  },
  karma: {
    configFile: __dirname + '/../karma.conf.js',
    //Browserify plugins
    browserify: {
      debug: true
    },
  },
  linter: {
    files: [ src + '/**/*.js', '!'  + src + '/**/_*.js']
  },
  complexity: {
    files: [ src + '/**/*.js', '!'  + src + '/**/_*.js']
  },
  cleaning: {
    dist: dest,
    reports: reports
  }
};
