'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': false,
      whitelist: [
        'bs-tooltip',
        'bs-button',
        'bs-dropdown',
        'bs-form',
        'bs-alert',
        'bs-popover',
        'bs-collapse'
      ],
    },
    numeral: {
      includeLocales: ['fr']
    }
    fingerprint: {
      exclude: ['assets/images/*']
    }
  });

  return app.toTree();
};
