/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `AddUser` React component view.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState } from 'react';

// » IMPORT COMPONENT
import AvatarImage from '../../Components/AvatarImage';
import UserForm from '../../Components/UserForm';

// » IMPORT CUSTOM HOOKS
import useUser from '../../Hooks/useUser';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `AddUser` component react component view.
 *
 * @component
 * @returns {JSX.Element} The `AddUser` components.
 */
const AddUser = () => {
  const [src, setSrc] = useState('assets/images/svg/default.svg');
  const { state, createUser, dispacher } = useUser();
  const { error, created, user } = state;

  const onSubmit = e => {
    e.preventDefault();
    createUser();
  };

  const onChange = e => {
    const { value, name } = e.target;
    dispacher(name, value);
  };

  const onSave = ({ mime, raw }) => {
    dispacher('photo', { mime, raw });
    setSrc(raw);
  };

  return (
    <article id="edit-users" className="profile">
      <figure className="profile__image">
        <AvatarImage onSave={onSave} image={src} />
      </figure>
      <div className="profile__information">
        <h1 className="profile__title">Informacion del usuario</h1>
        {error && <span className="profile__error">{error}</span>}
        {created && <span className="profile__succes">Usuario Creado</span>}
        <UserForm user={user} password onSubmit={onSubmit} onChange={onChange} />
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default AddUser;
