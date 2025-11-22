/*import React, { createContext, useState, useContext } from 'react';

// 1. Tạo context
const AuthContext = createContext();

// 2. Provider để bọc toàn bộ app
export const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState(null); // user = { full_name, role, ... }
  /* const [user, setUser] = useState({
  full_name: "Admin Tester",
  email: "admin@example.com",
  role: "admin"
  });
  
    
     /*const [user, setUser] = useState({
     full_name: "Partner Tester",
     email: "partner@test.com",
     role: "partner"
    });

  const [user, setUser] = useState({
  id: 1,
  full_name: "Demo User",
  email: "demo@test.com",
  phone: "0123456789",
  role: "customer",
  token: "DEMO_TOKEN"
  });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom hook để dùng trong component
export const useAuth = () => useContext(AuthContext);
*/

import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Lấy user từ localStorage một cách an toàn (không bị lỗi JSON.parse)
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("user");
      if (!saved || saved === "undefined") return null;  // Không parse undefined
      return JSON.parse(saved);
    } catch (error) {
      console.error("Lỗi khi parse user từ localStorage:", error);
      localStorage.removeItem("user");
      return null;
    }
  });

  // Hàm login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Hàm logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
