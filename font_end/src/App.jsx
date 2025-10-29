import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PartnerLayout from './pages/Partner/PartnerLayout';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null); // 👈 thêm state user 

  /*const [user, setUser] = useState({ role: 'partner', name: 'Test Partner' }); */ // Dùng để test giao diện partner


  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} setUser={setUser} />} 
      <div className="app">
        <Navbar setShowLogin={setShowLogin} user={user} setUser={setUser} /> {/* 👈 truyền user xuống */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/partner/*" element={<PartnerLayout user={user} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
