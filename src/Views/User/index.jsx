/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `User` React component view.
 */

import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import useUser from '../../Hooks/useUser';

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
  const { id } = useParams();
  const { user, loading } = useUser(id);
  if (loading) {
    return <Loading />;
  }

  return (
    <article className="profile">
      <figure className="profile__image">
        <img alt="user profile" src={user.photo} />
        <figcaption>{user.name}</figcaption>
      </figure>
      <div className="profile__information">
        <h1 className="profile__name">Informacion del usuario</h1>
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
          {user.address.locality ? (
            <>
              <span>Localidad:</span>
              <span>{user.address.locality}</span>
            </>
          ) : (
            ''
          )}
          <span>Estado:</span>
          <span>{user.address.state}</span>
        </div>
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default User;
