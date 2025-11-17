import React from "react";
import "./Cart.css";
import { useCart } from "../../context-store/CartContext";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../components/Utils/priceUtils";

const Cart = ({ onClose }) => {
  const navigate = useNavigate();
  const { pendingBookings } = useCart();
 
  return (
    <div className="cart-popup">
      <div className="cart-box">
        <h2>Pending Bookings</h2>

        {pendingBookings.length === 0 ? (
          <p>No pending booking.</p>
        ) : (
          pendingBookings.map((b) => (
            <div
              key={b.tempId}
              className="cart-item"
              onClick={() => navigate("/confirm-booking", { state: b })}
            >
              <img src={b.tour.tour_image} alt="" />

              <div className="cart-item-info">
                <h4>{b.tour.tour_name}</h4>

                <p>
                  {b.passengers.adults +
                    b.passengers.children +
                    b.passengers.smallChildren +
                    b.passengers.infants}{" "}
                  people
                </p>

                <p>Total: {formatPrice(b.totalAmount)}</p>
              </div>
            </div>
          ))
        )}

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Cart
