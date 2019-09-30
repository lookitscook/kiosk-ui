'use strict';

const core = require('./core-ea608a80.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["kiosk-site-navigation.cjs",[[1,"kiosk-site-navigation"]]]], options);
});
