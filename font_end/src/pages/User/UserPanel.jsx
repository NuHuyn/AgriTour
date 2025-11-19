import React, { useState, useEffect } from "react";
import "./UserPanel.css";
import TourCard from "./TourCard";
import { useAuth } from "../../context-store/AuthContext";

// Hàm format ngày dd/mm/yyyy
const formatDate = (datetimeStr) => {
  const date = new Date(datetimeStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const UserPanel = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [tours, setTours] = useState({
    upcoming: [],
    ongoing: [],
    completed: [],
    cancelled: []
  });

  useEffect(() => {
    if (!user) return;

    const fetchTours = async () => {
      try {
        const res = await fetch(`http://localhost:8081/api/bookings/user/${user.user_id}`);
        if (!res.ok) throw new Error("Failed to fetch tours");
        const data = await res.json();

        const categorized = {
          upcoming: [],
          ongoing: [],
          completed: [],
          cancelled: []
        };

        data.forEach(b => {
          const start = new Date(b.start_date);
          const end = new Date(b.end_date);
          const now = new Date();

          let status = "completed";
          if (now < start) status = "upcoming";
          else if (now >= start && now <= end) status = "ongoing";

          categorized[status].push({
            tour: {
              id: b.tour_id,
              tour_name: b.tour_name,
              tour_image: b.image_url.startsWith("http")
                ? b.image_url
                : `http://localhost:8081${b.image_url}`,
              image_url: b.image_url.startsWith("http")
                ? b.image_url
                : `http://localhost:8081${b.image_url}`,
              start_date: formatDate(b.start_date),
              end_date: formatDate(b.end_date),
              price: b.price
            },
            passengerCount: b.num_people,
            totalAmount: b.total_price,
            startDate: formatDate(b.start_date),
            endDate: formatDate(b.end_date),
            bookingId: b.booking_id
          });
        });

        setTours(categorized);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, [user]);

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
        {tours[activeTab].length === 0 ? (
          <p>No tours in this category.</p>
        ) : (
          tours[activeTab].map((item, i) => (
            <TourCard
              key={i}
              item={item}
              status={activeTab}
              onCancel={() => console.log("Cancel", item)}
              onRate={() => console.log("Rate", item)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UserPanel;
