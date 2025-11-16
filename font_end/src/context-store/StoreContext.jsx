import React, { createContext, useState } from 'react'

// Named export: the React Context object that components will consume
export const StoreContext = createContext(null)

// Default export: a Provider component that wraps the app and supplies state
const StoreContextProvider = ({ children }) => {
  // 👉 nếu cần state chung cho toàn app, khai báo ở đây
  const [user, setUser] = useState(null); 
  const [region, setRegion] = useState('All');
  const contextValue = {
    region,
    setRegion,
    user,
    setUser
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
