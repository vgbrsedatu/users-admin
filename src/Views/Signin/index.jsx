/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Signin` React component view.
 */

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { useSignin } from '../../Context/AuthContext';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Signin` component react component view.
 *
 * @component
 * @returns {JSX.Element} The `Signin` components.
 */
const Signin = () => {
  const [email, setEmail] = useState('vibeltranr@gmail.com');
  const [password, setPassword] = useState('dipper123');
  const [error, setError] = useState(null);
  const { loading, signin } = useSignin();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = !location.state ? '/' : location.state.from;

  const onClick = () => {
    signin({ email, password })
      .then(() => {
        navigate(redirect);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <article className="surface">
      <form className="signup">
        <fieldset>
          <legend>Signup</legend>
          <label htmlFor="email">
            <span>Correo:</span>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Escribe tu correo usuario"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <span>Contraseña:</span>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Escribe tu correo contraseña"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button className="btn" type="button" onClick={onClick}>
            Enviar
          </button>
        </fieldset>
      </form>
      {error && <div className="error-message">{error}</div>}
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Signin;
