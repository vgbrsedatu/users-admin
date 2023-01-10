/**
 * @author Victor Giovanni Beltrán Rodríguez.
 * @file Manages electron native system dialogs for opening and saving files,
 * alerting, all methods it's async.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT ELECTRON APIS
import { dialog } from 'electron';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Window` argument allows the dialog to attach itself to a parent
 * window, making it modal.
 *
 * @typedef {import('electron').BrowserWindow} Window
 */

/**
 * The `Window` argument allows the dialog to attach itself to a parent
 * window, making it modal.
 *
 * @typedef {import('electron').NativeImage} NativeImage
 */

/**
 * A fulfilled response from `message()` function.
 *
 * @typedef  {Object}   MessageResponse
 * @property {string}   response        - The index of the clicked button.
 * @property {boolean}  checkboxChecked - The checked state of the checkbox if `checkboxLabel` was set. Otherwise `false`.
 */

/**
 * A fulfilled response from `open()` function.
 *
 * The `filePaths` property if the dialog is cancelled this will be an empty array.
 *
 * The `bookmarks` property if `checkboxLabel` was set. Otherwise `false`.
 *
 * @typedef  {Object}         OpenResponse
 * @property {boolean}        canceled      - Whether or not the dialog was canceled.
 * @property {string}         filePaths     - If the dialog is canceled, this will be undefined.
 * @property {Array.<string>} bookmarks     - The checked state of the checkbox.
 */

/**
 * A fulfilled response from `save()` function.
 *
 * @typedef  {Object}   SaveResponse
 * @property {string}   response        - The index of the clicked button.
 * @property {boolean}  checkboxChecked - The checked state of the checkbox if `checkboxLabel` was set. Otherwise `false`.
 */

/**
 * The filters specifies an array of file types that can be displayed or
 * selected when you want to limit the user to a specific type.
 *
 * @typedef  {object} FileFilter
 * @property {string} name       - Filter name.
 * @property {string} extensions - Allowed file extensions.
 */

/**
 * Save file dialog box properties.
 *
 * The `promptToCreate` property this does not actually create the file at the
 * path but allows non-existent paths to be returned that should be created by
 * the application, only for `Windows`.
 *
 * The `noResolveAliases` property selected aliases will now return the alias
 * path instead of their target path.
 *
 * @typedef  {object} OpenProperties
 * @property {string} openFile                - Allow files to be selected.
 * @property {string} openDirectory           - Allow directories to be selected.
 * @property {string} multiSelections         - Allow multiple paths to be selected.
 * @property {string} showHiddenFiles         - Show hidden files in dialog.
 * @property {string} createDirectory         - Allow creating new directories from dialog, only for `macOS`.
 * @property {string} promptToCreate          - Prompt for creation if the file path entered in the dialog does not exist.
 * @property {string} noResolveAliases        - Disable the automatic alias (symlink) path resolution, only for `macOS`.
 * @property {string} treatPackageAsDirectory - Treat packages, such as .app folders, as a directory instead of a file, only for `macOS`.
 * @property {string} dontAddToRecent         - Do not add the item being opened to the recent documents list, only for `Windows`.
 */

/**
 * Save file dialog box properties.
 *
 * The `showOverwriteConfirmation` property if the user types a file name that
 * already exists, only for `Linux`.
 *
 * @typedef  {object} SaveProperties
 * @property {string} showHiddenFiles           - Show hidden files in dialog.
 * @property {string} createDirectory           - Allow creating new directories from dialog, only for `macOS`.
 * @property {string} treatPackageAsDirectory   - Treat packages, such as .app folders, as a directory instead of a file, only for `macOS`.
 * @property {string} showOverwriteConfirmation - Sets whether the user will be presented a confirmation dialog.
 * @property {string} dontAddToRecent           - Do not add the item being saved to the recent documents list, only for `Windows`.
 */

/**
 * Options for `message()` function.
 *
 * The `type` property on Windows, "question" displays the same icon as
 * "info", unless you set an icon using the "icon" option. On macOS, both
 * "warning" and "error" display the same warning icon.
 *
 * The `buttons` property on Windows, an empty array will result in one button
 * labeled "OK".
 *
 * The `defaultId` property by default when the message box opens.
 *
 * The `signal` property the message box will behave as if it was cancelled by
 * the user. On macOS, signal does not work with message boxes that do not have
 * a parent window, since those message boxes run synchronously due to
 * platform limitations.
 *
 * The `cancelId` property By default this is assigned to the first button with
 * "cancel" or "no" as the label. If no such labeled buttons exist and this
 * option is not set, 0 will be used as the return value.
 *
 * The `noLink` property  The common buttons like "Cancel" or "Yes", and show
 * the others as command links in the dialog. This can make the dialog appear in
 * the style of modern Windows apps. If you don't like this behavior, you can
 * set noLink to true.
 *
 * The `normalizeAccessKeys` property Enabling this assumes & is used in the
 * button labels for the placement of the keyboard shortcut access key and
 * labels will be converted so they work correctly on each platform,
 * & characters are removed on macOS, converted to _ on Linux, and leftuntouched
 * on Windows. For example, a button label of Vie&w will be converted to Vie_w
 * on Linux and View on macOS and can be selected via Alt-W on Windows and Linux.
 *
 * @typedef  {object}             MessageOptions
 * @property {string}             message               - Content of the message box.
 * @property {string}             [type]                - Can be "none", "info", "error", "question" or "warning".
 * @property {string}             [buttons]             - Array of texts for buttons.
 * @property {number}             [defaultId]           - Index of the button in the buttons array which will be selected.
 * @property {AbortSignal}        [signal]              - Pass an instance of AbortSignal to optionally close the message box.
 * @property {string}             [title]               - Title of the message box, some platforms will not show it.
 * @property {string}             [detail]              - Extra information of the message.
 * @property {string}             [checkboxLabel]       - If provided, the message box will include a checkbox with the given label.
 * @property {boolean}            [checkboxChecked]     - Initial checked state of the checkbox. false by default.
 * @property {NativeImage|string} [icon]                - Icon for message box.
 * @property {number}             [textWidth]           - Custom width of the text in the message box, only for `macOS`.
 * @property {number}             [cancelId]            - The index of the button to be used to cancel the dialog, via the Esc key.
 * @property {boolean}            [noLink]              - On Windows Electron will try to figure out which one of the buttons are common buttons.
 * @property {boolean}            [normalizeAccessKeys] - Normalize the keyboard access keys across platforms. Default is `false`.
 */

