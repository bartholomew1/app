const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportHeight: 720,
  viewportWidth: 1280,
  retries: {
    "openMode": 1,
    "runMode": 1
  },
  video: false,
  vidoUploadOnPasses: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
