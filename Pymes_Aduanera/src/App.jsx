import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import IndexAdmin from './pages/admin/indexAdmin';
import Tickets from './pages/admin/Tickets';
import Clients from './pages/admin/Clients';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<IndexAdmin />} />
        <Route path="/admin/clientes" element={<Clients />} />
        <Route path="/admin/tickets" element={<Tickets />} />
      </Routes>
    </Router>
  );
}

export default App;
