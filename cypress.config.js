const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ayuda.tenpo.cl/support/home",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
