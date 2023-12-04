import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import IndexAdmin from './pages/admin/indexAdmin';
import Tickets from './pages/admin/Tickets';
import Clients from './pages/admin/Clients';
import Profile from './pages/Profile';
import Parcel from './pages/admin/Parcel';
import Exports from './pages/admin/Exports';
import Imports from './pages/admin/Imports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<IndexAdmin />} />
        <Route path="/admin/clientes" element={<Clients />} />
        <Route path="/admin/tickets" element={<Tickets />} />
        <Route path="/admin/paqueteria" element={<Parcel />} />
        <Route path="/admin/importaciones" element={<Imports />} />
        <Route path="/admin/exportaciones" element={<Exports />} />
        <Route path="/admin/perfil" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
