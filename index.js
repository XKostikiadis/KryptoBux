const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);
const { startSorting, startRenaming } = require(`${basePath}/src/script.js`);

(() => {
  startSorting();
  // startRenaming();
  // for (let index = 0; index < 3; index++) {
  //   buildSetup(index);
  //   startCreating(index);
  // }
})();
