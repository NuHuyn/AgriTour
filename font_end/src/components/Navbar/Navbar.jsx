import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context-store/CartContext';
import Cart from '../../pages/Cart/Cart';

const Navbar = ({ setShowLogin, user, setUser }) => {
  const [menu, setMenu] = useState("home");
  const [showMenu, setShowMenu] = useState(false); // 🔹 hiển thị menu khi clicke
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    setShowMenu(false);
    alert("You have logged out successfully");
  };
  
   const { pendingBookings } = useCart();
   const [showCart, setShowCart] = useState(false);


  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo_agritour} alt="" className="logo"/></Link>
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <Link to="/" onClick={() => setMenu("home")}>Home</Link>
        </li>
        <li className={menu === "tour" ? "active" : ""}>
          <Link to="/tour" onClick={() => setMenu("tour")}>Tour</Link>
        </li>
        <li onClick={()=>setMenu("information")} className={menu==="information"?"active":""}>Information</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact-us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className ="search-icon-logo" />
        <div className="navbar-search-icon">
             <img src={assets.basket_icon} alt="cart" className="basket-icon" />
              {pendingBookings.length > 0 && (
                <span className="cart-badge">{pendingBookings.length}</span>
              )}
             <div className="dot"></div>
        </div>
         {/* ✅ Nếu có user thì hiện avatar + tên */}
        {user ? (
          <div className="navbar-user-info">
            <div
              className="user-display"
              onClick={() => setShowMenu(!showMenu)}
              style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              {/* Avatar theo role */}
      <img
        src={
          user.role === 'admin'
            ? assets.admin_icon
            : user.role === 'partner'
            ? assets.partner_icon || assets.user_icon
            : assets.user_icon
        }
        alt="user"
        className="user-icon"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          marginRight: "8px"
        }}
      />
          {/* Tên hiển thị */}
      <span>
        {user.role === 'admin'
          ? `Admin: ${user.full_name}`
          : user.role === 'partner'
          ? `Partner: ${user.full_name}`
          : user.full_name || user.email}
      </span>
             
            </div>

            {showMenu && (
              <div className="user-dropdown">
                     
                  
                 {user.role === 'admin' && (
                   <p onClick={() => navigate('/admin/dashboard')}>Admin Panel</p>
                 )}
                 
                 {user.role === 'partner' && (
                  <p onClick={() => navigate('/partner/dashboard')}>
                    Partner Panel
                  </p>
                 )}
                 <p onClick={() => alert(`User: ${user.full_name}`)}>Personal information</p>
                 <p onClick={handleLogout}>Log out</p>
              </div>
            )}

          </div>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        )}
      </div>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </div>
  )
}



export default Navbar;