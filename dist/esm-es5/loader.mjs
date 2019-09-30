import { a as patchEsm, b as bootstrapLazy } from './core-e3f6c458.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["kiosk-site-navigation", [[1, "kiosk-site-navigation"]]]], options);
    });
};
export { defineCustomElements };
