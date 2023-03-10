/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Loading` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Loading` component.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.modifier - Additional class to modify component styles.
 * @returns {JSX.Element} The `Loading` components.
 */
const Loading = ({ modifier }) => {
  const style = modifier ? `loading ${modifier}` : 'loading';
  return (
    <section className={style}>
      <header className="loading__header" />
      <main className="loading__main" />
    </section>
  );
};

Loading.propTypes = {
  modifier: PropTypes.string,
};

Loading.defaultProps = {
  modifier: null,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Loading;
