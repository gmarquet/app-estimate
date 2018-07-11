'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': false,
      whitelist: ['bs-tooltip', 'bs-button', 'bs-dropdown', 'bs-popover', 'bs-form'],
    },
    numeral: {
      includeLocales: ['fr']
    }
  });

  return app.toTree();
};
