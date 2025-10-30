import React from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import PartnerDashboard from './PartnerDashboard';
import PartnerTours from './PartnerTours';
import PartnerCustomers from './PartnerCustomers';
import PartnerReports from './PartnerReports';
import PartnerSettings from './PartnerSettings';
import './partnerLayout.css';
import CreateTour from './CreateTour';


const PartnerLayout = ({ user }) => {
  if (!user || user.role !== 'partner') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="partner-container">
      <aside className="partner-sidebar">
        <h2>Partner Panel</h2>
        <nav>
          <Link to="/partner/dashboard">Dashboard</Link>
          <Link to="/partner/tours">Tours</Link>
          <Link to="/partner/customers">Customers</Link>
          <Link to="/partner/reports">Reports</Link>
          <Link to="/partner/settings">Settings</Link>
        </nav>
      </aside>

      <main className="partner-main">
        <Routes>
          <Route path="dashboard" element={<PartnerDashboard user={user} />} />
          <Route path="tours" element={<PartnerTours user={user}/>} />
          <Route path="customers" element={<PartnerCustomers />} />
          <Route path="reports" element={<PartnerReports />} />
          <Route path="settings" element={<PartnerSettings />} />
          <Route path="tours/create" element={<CreateTour user={user} />} />
        </Routes>
      </main>
    </div>
  );
};

export default PartnerLayout;
