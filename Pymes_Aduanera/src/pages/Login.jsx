import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'test123') {
      navigate('/admin');
    } else if (username === 'user' && password === 'test123') {
      navigate('/user');
    } else {
      navigate('/error'); 
    }
  };

  return (
    <div className='containerLogin'>
      <div className="login-container">
        <div className="company-name">
          <h1 className='TitleLogin'>Pymes Aduanera</h1>
        </div>

        <img src="https://cdn-icons-png.flaticon.com/512/1996/1996005.png" alt="Logo de la empresa" className="logo" />

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Usuario:</label>
            <input type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
          </div>

          <div className="form-group">
            <button type="submit" className='Login form-button'>Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
