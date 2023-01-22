/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages the `utils.phone` module.
 */

// ━━	CONSTANTS	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Collection of regular expressions to find phone number formats.
 *
 * @private
 * @constant {object} regex
 *
 */
const regExp = {
  standar: /^\+52(\d{2})(\d{4})(\d{4})$/,
  normal: /^(\d{2})\s{1}(\d{4})\s{1}(\d{4})$/,
  user: /^(\d{2})(\d{4})(\d{4})$/,
};

/**
 * Collection of replacement functions.
 *
 * @private
 * @constant {object} replacer
 *
 */
const replacer = {
  standar: (match, p1, p2, p3) => `${p1} ${p2} ${p3}`,
  normalize: (match, p1, p2, p3) => `${p1}${p2}${p3}`,
  user: (match, p1, p2, p3) => `${p1} ${p2} ${p3}`,
};

// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `standarize` function returns standardizes a phone number.
 *
 * @param {string} mobile - The phone number.
 * @returns {string} The standard phone number.
 * @throws {Error} It will throw an error if the phone format does not match.
 * @example const number = '55 4556 3650';
 * const standar = standarize(number); // Expected value +525545563650
 *
 */
const standarize = mobile => {
  if (!regExp.normal.test(mobile)) {
    throw new Error('The number format is not correct');
  }
  const replaced = mobile.replace(regExp.normal, replacer.normalize);
  return `+52${replaced}`;
};

/**
 * The `normalize` function returns normalizes a phone number.
 *
 * @param {string} mobile - The phone number.
 * @returns {string} The normar phone number.
 * @throws {Error} It will throw an error if the phone format does not match.
 * @example const number = '+525545563650';
 * const normalize = normalize(number); // Expected value 55 4556 3650
 *
 */
const normalize = mobile => {
  if (!regExp.standar.test(mobile)) {
    throw new Error('The number format is not correct');
  }
  return mobile.replace(regExp.standar, replacer.standar);
};

/**
 * The `toNormal` function returns normalizes a phone number.
 *
 * @param {string} mobile - The phone number.
 * @returns {string} The normar phone number.
 * @throws {Error} It will throw an error if the phone format does not match.
 * @example const number = '5545563650';
 * const normal = toNormal(number); // Expected value 55 4556 3650
 *
 */
const toNormal = mobile => {
  if (!regExp.user.test(mobile)) {
    throw new Error('The number format is not correct');
  }
  return mobile.replace(regExp.user, replacer.user);
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { standarize };
export { normalize };
export { toNormal };
