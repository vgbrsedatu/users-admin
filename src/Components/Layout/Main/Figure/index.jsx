/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Figure` React component.
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Figure` component.
 *
 * @component
 * @returns {JSX.Element} The `Figure` components.
 */
const Figure = () => (
  <figure className="logo">
    <img src="./assets/images/svg/react.svg" className="logo__img" alt="Electron logo" />
  </figure>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Figure;
