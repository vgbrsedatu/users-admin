/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `User` React component view.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// » IMPORT COMPONENTS
import Loading from '../../Components/Loading';

// » IMPORT CUSTOM HOOKS
import useDeleteUser from '../../Hooks/useDeleteUser';
import useUser from '../../Hooks/useUser';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `roles` object is used to translate the roles.
 *
 * @constant {object} roles
 */
const roles = {
  superadmin: 'Super Administrador',
  administrator: 'Administrador',
  editor: 'Editor',
  author: 'Autor',
  contributor: 'Colaborador',
  subscriber: 'Suscriptor',
};

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `User` react component view.
 *
 * @component
 * @returns {JSX.Element} The `User` components.
 */
const User = () => {
  const { state } = useLocation();
  const { user, loading } = useUser(state);
  const navigate = useNavigate();
  const { success, error, deleteUser } = useDeleteUser();

  useEffect(() => {
    if (success) {
      navigate('/');
    }
  }, [success, navigate]);

  if (loading) {
    return <Loading />;
  }

  const onClick = id => {
    navigate('/edit', { state: id });
  };

  return (
    <article id="user" className="profile">
      <figure className="profile__image">
        <img alt="user profile" src={user.photo} />
        {error && <span>{error}</span>}
      </figure>
      <div className="profile__information">
        <h1 className="profile__title">Informacion del usuario</h1>
        <div className="profile__data">
          <span>Nombre:</span>
          <span>{user.name}</span>
          <span>Email:</span>
          <span>{user.email}</span>
          <span>Movil:</span>
          <span>{user.mobile}</span>
          <span>Role:</span>
          <span>{roles[user.role]}</span>
          <span>Verificado:</span>
          <span>{user.verified ? 'Sí' : 'No'}</span>
          <span>Perfil activo:</span>
          <span>{user.disabled ? 'No' : 'Sí'}</span>
          <span>Compañia:</span>
          <span>{user.company.name}</span>
          <span>Ubicacion:</span>
          <span>{user.company.location}</span>
          <span>Departmento:</span>
          <span>{user.company.department}</span>
          <span>Puesto:</span>
          <span>{user.company.title}</span>
          <span>Calle:</span>
          <span>{user.address.street}</span>
          <span>Numero:</span>
          <span>{user.address.number}</span>
          <span>Asentamiento:</span>
          <span>{user.address.settlement}</span>
          <span>Codigo Postal:</span>
          <span>{user.address.postal}</span>
          <span>Municipio:</span>
          <span>{user.address.municipality}</span>
          <span>Localidad:</span>
          <span>{user.address.locality ? user.address.locality : ''}</span>
          <span>Estado:</span>
          <span>{user.address.state}</span>
        </div>
        <div className="profile__controls">
          <button type="button" className="btn btn--primary" onClick={() => deleteUser(user.id)}>
            Eliminar Perfil
          </button>
          <button type="button" className="btn btn--primary" onClick={() => onClick(user.id)}>
            Editar Perfil
          </button>
        </div>
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default User;
