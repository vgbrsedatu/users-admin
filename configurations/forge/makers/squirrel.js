/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage configuration for the maker squirrel.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
const commons = require('../commons');

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `maker-squirrel` builds a number of files required to distribute apps
 * using the Squirrel.Windows framework. It generates a `{appName} Setup.exe`
 * file which is the main installer for your application, `{appName}-full.nupkg`
 * and a RELEASES file which you use to issue updates to your application.
 *
 * The `description` property, defaults to the `description` field from your
 * app's package.json file when unspecified.
 *
 * The `exe` property, this uses the `name` field in your app's package.json
 * file with an added `.exe` extension when unspecified.
 *
 * The `iconUrl` property, the application icon. displayed in
 * Control Panel > Programs and Features. Defaults to the Atom icon.
 *
 * The `name` property, defaults to the name field in your app's package.json
 * file.
 *
 * The `noDelta` property, disable only if necessary, they are a Good Thing.
 *
 * The `outputDirectory` property, defaults to the installer folder at the
 * project root.
 *
 * The `owners` property, defaults to the authors field when unspecified.
 *
 * The `remoteReleases` property, if given, these will be downloaded to create
 * delta updates.
 *
 * The `signWithParams` property, overrides `certificateFile` and
 * `certificatePassword`.
 *
 * The `skipUpdateIcon` property, this can solve installation errors with the
 * following message: "This application could not be started", when the setup
 * is built on a non-Windows system.
 *
 * The `title` property, defaults to the `productName` field and then the `name`
 * field from your app's package.json file when unspecified.
 *
 * The `version` property, defaults to the `version` field from your app's
 * `package.json` file when unspecified.
 *
 * @typedef  {object}  MakerSquirrelConfigOptions
 * @property {string}  appDirectory               - The folder path of your Electron app.
 * @property {string}  authors                    - The authors value for the nuget package metadata.
 * @property {string}  certificateFile            - The path to an Authenticode Code Signing Certificate.
 * @property {string}  certificatePassword        - The password to decrypt the certificate given in certificateFile.
 * @property {string}  copyright                  - The copyright value for the nuget package metadata.
 * @property {string}  description                - The description value for the nuget package metadata.
 * @property {string}  exe                        - The name of your app's main `.exe` file.
 * @property {string}  frameworkVersion           - Set the required .NET framework version, e.g. `net461`.
 * @property {string}  iconUrl                    - A URL to an ICO file to use as the application icon.
 * @property {string}  loadingGif                 - The local path to a `.gif` file to display during install.
 * @property {string}  name                       - Windows Application Model ID (appId).
 * @property {boolean} noDelta                    - Should Squirrel.Windows delta packages.
 * @property {boolean} noMsi                      - Should Squirrel.Windows create an MSI installer.
 * @property {string}  outputDirectory            - The folder path to create the .exe installer in.
 * @property {string}  owners                     - The owners value for the nuget package metadata.
 * @property {string}  remoteReleases             - A URL to your existing updates.
 * @property {string}  remoteToken                - Authentication token for remote updates.
 * @property {string}  setupExe                   - The name to use for the generated Setup.exe file.
 * @property {string}  setupIcon                  - The ICO file to use as the icon for the generated Setup.exe
 * @property {string}  setupMsi                   - The name to use for the generated Setup.msi file.
 * @property {string}  signWithParams             - Params to pass to signtool.
 * @property {boolean} skipUpdateIcon             - Disables setting the icon of Update.exe.
 * @property {string}  title                      - The title value for the nuget package metadata.
 * @property {string}  version                    - The version value for the nuget package metadata.
 * @property {boolean} usePackageJson             - If use `package.json` file.
 * @property {boolean} fixUpPaths                 - If use fix up paths file.
 */

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Configuration for the maker squirrel.
 *
 * The Squirrel.Windows maker inherits all of its config options from the
 * `windows-installer` module, except for `appDirectory` and `outputDirectory`,
 * which are set by the maker.
 *
 * @constant {MakerSquirrelConfigOptions} squirrel
 */
const squirrel = {
  authors: commons.author,
  version: commons.version,
  name: commons.appId,
  setupExe: `${commons.name}.exe`,
  setupIcon: commons.icon,
  noMsi: true,
  title: commons.name,
  copyright: commons.copyright,
  iconUrl: commons.iconUrl,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
module.exports = squirrel;
