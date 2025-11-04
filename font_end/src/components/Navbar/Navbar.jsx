import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin, user, setUser }) => {
  const [menu, setMenu] = useState("home");
  const [showMenu, setShowMenu] = useState(false); // 🔹 hiển thị menu khi clicke

  const handleLogout = () => {
    setUser(null);
    setShowMenu(false);
    alert("You have logged out successfully");
  };

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
             <Link to='/cart'><img src={assets.basket_icon} alt="" className="basket-icon" /></Link>
             <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
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
  )
}



export default Navbar;