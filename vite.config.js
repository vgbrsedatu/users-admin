/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage all configuration settings for the `vite` module.
 */

// ━━ IMPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import electron from 'vite-electron-plugin';
import renderer from 'vite-plugin-electron-renderer';
import { customStart, loadViteEnv, copy } from 'vite-electron-plugin/plugin';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// » IMPORT MODULES
import * as scripts from './configurations/vite/scripts';
import * as plugins from './configurations/vite/plugins';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `ON_DEVELOPMENT` constant its used to know if the main process is running
 * in the development environment.
 *
 * @constant {bolean} ON_DEVELOPMENT
 */
const ON_DEVELOPMENT = process.env.NODE_ENV === 'development';

/**
 * The `paths` constant contains references to routes, to configure vite module.
 *
 * @constant {bolean} paths
 */
const paths = {
  distribution: scripts.createPath([__dirname, 'distribution']),
  output: scripts.createPath([__dirname, 'distribution', 'renderer']),
};

// » Remove files from the jetsk directory before building
scripts.remove(paths.distribution);

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const viteConfiguration = defineConfig({
  build: {
    outDir: paths.output,
  },
  plugins: [
    react(),
    electron({
      include: ['electron'],
      outDir: 'distribution/electron',
      transformOptions: {
        sourcemap: ON_DEVELOPMENT,
      },
      plugins: [
        customStart(plugins.customStart),
        loadViteEnv(),
        copy([
          { from: 'assets/icons/*', to: 'distribution/assets/icons/' },
          {
            from: 'electron/addons/Firebase/app/service-account.json',
            to: 'distribution/electron/addons/Firebase/app/service-account.json',
          },
        ]),
      ],
    }),
    renderer({
      nodeIntegration: false,
    }),
    viteStaticCopy(plugins.viteStaticCopy),
  ],
  clearScreen: true,
});

//  ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default viteConfiguration;
