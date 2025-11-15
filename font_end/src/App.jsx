import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Tour from './pages/Tour/Tour';
import PartnerLayout from './pages/Partner/PartnerLayout';
import AdminLayout from './pages/Admin/AdminLayout';
import { AuthProvider, useAuth } from './context-store/AuthContext';
import Dashboard from './pages/Admin/Dashboard';
import BookingTour from './pages/Admin/BookingTour';
import ManageCustomers from './pages/Admin/ManageCustomers';
import ManageTours from './pages/Admin/ManageTours';
import Settings from './pages/Admin/Settings';
import ManagePartners from './pages/Admin/ManagePartners';
const AppContent = () => {
  const { user, setUser } = useAuth();
  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} setUser={setUser} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} user={user} setUser={setUser} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/partner/*" element={<PartnerLayout user={user} />} />
          <Route path="/admin" element={<AdminLayout />}>
             <Route index element={<Dashboard />} /> {/* khi vào /admin tự vào dashboard */}
             <Route path="dashboard" element={<Dashboard />} />
             <Route path="tours" element={<ManageTours />} />
             <Route path="partners" element={<ManagePartners />} />
             <Route path="customers" element={<ManageCustomers />} />
             <Route path="bookings" element={<BookingTour />} />
             <Route path="settings" element={<Settings />} />
          </Route>

        </Routes>
      </div>
    </>
  );
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
