/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `TitleBar` React component.
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `TitleBar` component.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.title - The name that the titlebar will use.
 * @param {boolean} props.toogle - Change the value of show property.
 * @returns {JSX.Element} The `TitleBar` components.
 */
const TitleBar = ({ title, toogle }) => {
  const name = 'titlebar__button titlebar__button--close';
  return (
    <div className="titlebar titlebar--nodrag">
      <div className="titlebar__app-name">
        <span>&#xE700;</span>
        <p>{title}</p>
      </div>
      <div className="titlebar__windows-control">
        <button className={name} type="button" title="close" onClick={toogle}>
          &#xE8BB;
        </button>
      </div>
    </div>
  );
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  toogle: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TitleBar;
