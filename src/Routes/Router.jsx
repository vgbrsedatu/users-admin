/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Router` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

// » IMPORT APP COMPONENT
import About from '../Views/About';
import Dasboard from '../Views/Dasboard';
import Home from '../Views/Home';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Router` component, is in charge of routing the application.
 *
 * @component
 * @returns {JSX.Element} The `Router` components.
 */
const Router = () => (
  <Fragment key="router">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dasboard" element={<Dasboard />} />
    </Routes>
  </Fragment>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Router;
