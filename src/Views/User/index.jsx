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
  const navigate = useNavigate();
  const { state: id } = useLocation();
  const { state, deleteUser } = useUser(id);
  const { deleted, error, loading, user } = state;

  useEffect(() => {
    if (deleted) {
      navigate('/');
    }
  }, [deleted, navigate]);

  if (loading) {
    return <Loading />;
  }

  const deleteuser = () => {
    deleteUser(user.id);
  };

  const onClick = () => {
    navigate('/edit', { state: user.id });
  };

  return (
    <article id="user" className="profile">
      <figure className="profile__image">
        <img alt="user profile" src={user.photo} />
      </figure>
      <div className="profile__information">
        <h1 className="profile__title">Informacion del usuario</h1>
        {error && <span className="profile__error">{error}</span>}
        <div className="profile__data">
          <span>Nombre:</span>
          <span>{user.name}</span>
          <span>Email:</span>
          <span>{user.email}</span>
          <span>Movil:</span>
          <span>{user.mobile}</span>
          <span>Verificado:</span>
          <span>{user.verified ? 'Sí' : 'No'}</span>
          <span>Perfil activo:</span>
          <span>{user.disabled ? 'No' : 'Sí'}</span>
          <span>Role:</span>
          <span>{roles[user.role]}</span>
          <span>Compañia:</span>
          <span>{user.company.name}</span>
          <span>Puesto:</span>
          <span>{user.company.title}</span>
          <span>Ubicacion:</span>
          <span>{user.company.location}</span>
          <span>Departmento:</span>
          <span>{user.company.department}</span>
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
          <button type="button" className="btn btn--primary" onClick={deleteuser}>
            Eliminar Perfil
          </button>
          <button type="button" className="btn btn--primary" onClick={onClick}>
            Editar Perfil
          </button>
        </div>
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default User;
