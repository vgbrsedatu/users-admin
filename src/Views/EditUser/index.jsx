/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `EditUser` React component view.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useLocation } from 'react-router-dom';

// » IMPORT COMPONENT
import AvatarImage from '../../Components/AvatarImage';
import Loading from '../../Components/Loading';
import UserForm from '../../Components/UserForm';

// » IMPORT CUSTOM HOOKS
import useStorage from '../../Hooks/useStorage';
import useUser from '../../Hooks/useUser';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `EditUser` component react component view.
 *
 * @component
 * @returns {JSX.Element} The `EditUser` components.
 */
const EditUser = () => {
  const { state: id } = useLocation();
  const { uploadFromBlob } = useStorage();
  const { state, updatedUser, dispacher } = useUser(id);
  const { error, updated, loading, user } = state;

  if (loading) {
    return <Loading />;
  }

  const onSubmit = e => {
    e.preventDefault();
    updatedUser();
  };

  const onChange = e => {
    const { value, name } = e.target;
    dispacher(name, value);
  };

  const onSave = ({ mime, raw }) => {
    uploadFromBlob({ mime, raw, name: user.id })
      .then(payload => {
        dispacher('SET_PHOTO', payload);
      })
      .catch(err => {
        dispacher('SET_ERROR', err);
      });
  };

  return (
    <article id="edit-users" className="profile">
      <figure className="profile__image">
        <AvatarImage onSave={onSave} image={user.photo} />
      </figure>
      <div className="profile__information">
        <h1 className="profile__title">Informacion del usuario</h1>
        {error && <span className="profile__error">{error}</span>}
        {updated && <span className="profile__succes">Usuario actualizado</span>}
        <UserForm user={user} password={false} onSubmit={onSubmit} onChange={onChange} />
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default EditUser;
