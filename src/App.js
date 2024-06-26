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
import SupplierForm from './Create/CreateSupplier.js';
import PacientForm from './Create/CreatePacient.js';
import ProductForm from './Create/CreateProduct.js';
import AppointmentForm from './Create/CreateAppointment.js';
import DateForm from './Create/CreateDate.js';
import EditFormUser from './Edit/EditUser.js';
import EditFormPacient from './Edit/EditPacient.js';
import EditFormProduct from './Edit/EditProduct.js';
import EditFormSupplier from './Edit/EditSupplier.js';
import EditFormAppointment from './Edit/EditAppointment.js';
import EditFormDate from './Edit/EditDate.js';
import SignInSide from './LogIn/LogIn.js';
import LandingPage from './LandingPage/LandingPage.js';

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
          <Route path="/users/edit/:id" element={<EditFormUser />} />
          <Route path="/users/create" element={<UserForm />} />
          <Route path="/suppliers/edit/:id" element={<EditFormSupplier />} />
          <Route path="/suppliers/create" element={<SupplierForm />} />
          <Route path="/pacients/edit/:id" element={<EditFormPacient />} />
          <Route path="/pacients/create" element={<PacientForm />} />
          <Route path="/products/edit/:id" element={<EditFormProduct />} />
          <Route path="/products/create" element={<ProductForm />} />
          <Route path="/appointments/edit/:id" element={<EditFormAppointment />} />
          <Route path="/appointments/create" element={<AppointmentForm />} />
          <Route path="/dates/edit/:id" element={<EditFormDate/>} />
          <Route path="/dates/create" element={<DateForm />} />
          <Route path="/login" element={<SignInSide />} />
          <Route path="/landingPage" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

