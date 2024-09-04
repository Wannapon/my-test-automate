const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    experimentalSessionAndOrigin: true, // for cookie , session , auth , storage etc..
  },

  // resolution
  viewportWidth: 1920,

  // resolution
  viewportHeight: 1080,

  // clear screenshot every compile
  trashAssetsBeforeRun: true,

  defaultCommandTimeout: 10000, //เปลี่ยนเวลารอคำสั่งเป็น 10s
  // screenshot ทุกครั้งที่ fail
  screenshotOnRunFailure: true,

  videoCompression: 15,
  videoCompression: false,

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
