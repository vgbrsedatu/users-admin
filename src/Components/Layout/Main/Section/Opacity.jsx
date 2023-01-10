/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Opacity` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT CUSTOM HOOKS
import useOpacity from '../../../../Hooks/useOpacity';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Opacity` component.
 *
 * @component
 * @returns {JSX.Element} The `Opacity` components.
 */
const Opacity = () => {
  const { opacity, changeOpacity } = useOpacity();
  const percent = opacity * 100;
  return (
    <article className="feature">
      <h3 className="feature__title">Change window opacity</h3>
      <div className="feature__detail">
        <p>
          Current <span id="current-opacity">{percent}%</span>
        </p>
        <input
          type="range"
          id="opacity"
          name="opacity"
          min="0.7"
          max="1"
          value={`${opacity}`}
          step="0.01"
          onChange={e => changeOpacity(parseFloat(e.target.value))}
        />
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Opacity;
