/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `ToogleTheme` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT CUSTOM HOOKS
import useTheme from '../../../../Hooks/useTheme';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `ToogleTheme` component.
 *
 * @component
 * @returns {JSX.Element} The `ToogleTheme` components.
 */
const ToogleTheme = () => {
  const { theme, toogleTheme } = useTheme();
  const current = theme === 'dark' ? 'Dark' : 'Light';

  return (
    <article className="feature">
      <h3 className="feature__title">Toogle scheme color</h3>
      <div className="feature__detail">
        <p>
          Current <span id="current-scheme">{current}</span>
        </p>
        <button type="button" className="btn btn--primary" id="scheme" onClick={toogleTheme}>
          Toogle
        </button>
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default ToogleTheme;
