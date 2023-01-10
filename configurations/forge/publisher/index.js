/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage settings for the property `publishers` on `electron-forge`
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
const dotenv = require('dotenv');

// » LOAD AND READ ENVIRONMENT VARIABLES
dotenv.config();

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Details that identify a Github repository.
 *
 * The `owner this is either your username or the name of the organization that
 * owns the repository.
 *
 * @typedef  {object} GitHubRepository
 * @property {string} name             - The name of your repository.
 * @property {string} owner            - The owner of your repository
 */

/**
 * Configuration option for `PublisherGitHub`.
 *
 * @typedef  {object}           PublisherGitHubConfig
 * @property {string}           authToken             - An authorization token with permission to upload releases to this repository.
 * @property {boolean}          draft                 - Whether or not this release should be tagged as a draft.
 * @property {boolean}          prerelease            - Whether or not this release should be tagged as a prerelease.
 * @property {GitHubRepository} repository            - Details that identify your repository.
 * @property {string}           tagPrefix             - Prepended to the package version to determine the release name, by default `v`.
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Github token for application publication.
 *
 * @constant {srting} GIT_AUTH_TOKEN
 */
const { GIT_AUTH_TOKEN } = process.env;

/**
 * The `publisherGitHub` constant it is used for the configuration property
 * `publishers` on `electron-forge` module, it contains the configuration to
 * publish the application in a github repository.
 *
 * @constant {PublisherGitHubConfig} publisherGitHub
 */
const publisherGitHub = {
  name: '@electron-forge/publisher-github',
  config: {
    repository: {
      owner: 'vgbrsedatu',
      name: 'electron-app',
    },
    authToken: GIT_AUTH_TOKEN,
    prerelease: false,
    draft: true,
    tagPrefix: 'v',
  },
};

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `publishers` constant is used for the configuration of the `electron-forge`
 * module, it contains all the configuration of the option `publishers`.
 *
 * @constant {Array} publishers
 */
const publishers = [publisherGitHub];

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
module.exports = publishers;
