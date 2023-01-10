/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file  Manage plugins for the `vite` configuration module.
 */

// ━━ IMPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT OWN MODULES
import { debounce } from './scripts';

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 *  The `viteStaticCopy` object contains the configuration for the
 * `vite-plugin-static-copy`.
 *
 * @constant {object} viteStaticCopy
 */
const viteStaticCopy = {
  targets: [
    {
      src: ['assets/*', '!assets/*.gitkeep', '!assets/icons/*.gitkeep', '!assets/package/'],
      dest: '../assets',
    },
  ],
};

/**
 * The `customStart()` function create a custom start for vite run time.
 *
 * @private
 * @param   {string} params - File Reference.
 * @returns {void}
 * @example const plugins = [customStart(plugins.customStart)];
 *
 */
const customStart = debounce(params => {
  if (['.ts', '.js'].some(ext => params.filename.endsWith(`reload${ext}`))) {
    params.reload();
  } else {
    params?.startup(['.', '--no-sandbox']);
  }
});

//  ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { viteStaticCopy };
export { customStart };
