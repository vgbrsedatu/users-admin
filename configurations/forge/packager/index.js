/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage settings for the property `rebuild` on `electron-forge`
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
const commons = require('../commons');

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Architectures that have been supported by the official Electron prebuilt
 * binaries, past and present.
 *
 * The allowed values are as follows:
 *
 * @typedef  {string}  TargetArch
 */

/**
 * A collection of application metadata to embed into the Windows executable.
 *
 * @typedef  {object}  win32metadata
 * @property {string}  CompanyName          - Defaults to the author `name` from the nearest `package.json`.
 * @property {string}  FileDescription      - Defaults to either `productName` or `name` from the nearest `package.json`.
 * @property {string}  InternalName         - Defaults to either `productName` or `name` from the nearest `package.json`.
 * @property {string}  OriginalFilename     - Defaults to the renamed Electron `.exe` file.
 * @property {string}  ProductName          - Defaults to either `productName` or `name` from the nearest `package.json`.
 * @property {string}  application-manifest - The requested-execution-level: "asInvoker" | "highestAvailable" | "requireAdministrator"
 */

/**
 * Options related to specifying an artifact mirror.
 *
 * @typedef  {object}           MirrorOptions
 * @property {string}           nightlyMirror   - The Electron nightly-specific mirror URL.
 * @property {string}           mirror          - The base URL of the mirror to download.
 * @property {string}           customDir       - The name of the directory to download from, often scoped by version number e.g 'v4.0.4'.
 * @property {string}           customFilename  - The name of the asset to download.
 * @property {string}           customVersion   - The version of the asset to download.
 */

/**
 * See the module for option descriptions, proxy support, and defaults.
 * Supported parameters include, but are not limited to.
 *
 * @typedef  {object}         ElectronDownloadOptions
 * @property {string}         cacheRoot                - The directory where prebuilt, pre-packaged Electron downloads are cached.
 * @property {MirrorOptions}  mirrorOptions            - Options to override the default Electron download location.
 * @property {boolean}        rejectUnauthorized       - Whether SSL certificates are required to be valid when downloading Electron.
 */

/**
 * Used to provide custom options to the internal call to @electron/universal
 * when building a macOS app with the target architecture of "universal". Unused
 * otherwise, providing a value does not imply a universal app is built.
 *
 * The allowed values are as follows:
 *
 * `"x64AppPath" | "arm64AppPath" | "outAppPath" | "force"`
 *
 * @typedef  {string}  OsxUniversalOptions
 */

