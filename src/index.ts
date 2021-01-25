// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
/**
 * @packageDocumentation
 * @module JLDracula
 */

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

import { ITranslator } from '@jupyterlab/translation';

/**
 * A plugin for the Jupyter Light Theme.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'JLDracula:plugin',
  requires: [IThemeManager, ITranslator],
  activate: (
    app: JupyterFrontEnd,
    manager: IThemeManager,
    translator: ITranslator
  ) => {
    const trans = translator.load('jupyterlab');
    const style = 'JLDracula/index.css';
    manager.register({
      name: 'JLDracula',
      displayName: trans.__('JLDracula'),
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
