import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboards/Dashboard.js';
import Users from './Dashboards/Users.js';
import Suppliers from './Dashboards/Suppliers.js';
import Pacients from './Dashboards/Pacients.js';
import Products from './Dashboards/Products.js';
import Dates from './Dashboards/Dates.js';
import Appointments from './Dashboards/Appointments.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Ruta para el dashboard principal */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/pacients" element={<Pacients />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
