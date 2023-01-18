/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages the update service for electron app.
 */

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Details that identify the repository (name and owner).
 *
 * The `owner` property this is either your username or the name of the
 * organization that owns the repository.
 *
 * @typedef   {object}  github
 * @property  {string}  owner   - The owner of repositor.
 * @property  {string}  name    - The name of repository.
 */

/**
 * An `Object` with information to configure the `autoUpdater` electron module.
 *
 * @typedef   {object}  updateOptions
 * @property  {string}  url           - The url to which the http request will be made.
 * @property  {string}  headers       - The headers to make the http request.
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const PLATFORM = process.platform;
const ARCHITECTURE = process.arch;
const HOST = 'https://update.electronjs.org';

// ━━	MODULE	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `createOptions()` function returns an `Object` with information to
 * configure the `autoUpdater` electron module, to update the application.
 *
 * NOTE: The `headers` property must contain the following information,
 * application name, application version, architecture and platform.
 *
 * `electron-app/1.0.0 (win32: x64)`
 *
 * @private
 * @param   {object} settings - Adds name, icon and menu to tray.
 * @param   {github} settings.github - Details that identify the repository.
 * @param   {string} settings.version - The version of the current bundle or executable is returned.
 * @returns {updateOptions} Information to configure the `autoUpdater`.
 * @example const options = createOptions({
 *  github: {
 *    owner: 'user',
 *    repository: 'electron-app'
 *  },
 *  version: app.getVersion(),
 * });
 *
 */
const createOptions = ({ github, version }) => {
  const REPOSITORY = `${github.owner}/${github.name}`;
  const FEED_URL = `${HOST}/${REPOSITORY}/${PLATFORM}-${ARCHITECTURE}/${version}`;
  const USER_AGENT = `${github.repository}/${version} (${PLATFORM}: ${ARCHITECTURE})`;
  return { url: FEED_URL, headers: { USER_AGENT } };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { createOptions }; // eslint-disable-line import/prefer-default-export
