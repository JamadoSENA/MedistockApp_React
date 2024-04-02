import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboards/Dashboard.js';
import DashboardUsers from './Dashboards/DashboardUsers.js';
import DashboardProducts from './Dashboards/DashboardProducts.js';
import DashboardSuppliers from './Dashboards/DashboardSuppliers.js';
import DashboardAppointments from './Dashboards/DashboardAppointments.js';
import DashboardDates from './Dashboards/DashboardDates.js';
import DashboardPacients from './Dashboards/DashboardPacients.js';
import UserForm from './Create/CreateUser.js';
import { Create } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<DashboardUsers />} />
          <Route path="/users/create" element={<UserForm />} />
          <Route path="/products" element={<DashboardProducts />} />
          <Route path="/suppliers" element={<DashboardSuppliers />} />
          <Route path="/appointments" element={<DashboardAppointments/>} />
          <Route path="/dates" element={<DashboardDates/>} />
          <Route path="/pacients" element={<DashboardPacients/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
