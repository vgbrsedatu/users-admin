/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages the theme service for electron app.
 */

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The default values in the `themeSource` property from `nativeTheme` module.
 *
 * @typedef   {'system'|'dark'|'light'}  source
 */

/**
 * The value that can be returned from the `getCurrent` function
 *
 * @typedef   {'dark'|'light'}  current
 */

// ━━	MODULE	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `getCurrent()` function returns an `string`, the possible values it will
 * return are `'dark'` o`'light'`.
 *
 * The function can be used as a plugin to the kagb module to find the current
 * color schema.
 *
 * The param `source` must be the value from:
 *
 * - `nativeTheme.themeSource`.
 *
 * The param `shouldUseDark` must be the value from:
 *
 * - `nativeTheme.shouldUseDarkColors`.
 *
 * @private
 * @param   {source} source - The value representing the current color scheme.
 * @param   {boolean} shouldUseDark - If dark mode is currently activated.
 * @returns {current} The theme that the operating system is using.
 * @example const { nativeTheme } require('electron');
 *
 * const source = nativeTheme.themeSource;
 * const shouldUseDark = nativeTheme.shouldUseDarkColors;
 * const current = getCurrent(source, shouldUseDark); // The expected value is 'dark' or 'light'
 *
 */
const getCurrent = (source, shouldUseDark) => {
  const onSystem = source === 'system';
  const onDark = source === 'dark';
  const isDark = (onSystem && shouldUseDark) || (onDark && shouldUseDark);
  return isDark ? 'dark' : 'light';
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { getCurrent }; // eslint-disable-line import/prefer-default-export
