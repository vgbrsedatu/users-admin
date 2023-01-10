/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `MaximizeButton` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `MaximizeButton` component. The `onClick` property, It must have
 * communication with the `useWindowState` custom Hook.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {function} props.onClick - Function to handle the change of window state
 * @returns {JSX.Element} The `MaximizeButton` components.
 */
const MaximizeButton = ({ onClick }) => (
  <button className="title-bar__button" type="button" title="maximize" onClick={() => onClick()}>
    &#xE922;
  </button>
);

MaximizeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default MaximizeButton;
