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
import SupplierForm from './Create/CreateSupplier.js';
import PacientForm from './Create/CreatePacient.js';
import ProductForm from './Create/CreateProduct.js';
import AppointmentForm from './Create/CreateAppointment.js';
import DateForm from './Create/CreateDate.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<DashboardUsers />} />
          <Route path="/products" element={<DashboardProducts />} />
          <Route path="/suppliers" element={<DashboardSuppliers />} />
          <Route path="/appointments" element={<DashboardAppointments/>} />
          <Route path="/dates" element={<DashboardDates/>} />
          <Route path="/pacients" element={<DashboardPacients/>} />
          <Route path="/users/create" element={<UserForm />} />
          <Route path="/suppliers/create" element={<SupplierForm />} />
          <Route path="/pacients/create" element={<PacientForm />} />
          <Route path="/products/create" element={<ProductForm />} />
          <Route path="/appointments/create" element={<AppointmentForm />} />
          <Route path="/dates/create" element={<DateForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

