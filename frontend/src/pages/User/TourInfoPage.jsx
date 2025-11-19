import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TourInfoPage.css"; // dùng chung style confirm

const TourInfoPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <h2 style={{ padding: 40 }}>No tour data found.</h2>;

  const { item } = state;
  const { tour, passengers, totalAmount, customer } = item;
  return (
    <div className="confirm-container">
      
      {/* ================= TOUR INFORMATION ================= */}
      <div className="confirm-section card">
        <h2 className="section-title">Tour Information</h2>

        <div className="tour-confirm-wrapper">
          <img
            src={item.tour.tour_image}
            alt={item.tour.tour_name}
            className="tour-img"
          />

          <table className="tour-info-table">
            <tbody>
              <tr>
                <td className="label">Tour ID</td>
                <td>{item.tour.id}</td>
              </tr>
              <tr>
                <td className="label">Tour Name</td>
                <td>{item.tour.tour_name}</td>
              </tr>
              <tr>
                <td className="label">Passengers</td>
                <td>{item.passengerCount}</td>
              </tr>
              <tr>
                <td className="label">Total Price</td>
                <td>${item.totalAmount}</td>
              </tr>
              <tr>
                <td className="label">Start Date</td>
                <td>{item.startDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= CUSTOMER INFORMATION ================= */}
      <div className="confirm-section card">
        <h2 className="section-title">Customer Information</h2>

        <table className="confirm-table">
          <tbody>
            <tr>
              <td>Full Name</td>
              <td>{item.customer.fullName}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{item.customer.email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{item.customer.phone}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{item.customer.address}</td>
            </tr>
            <tr>
              <td>Notes</td>
              <td>{item.customer.notes || "None"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= PASSENGERS ================= */}
      <div className="confirm-section card">
        <h2 className="section-title">Passenger Summary</h2>

        <table className="confirm-table">
          <tbody>
            <tr>
              <td>Adults</td>
              <td>{item.passengers.adults}</td>
            </tr>
            <tr>
              <td>Children (5–11y)</td>
              <td>{item.passengers.children}</td>
            </tr>
            <tr>
              <td>Small Children (2–5y)</td>
              <td>{item.passengers.smallChildren}</td>
            </tr>
            <tr>
              <td>Infants (&lt;2y)</td>
              <td>{item.passengers.infants}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= BUTTON ================= */}
      <div className="confirm-buttons">
        <button className="back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default TourInfoPage;
