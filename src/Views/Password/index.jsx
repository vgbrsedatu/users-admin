/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Password` React component view.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useLocation } from 'react-router-dom';

// » IMPORT COMPONENT
import Loading from '../../Components/Loading';
import useField from '../../Hooks/useField';

// » IMPORT CUSTOM HOOKS
import useUser from '../../Hooks/useUser';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Password` component react component view.
 *
 * @component
 * @returns {JSX.Element} The `Password` components.
 */
const Password = () => {
  const { state: id } = useLocation();
  const { state, updatePassword } = useUser(id);
  const { error, loading, updated, user } = state;
  const regExp = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';
  const title = 'Contraseña mayor a ocho caracteres, incluyendo letra y un número';
  const password = useField({ name: 'password', type: 'text' });

  if (loading) {
    return <Loading />;
  }

  const onSubmit = e => {
    e.preventDefault();
    updatePassword({ id: user.id, password: password.value });
  };

  return (
    <article id="user" className="profile">
      <figure className="profile__image">
        <img alt="user profile" src={user.photo} />
      </figure>
      <div className="profile__information">
        <h1 className="profile__title">Informacion del usuario</h1>
        {error && <span className="profile__error">{error}</span>}
        {updated && <span className="profile__succes">Contraseña actualizada</span>}
        <form onSubmit={onSubmit} className="profile__form">
          <div className="profile__data">
            <span>Nombre:</span>
            <span>{user.name}</span>
            <span>Email:</span>
            <span>{user.email}</span>
            <span>Password:</span>
            <input {...password} required pattern={regExp} title={title} />
          </div>
          <div className="profile__controls">
            <button type="submit" className="btn btn--primary">
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Password;
