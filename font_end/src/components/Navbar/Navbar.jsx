import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({ setShowLogin, user, setUser }) => {
  const [menu, setMenu] = useState("home");
  const [showMenu, setShowMenu] = useState(false); // 🔹 hiển thị menu khi click

  const handleLogout = () => {
    setUser(null);
    setShowMenu(false);
    alert("You have logged out successfully");
  };

  return (
    <div className='navbar'>
      <img src={assets.logo_agritour} alt="" className="logo"/>
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact-us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="search-icon-logo" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" className="basket-icon" />
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
              <img
                src={assets.user_icon}
                alt="user"
                className="user-icon"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  marginRight: "8px"
                }}
              />
              <span>{user.full_name || user.email}</span>
            </div>

            {/* ✅ Dropdown menu */}
            {showMenu && (
              <div className="user-dropdown">
                <p onClick={() => alert(`User: ${user.full_name}`)}>Personal information</p>
                <p onClick={handleLogout}>Log out</p>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;