/**
 * The top level property packagerConfig on the configuration object maps
 * directly to the options sent to `electron-packager` during the package step
 * of Electron Forge's build process.
 *
 * The `appCopyright` property, maps to the `LegalCopyright` metadata property
 * on Windows, and `NSHumanReadableCopyright` on macOS.
 *
 * The `appVersion` property, By default the `version` property in the
 * `package.json` is used, but it can be overridden with this argument. If neither
 *  are provided, the version of Electron will be used. Maps to the
 * `ProductVersion` metadata property on Windows, and
 * `CFBundleShortVersionString` on macOS.
 *
 * The `arch` property, not required if the all option is set. If `arch` is set
 * to `all`, all supported architectures for the target platforms specified by
 * platform will be built. Arbitrary combinations of individual architectures
 * are also supported via a comma-delimited string or array of strings.
 * The non-all values correspond to the architecture names used by Electron
 * releases. This value is not restricted to the official set if
 * download.mirrorOptions is set. Defaults to the arch of the host computer
 * running Electron Packager.
 *
 * The `asar` property, using Electron's archive format. Reasons why you may
 * want to enable this feature include mitigating issues around long path names
 * on Windows, slightly speeding up `require`, and concealing your source code
 * from cursory inspection. When the value is `true`, it passes the default
 * configuration to the `asar` module. The configuration values can be customized
 * when the value is an `Object`. Supported sub-options include, but are not
 * limited to:
 *
 * - `ordering`: A path to an ordering file for packing files. An explanation
 * can be found on the Atom issue tracker.
 * - `unpack`: A glob expression, when specified, unpacks the file with matching
 * names to the app.asar.unpacked directory.
 * - `unpackDir`: Unpacks the dir to the app.asar.unpacked directory whose names
 * exactly or pattern match this string. The asar.unpackDir is relative to dir.
 *
 * The `buildVersion` property, defaults to the value of the appVersion option.
 * Maps to the FileVersion metadata property on Windows, and CFBundleVersion on
 * macOS.
 *
 * The `derefSymlinks` property, during the copying of the application source.
 * Defaults to `true`.
 *
 * The `download` property, see the module for option descriptions, proxy
 * support, and defaults. Supported parameters include, but are not limited to:
 *
 * The `electronVersion` property, without the leading `v` - for example, 1.4.13.
 * See Electron releases for valid versions. If omitted, it will use the version
 * of the nearest local installation of electron, electron-prebuilt-compile, or
 * electron-prebuilt, defined in package.json in either devDependencies or
 * dependencies.
 *
 * The `electronZipDir` property, the local path to a directory containing
 * Electron ZIP files for Electron Packager to unzip, instead of downloading
 * them. The ZIP filenames should be in the same format as the ones downloaded
 * from the Electron releases site.
 *
 * Note: Setting this option prevents the download sub-options from being used,
 * as the functionality gets skipped over.
 *
 * The `executableName` property, defaults to the value for the name option. For
 * darwin or mas target platforms, this does not affect the name of the `.app`
 * folder - this will use the name option instead.
 *
 * The `extraResource` property, contents/Resources directory for macOS target
 * platforms, and the resources directory for other target platforms.
 * The resources directory can be referenced in the packaged app via the
 * `process.resourcesPath` value.
 *
 * The `icon` property, if the target platform supports setting embedding an
 * icon. Currently you must look for conversion tools in order to supply an icon
 * in the format required by the platform:
 *
 * - `macOS`: .icns
 * - `Windows`: .ico (See the readme for details on non-Windows platforms)
 * - `Linux`: this option is not supported, as the dock/window list icon is set
 * via the icon option in the BrowserWindow constructor. Please note that you
 * need to use a PNG, and not the macOS or Windows icon formats, in order for it
 * to show up in the dock/window list. Setting the icon in the file manager is
 * not currently supported.
 *
 * The `ignore` property, If the file extension is omitted, it is auto-completed
 * to the correct extension based on the platform, including when platform:
 * 'all' is in effect.
 *
 * One or more additional regular expression patterns which specify which files
 * to ignore when copying files to create the app bundle(s). The regular
 * expressions are matched against the absolute path of a given file/directory
 * to be copied.
 *
 * The `junk` property, regardless of the ignore option.
 *
 * Note: junk will have no effect if the prebuiltAsar option is set.
 *
 * The `name` property, if omitted, it will use the productName or name value
 * from the nearest package.json.
 *
 * The `out` property, defaults to the current working directory.
 *
 * The `overwrite` property, for a given platform (true) or skip recreating it
 * `false`. Defaults to false.
 *
 * The `prebuiltAsar` property, Setting this option prevents the following
 * options from being used, as the functionality gets skipped over:
 *
 * - `asar`
 * - `afterCopy`
 * - `afterPrune`
 * - `derefSymlinks`
 * - `ignore`
 * - `junk`
 * - `prune`
 *
 * The `prune` property, to remove all of the packages specified in the
 * devDependencies section of package.json from the outputted Electron app.
 * Defaults to true.
 *
 * The `tmpdir` property, Set to false to disable use of a temporary directory.
 * Defaults to the system's temporary directory.
 *
 * @typedef  {object}                   PackagerConfig
 * @property {boolean}                  all              - When `true`, sets both `arch` and `platform` to all.
 * @property {string}                   appBundleId      - This property can be used to identify different build configurations.
 * @property {string}                   appCopyright     - The human-readable copyright line for the app.
 * @property {string}                   appVersion       - The release version of the application.
 * @property {Array.<TargetArch>}       arch             - The target system architecture(s) to build for.
 * @property {boolean}                  asar             - Whether to package the application's source code into an archive.
 * @property {string}                   buildVersion     - The build version of the application.
 * @property {boolean}                  derefSymlinks    - Whether symlinks should be dereferenced.
 * @property {string}                   dir              - The source directory.
 * @property {ElectronDownloadOptions}  download         - If present, passes custom options to `@electron/get`.
 * @property {string}                   electronVersion  - The Electron version with which the app is built.
 * @property {string}                   electronZipDir   - The local path to a directory containing Electron ZIP files.
 * @property {string}                   executableName   - The name of the executable file, sans file extension.
 * @property {string}                   extraResource    - One or more files to be copied directly into the app's.
 * @property {string}                   icon             - The local path to the icon file.
 * @property {Array.<RegExp>}           ignore           - Specify which files to ignore when copying files.
 * @property {boolean}                  junk             - Ignores system junk files when copying the Electron app.
 * @property {string}                   name             - The application name.
 * @property {string}                   out              - The base directory where the finished package(s) are created.
 * @property {OsxUniversalOptions}      osxUniversal     - Options to create universal macOS Electron applications.
 * @property {boolean}                  overwrite        - Whether to replace an already existing output directory.
 * @property {string}                   prebuiltAsar     - The path to a prebuilt ASAR file.
 * @property {string}                   prune            - Walks the node_modules dependency tree.
 * @property {string}                   quiet            - If true, disables printing informational and warning messages.
 * @property {string}                   tmpdir           - The base directory to use as a temporary directory.
 * @property {win32metadata}            win32metadata    - Application metadata to embed into the Windows executable.
 */

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `packager` constant is used for the configuration of the `electron-forge`
 * module, it contains all the configuration of the option `packagerConfig`. It
 * is based on the `electron-packager` module api.
 *
 * NOTE: Can not override the next options:
 * - `dir`
 * - `arch`
 * - `platform`
 * - `out`
 * - `electronVersion`
 *
 * @type {PackagerConfig} packager
 */
const packager = {
  asar: false,
  icon: commons.icon,
  name: commons.name,
  appBundleId: commons.appId,
  version: commons.version,
  executableName: `${commons.name}`,
  ignore: [
    '^/.github',
    '^/.husky',
    '^/.vscode',
    '^/assets',
    '^/configurations',
    '^/doc',
    '^/electron',
    '^/notes',
    '^/out',
    '^/scripts',
    '^/src',
    '^/test',
    '.editorconfig',
    '.env',
    '.eslintignore',
    '.eslintrc.json',
    '.gitattributes',
    '.gitignore',
    '.lintstagedrc',
    '.prettierignore',
    '.stylelintrc',
    '.prettierrc',
    'commitlint.config.js',
    'forge.config.js',
    '^/index.html',
    'LICENSE',
    'package-lock.json',
    'README.md',
    'vite.config.js',
  ],
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
module.exports = packager;
