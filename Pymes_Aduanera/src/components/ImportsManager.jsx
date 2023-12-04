import { useState } from 'react';
import "../css/admin/ImportsManager.css";
import File from "../Files/Parsersmeaning.pdf"


const ImportsManager = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [importaciones, setImportaciones] = useState([
    {
      NumeroSeguimiento: '123456',
      Nombre: 'Juan',
      PrimerApellido: 'Pérez',
      SegundoApellido: 'Gómez',
      Identificacion: 'A1234567',
      PaisOrigen: 'España',
      PaisDestino: 'Estados Unidos',
      NombreNaviera: 'Naviera Express',
      TipoTramite: 'Importacion',
      AlmacenDestino: 'Almacén A',
      EstadoTramite: 'En Proceso',
      EstadoRevision: 'Pendiente',
      PagoDekra: 'Pendiente',
      Colaborador: 'Ana Martínez',
      FechaCreacion: '2023-04-15',
    },
    {
      NumeroSeguimiento: '789012',
      Nombre: 'María',
      PrimerApellido: 'García',
      SegundoApellido: 'López',
      Identificacion: 'B9876543',
      PaisOrigen: 'México',
      PaisDestino: 'Canadá',
      NombreNaviera: 'Naviera Rápida',
      TipoTramite: 'Importación',
      AlmacenDestino: 'Almacén B',
      EstadoTramite: 'Completado',
      EstadoRevision: 'Aprobado',
      PagoDekra: 'Pagado',
      Colaborador: 'Carlos Sánchez',
      FechaCreacion: '2023-05-20',
    },
  ]);
  const [importacionSeleccionada, setImportacionSeleccionada] = useState({
    NumeroSeguimiento: '',
    Nombre: '',
    // ... (otros campos)
    Archivo: null, // Cambiado a null ya que es un archivo y no una cadena
  });
  
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];
      setImportacionSeleccionada((prevImportacion) => ({
        ...prevImportacion,
        [name]: file,
      }));
    } else {
      setImportacionSeleccionada((prevImportacion) => ({
        ...prevImportacion,
        [name]: value,
      }));
    }
  };
  
  const agregarImportacion = () => {
    const nuevasImportaciones = [...importaciones];
  
    if (editIndex !== null) {
      nuevasImportaciones[editIndex] = importacionSeleccionada;
    } else {
      nuevasImportaciones.push(importacionSeleccionada);
    }
    setImportaciones(nuevasImportaciones);
    resetForm();
  };
  

  const editarImportacion = (index) => {
    setImportacionSeleccionada({ ...importaciones[index] });
    setEditIndex(index);
    setMostrarFormulario(true);
  };

  const eliminarImportacion = (index) => {
    const nuevasImportaciones = importaciones.filter((_, i) => i !== index);
    setImportaciones(nuevasImportaciones);
  };

  const resetForm = () => {
    setImportacionSeleccionada({
      NumeroSeguimiento: '',
      Nombre: '',
      PrimerApellido: '',
      SegundoApellido: '',
      Identificacion: '',
      PaisOrigen: '',
      PaisDestino: '',
      NombreNaviera: '',
      TipoTramite: '',
      AlmacenDestino: '',
      EstadoTramite: '',
      EstadoRevision: '',
      PagoDekra: '',
      Colaborador: '',
      FechaCreacion: '',
    });
    setEditIndex(null);
    setMostrarFormulario(false);
  };

  const isAnyFieldEmpty = () => {
    return Object.values(importacionSeleccionada).some((value) => value === '');
  };

  return (
    <div className="importaciones-manager">
      <h1 className='im-title'>Agregar Nueva Importación</h1>
      <button className="im-button" onClick={() => setMostrarFormulario(true)}>
        Agregar Importación
      </button>

      {mostrarFormulario && (
        <div className="im-modal-overlay">
          <div className="im-modal-content">
            <span className="im-close" onClick={() => resetForm()}>&times;</span>
            <form className="im-formulario-importacion">
              <label className="formLabel">
                Número de Seguimiento
                <input
                  type="text"
                  name="NumeroSeguimiento"
                  value={importacionSeleccionada.NumeroSeguimiento}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Nombre
                <input
                  type="text"
                  name="Nombre"
                  value={importacionSeleccionada.Nombre}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Primer Apellido
                <input
                  type="text"
                  name="PrimerApellido"
                  value={importacionSeleccionada.PrimerApellido}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Segundo Apellido
                <input
                  type="text"
                  name="SegundoApellido"
                  value={importacionSeleccionada.SegundoApellido}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Identificacion
                <input
                  type="text"
                  name="Identificacion"
                  value={importacionSeleccionada.Identificacion}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Pais de Origen
                <input
                  type="text"
                  name="PaisOrigen"
                  value={importacionSeleccionada.PaisOrigen}
                  onChange={handleInputChange}
                />
              </label><label className="formLabel">
                Pais de destino
                <input
                  type="text"
                  name="PaisDestino"
                  value={importacionSeleccionada.PaisDestino}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Nombre de Naviera
                <input
                  type="text"
                  name="NombreNaviera"
                  value={importacionSeleccionada.NombreNaviera}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Tipo de Tramite
                <input
                  type="text"
                  name="TipoTramite"
                  value={importacionSeleccionada.TipoTramite}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Almecen de Destino
                <input
                  type="text"
                  name="AlmacenDestino"
                  value={importacionSeleccionada.AlmacenDestino}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Estado de Tramite
                <input
                  type="text"
                  name="EstadoTramite"
                  value={importacionSeleccionada.EstadoTramite}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Revision
                <input
                  type="text"
                  name="EstadoRevision"
                  value={importacionSeleccionada.EstadoRevision}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Pago Dekra
                <input
                  type="text"
                  name="PagoDekra"
                  value={importacionSeleccionada.PagoDekra}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Colaborador
                <input
                  type="text"
                  name="Colaborador"
                  value={importacionSeleccionada.Colaborador}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Fecha Creacion
                <input
                  type="text"
                  name="FechaCreacion"
                  value={importacionSeleccionada.FechaCreacion}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Archivo
                <input
                    type="file"
                    name="Archivo"
                    onChange={handleInputChange}
                    className='fileParcel'
                />
                </label>

              <button
                className="im-btn-guardar"
                type="button"
                onClick={agregarImportacion}
                disabled={isAnyFieldEmpty()}
              >
                {editIndex !== null ? 'Guardar Edición' : 'Guardar Importación'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="im-listado-importaciones">
        <h2>Listado de Importaciones</h2>
        <table>
          <thead>
            <tr>
              <th>Número de Seguimiento</th>
              <th>Nombre</th>
              <th>Primer Apellido</th>
              <th>Segundo Apellido</th>
              <th>Identificacion</th>
              <th>PaisOrigen</th>
              <th>PaisDestino</th>
              <th>Naviera</th>
              <th>Tramite</th>
              <th>Destino</th>
              <th>Estado Tramite</th>
              <th>Estado Revision</th>
              <th>Pago Dekra</th>
              <th>Colaborador</th>
              <th>Fecha Creacion</th>
              <th>Archivo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {importaciones.map((importacion, index) => (
              <tr key={index}>
                <td>{importacion.NumeroSeguimiento}</td>
                <td>{importacion.Nombre}</td>
                <td>{importacion.PrimerApellido}</td>
                <td>{importacion.SegundoApellido}</td>
                <td>{importacion.Identificacion}</td>
                <td>{importacion.PaisOrigen}</td>
                <td>{importacion.PaisDestino}</td>
                <td>{importacion.NombreNaviera}</td>
                <td>{importacion.TipoTramite}</td>
                <td>{importacion.AlmacenDestino}</td>
                <td>{importacion.EstadoTramite}</td>
                <td>{importacion.EstadoRevision}</td>
                <td>{importacion.PagoDekra}</td>
                <td>{importacion.Colaborador}</td>
                <td>{importacion.FechaCreacion}</td>
                <td>
                <a download="" href={File} className="im-button-link">
                  Download
                </a>
              </td>
                <td>
                  <button onClick={() => editarImportacion(index)} className="im-button">
                    Editar
                  </button>
                  <button onClick={() => eliminarImportacion(index)} className="im-button">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportsManager;
