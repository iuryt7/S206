const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configura o Mochawesome Reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
    // Configurações de relatórios
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/results',  // Pasta onde o relatório será salvo
      overwrite: true,               // Sobrescreve relatórios existentes
      html: false,                   // Desabilita o HTML nativo do Mocha
      json: true                     // Habilita o relatório JSON
    },
  },
});
