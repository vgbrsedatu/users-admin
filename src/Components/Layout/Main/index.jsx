/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Main` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENTS
import Figure from './Figure';
import Header from './Header';
import Section from './Section';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Main` component.
 *
 * @component
 * @returns {JSX.Element} The `Main` components.
 */
const Main = () => (
  <main id="main-wrapper">
    <Figure />
    <Header />
    <Section />
  </main>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Main;
