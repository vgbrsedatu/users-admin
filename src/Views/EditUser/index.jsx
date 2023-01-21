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
  const { state, updatedUser, dispacher, fields } = useUser(id);
  const { error, loading, user } = state;
  const NAME = fields({ name: 'NAME', value: user.name });
  const EMAIL = fields({ name: 'EMAIL', value: user.email });
  const MOBILE = fields({ name: 'MOBILE', value: user.mobile });
  const VERIFIED = fields({ name: 'VERIFIED', value: user.verified });
  const DISABLED = fields({ name: 'DISABLED', value: user.disabled });
  const ROLE = fields({ name: 'ROLE', value: user.role });
  const COMPANY_NAME = fields({ name: 'COMPANY_NAME', value: user.company.name });
  const COMPANY_TITLE = fields({ name: 'COMPANY_TITLE', value: user.company.title });
  const COMPANY_LOCATION = fields({ name: 'COMPANY_LOCATION', value: user.company.location });
  const COMPANY_DEPARTMENT = fields({ name: 'COMPANY_DEPARTMENT', value: user.company.department });
  const ADDRESS_STREET = fields({ name: 'ADDRESS_STREET', value: user.address.street });
  const ADDRESS_NUMBER = fields({ name: 'ADDRESS_NUMBER', value: user.address.number });
  const ADDRESS_SETTLEMENT = fields({ name: 'ADDRESS_SETTLEMENT', value: user.address.settlement });
  const ADDRESS_POSTAL = fields({ name: 'ADDRESS_POSTAL', value: user.address.postal });
  const ADDRESS_LOCALITY = fields({ name: 'ADDRESS_LOCALITY', value: user.address.locality });
  const ADDRESS_MUNICIPALITY = fields({
    name: 'ADDRESS_MUNICIPALITY',
    value: user.address.municipality,
  });
  const ADDRESS_STATE = fields({ name: 'ADDRESS_STATE', value: user.address.state });

  if (loading) {
    return <Loading />;
  }

  const onSave = url => {
    uploadFromBlob('as', url)
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
        <div className="profile__data">
          <span>Nombre:</span>
          <input {...NAME} />
          <span>Email:</span>
          <input {...EMAIL} />
          <span>Movil:</span>
          <input {...MOBILE} />
          <span>Verificado:</span>
          <select {...VERIFIED}>
            <option value>Sí</option>
            <option value={false}>No</option>
          </select>
          <span>Perfil activo:</span>
          <select {...DISABLED}>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
          <span>Role:</span>
          <select {...ROLE}>
            <option value="superadmin">Super Administrador</option>
            <option value="administrator">Administrador</option>
            <option value="editor">Editor</option>
            <option value="author">Autor</option>
            <option value="contributor">Colaborador</option>
            <option value="subscriber">Suscriptor</option>
          </select>
          <span>Compañia:</span>
          <input {...COMPANY_NAME} />
          <span>Puesto:</span>
          <input {...COMPANY_TITLE} />
          <span>Ubicacion:</span>
          <input {...COMPANY_LOCATION} />
          <span>Departmento:</span>
          <input {...COMPANY_DEPARTMENT} />
          <span>Calle:</span>
          <input {...ADDRESS_STREET} />
          <span>Numero:</span>
          <input {...ADDRESS_NUMBER} />
          <span>Asentamiento:</span>
          <input {...ADDRESS_SETTLEMENT} />
          <span>Codigo Postal:</span>
          <input {...ADDRESS_POSTAL} />
          <span>Localidad:</span>
          <input {...ADDRESS_LOCALITY} />
          <span>Municipio:</span>
          <input {...ADDRESS_MUNICIPALITY} />
          <span>Estado:</span>
          <input {...ADDRESS_STATE} />
        </div>
        <div className="profile__controls">
          <button type="button" className="btn btn--primary" onClick={updatedUser}>
            Actualizar Perfil
          </button>
        </div>
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default EditUser;
