/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Dialog` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT CUSTOM HOOKS
import useDialog from '../../../../Hooks/useDialog';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Dialog` component.
 *
 * @component
 * @returns {JSX.Element} The `Dialog` components.
 */
const Dialog = () => {
  const { choice, dialog } = useDialog();
  return (
    <article className="feature">
      <h3 className="feature__title">Native system dialogs</h3>
      <div className="feature__detail">
        <p>
          Selection <span id="user-selection">{choice}</span>
        </p>
        <button type="button" className="btn btn--primary" id="dialog" onClick={dialog}>
          Box Dialog
        </button>
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Dialog;
