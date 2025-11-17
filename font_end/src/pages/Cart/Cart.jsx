import React from "react";
import "./Cart.css";
import { useCart } from "../../context-store/CartContext";
import { formatPrice } from "../../components/Utils/priceUtils";
import { useNavigate } from "react-router-dom";

const Cart = ({ onClose }) => {
  const { pendingBookings, removeBooking } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container" onClick={onClose}>
      <div className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
        
        <h3 className="cart-title">Pending Bookings</h3>

        <div className="cart-items">
          {pendingBookings.length === 0 ? (
            <p className="empty-text">No pending bookings.</p>
          ) : (
            pendingBookings.map((b) => (
              <div key={b.tempId} className="cart-item">
                
                <img src={b.tour.tour_image} alt="" className="cart-img" />

                <div className="cart-info">
                  <h4>{b.tour.tour_name}</h4>
                  <p>{b.passengers.adults + b.passengers.children} passengers</p>
                  <p className="price">{formatPrice(b.totalAmount)}</p>
                </div>

                <button
                  className="view-btn"
                  onClick={() => {
                    navigate("/confirm-booking", { state: b });
                    onClose();
                  }}
                >
                  View
                </button>

                <button
                  className="delete-btn"
                  onClick={() => removeBooking(b.tempId)}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Cart;
