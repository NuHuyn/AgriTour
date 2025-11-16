import React, { createContext, useState, useContext } from 'react';

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
  */
    
     /*const [user, setUser] = useState({
     full_name: "Partner Tester",
     email: "partner@test.com",
     role: "partner"
    });
  */
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
