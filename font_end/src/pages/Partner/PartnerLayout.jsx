import React from 'react';
import { Route, Routes, Link, Navigate, NavLink } from 'react-router-dom';
import PartnerDashboard from './PartnerDashboard';
import PartnerTours from './PartnerTours';
import PartnerCustomers from './PartnerCustomers';
import PartnerReports from './PartnerReports';
import PartnerSettings from './PartnerSettings';
import './partnerLayout.css';
import CreateTour from './CreateTour';
import {
  FaTachometerAlt,
  FaSuitcase,
  FaUsers,
  FaChartBar,
  FaCog
} from "react-icons/fa";

const PartnerLayout = ({ user }) => {
  if (!user || user.role !== 'partner') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="partner-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="sidebar-logo">Partner Panel</h2>

        <nav className="sidebar-menu">

          <NavLink to="/partner/dashboard" className="sidebar-link">
            <FaTachometerAlt className="sidebar-icon" />
            Dashboard
          </NavLink>

          <NavLink to="/partner/tours" className="sidebar-link">
            <FaSuitcase className="sidebar-icon" />
            Tours
          </NavLink>

          <NavLink to="/partner/customers" className="sidebar-link">
            <FaUsers className="sidebar-icon" />
            Customers
          </NavLink>

          <NavLink to="/partner/reports" className="sidebar-link">
            <FaChartBar className="sidebar-icon" />
            Reports
          </NavLink>

          <NavLink to="/partner/settings" className="sidebar-link">
            <FaCog className="sidebar-icon" />
            Settings
          </NavLink>

        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="partner-main">
        <div className="content-wrapper">
          <Routes>
            <Route path="dashboard" element={<PartnerDashboard user={user} />} />
            <Route path="tours" element={<PartnerTours user={user} />} />
            <Route path="tours/create" element={<CreateTour user={user} />} />
            <Route path="customers" element={<PartnerCustomers />} />
            <Route path="reports" element={<PartnerReports />} />
            <Route path="settings" element={<PartnerSettings />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default PartnerLayout;
