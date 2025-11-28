const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://blog.agibank.com.br",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});

