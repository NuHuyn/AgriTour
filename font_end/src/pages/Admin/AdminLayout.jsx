import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Admin.css';
import { Routes, Route, Navigate ,Outlet} from 'react-router-dom';
import Dashboard from './Dashboard';
import ManageTours from './ManageTours';
import ManageCustomers from './ManageCustomers';
import BookingTour from './BookingTour';
import Settings from './Settings';
import {AuthProvider, useAuth } from '../../context-store/AuthContext';
const AdminLayout = () => {
  const { user } = useAuth();
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return (
   <div className="admin-layout">
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

