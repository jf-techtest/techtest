const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: `file://${__dirname}/../index.html`, // Index.html file
    testIsolation: false
  }
});
