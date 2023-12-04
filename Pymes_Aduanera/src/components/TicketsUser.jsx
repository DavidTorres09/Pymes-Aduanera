import { useState } from 'react';
import "../css/user/Tickets.css";

const TicketUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    id: Date.now(),
    titulo: '',
    descripcion: '',
    estado: '',
    prioridad: '',
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setNewTicket({
      id: Date.now(),
      titulo: '',
      descripcion: '',
      estado: '',
      prioridad: '',
    });
  };

  const createTicket = () => {
    setTickets([...tickets, newTicket]);
    closeModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTicket((prevTicket) => ({ ...prevTicket, [name]: value }));
  };

  const deleteTicket = (ticketId) => {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketId);
    setTickets(updatedTickets);
    alert('Ticket eliminado');
  };

  return (
    <div className="ticket-module">
      <button className="create-ticket-button" onClick={openModal}>
        Crear Ticket
      </button>

      {showModal && (
        <div className="ticket-modal">
          <div className="modal-content">
            
            <h2>Crear Nuevo Ticket</h2>
            <form className="ticket-form">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <label htmlFor="titulo">Titulo:</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={newTicket.titulo}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="descripcion">Descripción:</label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={newTicket.descripcion}
                onChange={handleInputChange}
                required
              ></textarea>

              <label htmlFor="estado">Estado:</label>
              <input
                type="text"
                id="estado"
                name="estado"
                value={newTicket.estado}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="prioridad">Prioridad:</label>
              <input
                type="text"
                id="prioridad"
                name="prioridad"
                value={newTicket.prioridad}
                onChange={handleInputChange}
                required
              />
              <button type="button" onClick={createTicket}>
                Crear Ticket
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="ticket-list">
        {tickets.map((ticket) => (
          <div className="ticket-card" key={ticket.id}>
            <h3>{ticket.titulo}</h3>
            <p>{ticket.descripcion}</p>
            <p>Estado: {ticket.estado}</p>
            <p>Prioridad: {ticket.prioridad}</p>
            <button onClick={() => deleteTicket(ticket.id)}>
              Eliminar Ticket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketUser;
