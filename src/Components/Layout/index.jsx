/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Layout` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENTS
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Layout` component.
 *
 * @component
 * @returns {JSX.Element} The `Layout` components.
 */
const Layout = () => (
  <React.Fragment key="outer-wrapper">
    <Header />
    <Main />
    <Footer />
  </React.Fragment>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Layout;
