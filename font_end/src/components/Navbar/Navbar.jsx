import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({ setShowLogin, user }) => {
  const [menu, setMenu] = useState("home");

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

        {/* ✅ Nếu user chưa login */}
        {!user ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          /* ✅ Nếu user đã login */
          <div className="navbar-user-info">
            <img
              src={assets.user_icon} // icon user
              alt="user"
              className="user-icon"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                marginRight: "8px"
              }}
            />
            <span className="user-name">
              Hi, {user.full_name || user.email}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