/**
 * Options for `open()` function.
 *
 * The `filters` property filter files that can be displayed or selected when
 * you want to limit the user to a specific type.
 *
 * @typedef  {object}             OpenOptions
 * @property {string}             [title]                   - The dialog title. Cannot be displayed on some Linux desktop environments.
 * @property {string}             [defaultPath]             - Absolute directory path, absolute file path, or file name to use by default.
 * @property {string}             [buttonLabel]             - Custom label for the confirmation button, when left empty the default label will be used.
 * @property {Array.<FileFilter>} [filters]                 - The filters specifies an array of file types.
 * @property {string}             [message]                 - Message to display above text fields, only for `macOS`.
 * @property {OpenProperties}     [properties]              - Modal dialog box properties.
 * @property {boolean}            [securityScopedBookmarks] - Create a security scoped bookmark when packaged for the Mac App Store, only for `macOS`.
 */

/**
 * Options for `save()` function.
 *
 * The `filters` property filter files that can be displayed or selected when
 * you want to limit the user to a specific type.
 *
 * @typedef  {object}             SaveOptions
 * @property {string}             [title]                   - The dialog title. Cannot be displayed on some Linux desktop environments.
 * @property {string}             [defaultPath]             - Absolute directory path, absolute file path, or file name to use by default.
 * @property {string}             [buttonLabel]             - Custom label for the confirmation button, when left empty the default label will be used.
 * @property {Array.<FileFilter>} [filters]                 - The filters specifies an array of file types.
 * @property {string}             [message]                 - Message to display above text fields, only for `macOS`.
 * @property {string}             [nameFieldLabel]          - Custom label for the text displayed in front of the filename text field, only for `macOS`.
 * @property {boolean}            [showsTagField]           - Show the tags input box, defaults to true, only for `macOS`.
 * @property {SaveProperties}     [properties]              - Modal dialog box properties.
 * @property {boolean}            [securityScopedBookmarks] - Create a security scoped bookmark when packaged for the Mac App Store, only for `macOS`.
 */

// ━━ MAIN MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `message()` function Shows a message box, it will block the process
 * until the message box is closed. It returns the index of the clicked button.
 *
 * The `window` argument allows the dialog to attach itself to a parent
 * window, making it modal.
 *
 * @private
 * @param   {Window} window - For attach itself to a parent window.
 * @param   {MessageOptions} options - Options for giving information and behavior to the modal.
 * @returns {Promise.<MessageResponse>} Resolves with a promise.
 * @example message({
 *   title: 'A title message',
 *   message: 'I body message',
 *   type: 'info',
 * });
 *
 */
const message = (window, options) =>
  new Promise((resolve, reject) => {
    dialog
      .showMessageBox(window, options)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });

/**
 * The `save()` displays a modal dialog for opening files.
 *
 * The `window` argument allows the dialog to attach itself to a parent
 * window, making it modal.
 *
 * @private
 * @param {Window} window - For attach itself to a parent window.
 * @param {OpenOptions} options - Options for giving information and behavior to the modal.
 * @returns {Promise.<OpenResponse>} Resolves with a promise.
 * @example open(window, {
 *   properties: ['showHiddenFiles', 'openDirectory'],
 * });
 *
 */
const open = (window, options) =>
  new Promise((resolve, reject) => {
    dialog
      .showOpenDialog(window, options)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });

/**
 * The `save()` displays a modal dialog for saving files. If the dialog is
 * cancelled it returns undefined.
 *
 * The `window` argument allows the dialog to attach itself to a parent
 * window, making it modal.
 *
 * @private
 * @param {Window} window - For attach itself to a parent window.
 * @param {SaveOptions} options - Options for giving information and behavior to the modal.
 * @returns {Promise.<SaveResponse>} Resolves with a promise.
 * @example const pathFile = save(window, {
 *   properties: ['showHiddenFiles'],
 * });
 *
 */
const save = (window, options) =>
  new Promise((resolve, reject) => {
    dialog
      .showSaveDialog(window, options)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { message };
export { open };
export { save };
