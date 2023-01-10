/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Section` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENTS
import Dialog from './Dialog';
import Notification from './Notification';
import Opacity from './Opacity';
import ToogleTheme from './ToogleTheme';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Section` component.
 *
 * @component
 * @returns {JSX.Element} The `Section` components.
 */
const Section = () => (
  <section className="features">
    <Opacity />
    <ToogleTheme />
    <Notification />
    <Dialog />
  </section>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Section;
