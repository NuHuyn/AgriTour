import React from "react";
import "./TourCard.css";
import TourInfoPage from "./TourInfoPage";
import { useNavigate } from "react-router-dom";
const TourCard = ({ item, status, onView, onCancel, onRate }) => {
  const navigate = useNavigate();   // 🔥 THÊM NÈ

  return (
    <div className="tour-card">
      <img src={item.tour.tour_image} alt="" className="tour-card-img" />

      <div className="tour-card-info">
        <h3 className="tour-name">{item.tour.tour_name}</h3>

        <p className="tour-detail"><b>Tour ID:</b> {item.tour.id}</p>
        <p className="tour-detail">
          <b>Passengers:</b> {item.passengerCount}
        </p>
        <p className="tour-detail"><b>Total Price:</b> ${item.totalAmount}</p>
        <p className="tour-detail"><b>Start Date:</b> {item.startDate}</p>
        <p className="tour-detail"><b>End Date:</b> {item.endDate}</p>
        

        <span className={`badge badge-${status}`}>{status.toUpperCase()}</span>

        <div className="tour-card-actions">
          <button
            className="view-btn"
            onClick={() =>
              navigate("/tour-info", { state: { item } })
            }
          >
            View
          </button>

          {status === "upcoming" && (
            <button className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
          )}

          {status === "completed" && (
            <button className="rate-btn" onClick={onRate}>
              Rate ★
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourCard;
