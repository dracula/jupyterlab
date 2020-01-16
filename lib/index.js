"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apputils_1 = require("@jupyterlab/apputils");
/**
 * A plugin for the Dracula
 */
const plugin = {
    id: 'jupyterlab_dracula:plugin',
    requires: [apputils_1.IThemeManager],
    activate: function (app, manager) {
        const style = '@DottedGlass/jupyterlab_dracula/index.css';
        manager.register({
            name: 'Dracula',
            isLight: false,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
    },
    autoStart: true
};
exports.default = plugin;
