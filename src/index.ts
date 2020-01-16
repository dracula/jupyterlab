
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the Dracula
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_dracula:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@karosc/jupyterlab_dracula/index.css';

    manager.register({
      name: 'Dracula',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};


export default plugin;
