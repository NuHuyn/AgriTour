import React, { useState } from "react";
import "./UserPanel.css";
import RatingPopup from "../../components/RatingPopup/RatingPopup";
import { useUserTours } from "../../context-store/UserToursContext";
import TourCard from "./TourCard";
const UserPanel = () => {
  const { tours } = useUserTours();
  const [activeTab, setActiveTab] = useState("upcoming");

  // 🔥 nếu tours chưa load -> dùng object trống
  const safeTours = tours || {
    upcoming: [],
    ongoing: [],
    completed: [],
    cancelled: []
  };

  return (
    <div className="userpanel-container">
      <h2 className="userpanel-title">My Tours</h2>

      <div className="userpanel-tabs">
        {["upcoming", "ongoing", "completed", "cancelled"].map(t => (
          <button
            key={t}
            className={`tab-btn ${activeTab === t ? "active" : ""}`}
            onClick={() => setActiveTab(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div className="userpanel-content">
        {tours[activeTab].map((item, i) => (
          <TourCard
            key={i}
            item={item}
            status={activeTab}
            onView={() => console.log("View:", item)}
            onCancel={() => console.log("Cancel:", item)}
            onRate={() => console.log("Rate:", item)}
          />
        ))}
      </div>
    </div>
  )
}

export default UserPanel
