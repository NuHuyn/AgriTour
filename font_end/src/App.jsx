import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import LoginPopup from './components/LoginPopup/loginPopup'
import Tour from './pages/Tour/Tour'
import PartnerLayout from './pages/Partner/PartnerLayout';

const App = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  
  return (
   <>
   {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className ='app'>
      <Navbar setShowLogin={setShowLogin}/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/partner/*" element={<PartnerLayout user={user} />} />
      </Routes>
    </div>
    
   </> 
  )
};
 

export default App;
