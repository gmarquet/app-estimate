'use strict';

module.exports = function(environment) {
  const deployTarget = process.env.DEPLOY_TARGET;
  const GoogleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID || 'UA-XXXXXXXX-Y';
  let ENV = {
    modulePrefix: 'app-estimate',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };


  ENV.i18n = {
    defaultLocale: 'fr'
  };

  ENV.apiUrl = deployTarget || "";
  ENV['ember-cli-mirage'] = { enabled: false };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;

    ENV['ember-cli-mirage'] = { enabled: true };
  }

  if (environment === 'production') {
    ENV["analytics"] = {
      integrations: [
        {
          name: 'GoogleAnalytics',
          config: {
            id: GoogleAnalyticsId,
          }
        },
      ]
    };
    // here you can enable a production-specific feature
  }

  return ENV;
};
