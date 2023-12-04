import { useState } from 'react';
import "../css/admin/ExportsManager.css";


const ExportsManager = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [exportaciones, setExportaciones] = useState([
    {
      NumeroSeguimiento: '123456',
      Nombre: 'Juan',
      PrimerApellido: 'Pérez',
      SegundoApellido: 'Gómez',
      Identificacion: 'A1234567',
      PaisOrigen: 'España',
      PaisDestino: 'Estados Unidos',
      NombreNaviera: 'Naviera Express',
      TipoTramite: 'Exportación',
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
  const [exportacionSeleccionada, setExportacionSeleccionada] = useState();
  
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];
      setExportacionSeleccionada((prevExportacion) => ({
        ...prevExportacion,
        [name]: file,
      }));
    } else {
      setExportacionSeleccionada((prevExportacion) => ({
        ...prevExportacion,
        [name]: value,
      }));
    }
  };

  const agregarExportacion = async () => {
    if (exportacionSeleccionada.Archivo) {
      const formData = new FormData();
      formData.append('Archivo', exportacionSeleccionada.Archivo);
      try {
        const response = await fetch('/ruta-de-tu-api-para-cargar-archivos', {
          method: 'POST',
          body: formData,
        });
        console.log('Respuesta de la carga del archivo:', response);
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
      }
    }
  };

  const editarExportacion = (index) => {
    setExportacionSeleccionada({ ...exportaciones[index] });
    setEditIndex(index);
    setMostrarFormulario(true);
  };

  const eliminarExportacion = (index) => {
    const nuevasExportaciones = exportaciones.filter((_, i) => i !== index);
    setExportaciones(nuevasExportaciones);
  };

  const resetForm = () => {
    setExportacionSeleccionada({
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
    return Object.values(exportacionSeleccionada).some((value) => value === '');
  };

  return (
    <div className="exportaciones-manager">
      <h1 className='em-title'>Agregar Nueva Exportación</h1>
      <button className="btn-agregar" onClick={() => setMostrarFormulario(true)}>
        Agregar Exportación
      </button>

      {mostrarFormulario && (
        <div className="em-modal-overlay">
          <div className="em-modal-content">
            <span className="em-close" onClick={() => resetForm()}>&times;</span>
            <form className="em-formulario-exportacion">
              <label className="formLabel">
                Número de Seguimiento
                <input
                  type="text"
                  name="NumeroSeguimiento"
                  value={exportacionSeleccionada.NumeroSeguimiento}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Nombre
                <input
                  type="text"
                  name="Nombre"
                  value={exportacionSeleccionada.Nombre}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Primer Apellido
                <input
                  type="text"
                  name="PrimerApellido"
                  value={exportacionSeleccionada.PrimerApellido}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Segundo Apellido
                <input
                  type="text"
                  name="SegundoApellido"
                  value={exportacionSeleccionada.SegundoApellido}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Identificacion
                <input
                  type="text"
                  name="Identificacion"
                  value={exportacionSeleccionada.Identificacion}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Pais de Origen
                <input
                  type="text"
                  name="PaisOrigen"
                  value={exportacionSeleccionada.PaisOrigen}
                  onChange={handleInputChange}
                />
              </label><label className="formLabel">
                Pais de destino
                <input
                  type="text"
                  name="PaisDestino"
                  value={exportacionSeleccionada.PaisDestino}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Nombre de Naviera
                <input
                  type="text"
                  name="NombreNaviera"
                  value={exportacionSeleccionada.NombreNaviera}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Tipo de Tramite
                <input
                  type="text"
                  name="TipoTramite"
                  value={exportacionSeleccionada.TipoTramite}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Almecen de Destino
                <input
                  type="text"
                  name="AlmacenDestino"
                  value={exportacionSeleccionada.AlmacenDestino}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Estado de Tramite
                <input
                  type="text"
                  name="EstadoTramite"
                  value={exportacionSeleccionada.EstadoTramite}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Revision
                <input
                  type="text"
                  name="EstadoRevision"
                  value={exportacionSeleccionada.EstadoRevision}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Pago Dekra
                <input
                  type="text"
                  name="PagoDekra"
                  value={exportacionSeleccionada.PagoDekra}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Colaborador
                <input
                  type="text"
                  name="Colaborador"
                  value={exportacionSeleccionada.Colaborador}
                  onChange={handleInputChange}
                />
              </label>
              <label className="formLabel">
                Fecha Creacion
                <input
                  type="text"
                  name="FechaCreacion"
                  value={exportacionSeleccionada.FechaCreacion}
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
                className="em-btn-guardar"
                type="button"
                onClick={agregarExportacion}
                disabled={isAnyFieldEmpty()}
              >
                {editIndex !== null ? 'Guardar Edición' : 'Guardar Exportación'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="em-listado-exportaciones">
        <h2>Listado de Exportaciones</h2>
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
            {exportaciones.map((exportacion, index) => (
              <tr key={index}>
                <td>{exportacion.NumeroSeguimiento}</td>
                <td>{exportacion.Nombre}</td>
                <td>{exportacion.PrimerApellido}</td>
                <td>{exportacion.SegundoApellido}</td>
                <td>{exportacion.Identificacion}</td>
                <td>{exportacion.PaisOrigen}</td>
                <td>{exportacion.PaisDestino}</td>
                <td>{exportacion.NombreNaviera}</td>
                <td>{exportacion.TipoTramite}</td>
                <td>{exportacion.AlmacenDestino}</td>
                <td>{exportacion.EstadoTramite}</td>
                <td>{exportacion.EstadoRevision}</td>
                <td>{exportacion.PagoDekra}</td>
                <td>{exportacion.Colaborador}</td>
                <td>{exportacion.FechaCreacion}</td>
                <td>
                <a download="" href={File} className="em-button-link">
                  Download
                </a>
              </td>
                <td>
                  <button onClick={() => editarExportacion(index)} className="em-button">
                    Editar
                  </button>
                  <button onClick={() => eliminarExportacion(index)} className="em-button">
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

export default ExportsManager;
