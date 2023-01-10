/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage the main renderer process
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import ReactDOM from 'react-dom/client';

// » IMPORT APP COMPONENT
import App from './App';

// » IMPORT CSS STYLES
import './styles/styles.css';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `root` it is a `HTMLElement`, where the `ReactDOM.render` application
 * will be inserted when the `.render` method is called and enables.
 *
 * @type {HTMLElement}
 */
const root = document.getElementById('root');

// ━━ RENDERER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » MAIN RENDERER PROCESS
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
