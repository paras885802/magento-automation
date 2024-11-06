const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',  // Ensures Cypress processes .feature files
    supportFile: 'cypress/support/commands.js',  // Or use 'commands.js' based on your setup
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      return config;
    },
  },
});