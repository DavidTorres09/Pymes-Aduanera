import { useState } from 'react';
import '../css/ProfileForm.css';

const ProfileForm = () => {
  const [usuario, setUsuario] = useState({
    nombreUsuario: 'John',
    Apellido1: 'Doe',
    Apellido2: 'Smith',
    idUsuario: '123456789',
    Numero: '123-456-7890',
    Correo: 'john.doe@example.com',
  });

  const [editando, setEditando] = useState(false);

  const manejarCambio = (campo, valor) => {
    setUsuario({
      ...usuario,
      [campo]: valor,
    });
  };

  const actualizarDatos = () => {
    // Aquí podrías enviar los datos actualizados al servidor si es necesario.
    setEditando(false);
  };

  return (
    <div className="perfil-container">
      <h2>Datos del Usuario</h2>
      <div className="datos-usuario">
        <p>
          <strong>Nombre:</strong>
          {editando ? (
            <input
              type="text"
              value={usuario.nombreUsuario}
              onChange={(e) => manejarCambio('nombreUsuario', e.target.value)}
            />
          ) : (
            usuario.nombreUsuario
          )}
        </p>
        <p>
          <strong>Apellido:</strong>
          {editando ? (
            <>
              <input
                type="text"
                value={usuario.Apellido1}
                onChange={(e) => manejarCambio('Apellido1', e.target.value)}
              />
              <input
                type="text"
                value={usuario.Apellido2}
                onChange={(e) => manejarCambio('Apellido2', e.target.value)}
              />
            </>
          ) : (
            `${usuario.Apellido1} ${usuario.Apellido2}`
          )}
        </p>
        <p>
          <strong>Cedula de Identidad:</strong> {usuario.idUsuario}
        </p>
        <p>
          <strong>Número Telefónico:</strong>
          {editando ? (
            <input
              type="text"
              value={usuario.Numero}
              onChange={(e) => manejarCambio('Numero', e.target.value)}
            />
          ) : (
            usuario.Numero
          )}
        </p>
        <p>
          <strong>Correo Electrónico:</strong>
          {editando ? (
            <input
              type="text"
              value={usuario.Correo}
              onChange={(e) => manejarCambio('Correo', e.target.value)}
            />
          ) : (
            usuario.Correo
          )}
        </p>
      </div>
      {editando ? (
        <button onClick={actualizarDatos}>Guardar Cambios</button>
      ) : (
        <button onClick={() => setEditando(true)}>Editar</button>
      )}
    </div>
  );
};

export default ProfileForm;
