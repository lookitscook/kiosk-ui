import { a as patchEsm, b as bootstrapLazy } from './core-e3f6c458.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["kiosk-site-navigation",[[1,"kiosk-site-navigation"]]]], options);
  });
};

export { defineCustomElements };
