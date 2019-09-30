'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-ea608a80.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["kiosk-site-navigation.cjs",[[1,"kiosk-site-navigation"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
