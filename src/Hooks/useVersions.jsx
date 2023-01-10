/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useVersions` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect, useState } from 'react';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useAbout`
 *
 * @typedef   {object}  VersionsResponse
 * @property  {string}  chrome           - The `chrome` version.
 * @property  {string}  node             - The `node` version.
 * @property  {string}  electron         - The `electron` version.
 * @property  {string}  v8               - The `v8` version.
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useVersions` it's a custom React hook witch communicates with the
 * `electron` api, used to manages versions state.
 *
 * @returns {VersionsResponse} Information about the versions application.
 */
const useVersions = () => {
  const [versions, setVersions] = useState({});

  useEffect(() => {
    setVersions(window.appRuntime.versions);
  }, []);

  return versions;
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useVersions;
