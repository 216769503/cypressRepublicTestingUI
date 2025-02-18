const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Enable video recording
    video: true,

    // Set the folder where videos will be saved
    videosFolder: 'cypress/videos',

    // Enable screenshot capturing on test failure
    screenshotOnRunFailure: true,

    // Set the folder where screenshots will be saved
    screenshotsFolder: 'cypress/screenshots',

    // Set the base URL for your tests
    baseUrl: 'https://the-republic-six.vercel.app/',

    // Node event listeners for custom tasks or plugins
    setupNodeEvents(on, config) {
      // Example: Add a custom task
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });

      // Example: Load environment variables
      config.env = process.env;

      // Return the updated config object
      return config;
    },
  },
});