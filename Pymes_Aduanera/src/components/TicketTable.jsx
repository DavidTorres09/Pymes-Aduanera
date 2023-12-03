import { useState } from "react";
import '../css/admin/TicketTable.css'; // Asegúrate de tener un archivo CSS asociado

const TicketTable = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      titulo: 'Problema con el software',
      descripcion: 'No puedo acceder a la aplicación.',
      nombre: 'Juan',
      apellido1: 'Perez',
      apellido2: 'Gomez',
      estado: 'pendiente',
      prioridad: 'Alta',
      usuario: 'usuario1',
      fechaInicio: '2023-01-01',
      numeroSeguimiento: 'ABC123',
    },
    {
      id: 2,
      titulo: 'Error en la página de inicio',
      descripcion: 'La página de inicio no carga correctamente.',
      nombre: 'Maria',
      apellido1: 'Lopez',
      apellido2: 'Rodriguez',
      estado: 'enProceso',
      prioridad: 'Media',
      usuario: 'usuario2',
      fechaInicio: '2023-01-02',
      numeroSeguimiento: 'DEF456',
    },
    {
      id: 3,
      titulo: 'Problema con la facturación',
      descripcion: 'No puedo descargar mis facturas.',
      nombre: 'Carlos',
      apellido1: 'Gonzalez',
      apellido2: 'Vargas',
      estado: 'completo',
      prioridad: 'Baja',
      usuario: 'usuario3',
      fechaInicio: '2023-01-03',
      numeroSeguimiento: 'GHI789',
    },
    {
      id: 4,
      titulo: 'Solicitud de nueva funcionalidad',
      descripcion: 'Quisiera que se agregue una función de búsqueda avanzada.',
      nombre: 'Laura',
      apellido1: 'Martinez',
      apellido2: 'Diaz',
      estado: 'pendiente',
      prioridad: 'Alta',
      usuario: 'usuario4',
      fechaInicio: '2023-01-04',
      numeroSeguimiento: 'JKL012',
    },
    {
      id: 5,
      titulo: 'Problema con el servicio de chat',
      descripcion: 'No puedo enviar mensajes a través del servicio de chat en vivo.',
      nombre: 'Roberto',
      apellido1: 'Fernandez',
      apellido2: 'Lopez',
      estado: 'pendiente',
      prioridad: 'Alta',
      usuario: 'usuario5',
      fechaInicio: '2023-01-05',
      numeroSeguimiento: 'MNO345',
    },
  ]);

  const handleEstadoChange = (ticketId, nuevoEstado) => {
    const nuevosTickets = tickets.map(ticket =>
      ticket.id === ticketId ? { ...ticket, estado: nuevoEstado } : ticket
    );
    setTickets(nuevosTickets);
  };

  return (
    <table className="ticket-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Nombre</th>
          <th>Apellido 1</th>
          <th>Apellido 2</th>
          <th>Estado</th>
          <th>Prioridad</th>
          <th>Usuario</th>
          <th>Fecha de Inicio</th>
          <th>Número de Seguimiento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map(ticket => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td>{ticket.titulo}</td>
            <td>{ticket.descripcion}</td>
            <td>{ticket.nombre}</td>
            <td>{ticket.apellido1}</td>
            <td>{ticket.apellido2}</td>
            <td>{ticket.estado}</td>
            <td>{ticket.prioridad}</td>
            <td>{ticket.usuario}</td>
            <td>{ticket.fechaInicio}</td>
            <td>{ticket.numeroSeguimiento}</td>
            <td>
              <button
                className="estado-button"
                onClick={() => handleEstadoChange(ticket.id, 'En Proceso')}
              >
                En Proceso
              </button>
              <button
                className="estado-button"
                onClick={() => handleEstadoChange(ticket.id, 'Completo')}
              >
                Completo
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TicketTable;
