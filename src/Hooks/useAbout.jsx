/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useAbout` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect, useState } from 'react';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useAbout`
 *
 * @typedef   {object}  AboutResponse
 * @property  {string}  name          - Application name.
 * @property  {string}  description   - Application description.
 * @property  {string}  team          - The team that developed the application.
 * @property  {string}  company       - Name of the company that developed the application.
 * @property  {string}  copyright     - Application copyright.
 * @property  {string}  version       - Application version.
 * @property  {string}  author        - Main author that developed the application.
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useAbout` it's a custom React hook witch communicates with the
 * `electron` api, used to manages about state.
 *
 * @returns {AboutResponse} Information about the application.
 */
const useAbout = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    setAbout(window.appRuntime.about);
  }, []);

  return about;
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useAbout;
