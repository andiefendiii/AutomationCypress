const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://itera-qa.azurewebsites.net/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // defaultCommandTimeout: 20000,
    // pageLoadTimeout: 80000,
    // redirectionLimit: 60
  },

  // /////// setup env //////
  // env: {
  //   urlStaging: 'url...',
  //   urlProd: 'url...'
  // }

});
