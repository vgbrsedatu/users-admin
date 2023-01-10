/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `MinimizeButton` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `MinimizeButton` component. The `onClick` property, It must have
 * communication with the `useWindowState` custom Hook.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {function} props.onClick - Function to handle the change of window state
 * @returns {JSX.Element} The `MinimizeButton` components.
 */
const MinimizeButton = ({ onClick }) => (
  <button className="title-bar__button" type="button" title="minimize" onClick={() => onClick()}>
    &#xE921;
  </button>
);

MinimizeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default MinimizeButton;
