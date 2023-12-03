import { useState } from "react";
import "../css/ProfileForm.css"

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    nombreUsuario: 'Juan',
    Apellido1: 'Perez',
    Apellido2: 'Gomez',
    idUsuario: '123456789',
    Numero: '555-1234',
    Correo: 'juan.perez@example.com',
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // const handleFileChange = (e) => {
  //   // Manejar la lógica para cargar la foto de perfil, si es necesario
  // };

  const guardarPerfil = () => {
    // Validar que ningún campo esté vacío
    if (!profile.nombreUsuario || !profile.Apellido1 || !profile.Apellido2 || !profile.idUsuario || !profile.Numero || !profile.Correo) {
      alert('Completa todos los campos antes de guardar.');
      return;
    }

    // Enviar los datos al backend o realizar la lógica necesaria aquí

    // Mostrar un mensaje de éxito
    alert('Perfil guardado correctamente.');

    // Desactivar el modo de edición después de guardar
    setEditMode(false);
  };

  return (
    <div className="containerProfile">
      <h1 className="profileTitle">Mi Perfil</h1>

      <div className="profileContent">
        {editMode ? (
          <form className="editForm">
            <label className="formLabel">
              Nombre:
              <input
                type="text"
                name="nombreUsuario"
                value={profile.nombreUsuario}
                onChange={handleInputChange}
                required
                className="formInput"
              />
            </label>

            <label className="formLabel">
              Apellido 1:
              <input
                type="text"
                name="Apellido1"
                value={profile.Apellido1}
                onChange={handleInputChange}
                required
                className="formInput"
              />
            </label>

            <label className="formLabel">
              Apellido 2:
              <input
                type="text"
                name="Apellido2"
                value={profile.Apellido2}
                onChange={handleInputChange}
                required
                className="formInput"
              />
            </label>

            <label className="formLabel">
              Cédula de Identidad:
              <input
                type="number"
                name="idUsuario"
                value={profile.idUsuario}
                onChange={handleInputChange}
                required
                className="formInput"
              />
            </label>

            <label className="formLabel">
              Número Telefónico:
              <input
                type="text"
                name="Numero"
                value={profile.Numero}
                onChange={handleInputChange}
                required
                className="formInput"
              />
            </label>

            <label className="formLabel">
              Correo Electrónico:
              <input
                type="email"
                name="Correo"
                value={profile.Correo}
                onChange={handleInputChange}
                required
                className="formInput"
              />
            </label>

            <label className="formLabel">
              Foto de Perfil:
              <input type="file" accept="image/*" className="formInput" />
            </label>

            <button type="button" onClick={guardarPerfil} className="saveButton">
              Guardar Perfil
            </button>
          </form>
        ) : (
          <div className="displayProfile">
            <p>
              <strong>Nombre:</strong> {profile.nombreUsuario}
            </p>
            <p>
              <strong>Primer Apellido:</strong> {profile.Apellido1}
            </p>
            <p>
              <strong>Segundo Apellido:</strong> {profile.Apellido2}
            </p>
            <p>
              <strong>Cédula de Identidad:</strong> {profile.idUsuario}
            </p>
            <p>
              <strong>Número Telefónico:</strong> {profile.Numero}
            </p>
            <p>
              <strong>Correo Electrónico:</strong> {profile.Correo}
            </p>

            <button type="button" onClick={() => setEditMode(true)} className="editButton">
              Editar Perfil
            </button>
          </div>
        )}
      </div>
    </div>

  );
};

export default ProfileForm;
