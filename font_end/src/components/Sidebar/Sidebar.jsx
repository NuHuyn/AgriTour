import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; 
import { FaTachometerAlt, FaUsers, FaSuitcase, FaCalendarAlt, FaCog, FaUserTie } from 'react-icons/fa';
const Sidebar = () => {
  const menu = [
    { name: 'Dashboard', path: '/admin/dashboard',icon: <FaTachometerAlt /> },
    { name: 'Tours', path: '/admin/tours',icon: <FaSuitcase /> },
    { name: "Partner", path: '/admin/partners', icon: <FaUserTie /> },
    { name: 'Customers', path: '/admin/customers',icon: <FaUsers /> },
    { name: 'Bookings', path: '/admin/bookings',icon: <FaCalendarAlt /> },
    { name: 'Settings', path: '/admin/settings',icon: <FaCog /> },
  ];

  return (
     <aside className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <nav className="sidebar-menu">
        {menu.map((item) => (
          <NavLink
             key={item.path}
             to={item.path}
             className={({ isActive }) =>
             isActive ? 'sidebar-link active' : 'sidebar-link'
           }
          >
           <span className="sidebar-icon">{item.icon}</span>
           <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
