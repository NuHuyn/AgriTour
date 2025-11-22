import { createContext, useState, useContext } from "react";

//  Tạo context đúng cách
const CartContext = createContext();

//  Provider bọc toàn bộ app
export const CartProvider = ({ children }) => {
  const [pendingBookings, setPendingBookings] = useState([]);

  const addBookingToCart = (booking) => {
    setPendingBookings((prev) => [...prev, booking]);
  };

  const removeBooking = (id) => {
    setPendingBookings((prev) => prev.filter((b) => b.tempId !== id));
  };

  return (
    <CartContext.Provider value={{ pendingBookings, addBookingToCart, removeBooking }}>
      {children}
    </CartContext.Provider>
  );
};

//  Hook lấy dữ liệu trong context
export const useCart = () => useContext(CartContext);
