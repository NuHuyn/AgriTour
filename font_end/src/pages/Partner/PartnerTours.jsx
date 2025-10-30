import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PartnerTours.css";

const PartnerTours = ({ user }) => {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
  const [search, setSearch] = useState("");

  // 📌 Lấy danh sách tour
useEffect(() => {
  if (!user?.user_id) return;
  const url = `http://localhost:8081/api/tours?role=${user.role}&created_by=${user.user_id}`;
  console.log("🔗 Fetching tours from:", url);

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("📦 Tours fetched:", data);
      setTours(data);
    })
    .catch(err => console.error("Fetch tours error:", err));
}, [user]);


  // Lọc theo search
  const filteredTours = tours.filter((tour) =>
    tour.tour_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="partner-tours">
      <h1>Manage Your Tours</h1>

      {/* Search + Create button */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search tours..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => navigate("/partner/tours/create")}>Create New Tour</button>
      </div>

      {/* Tour list */}
      <div className="tour-container">
        {filteredTours.length === 0 ? (
          <p>No tours found.</p>
        ) : (
          filteredTours.map((tour) => (
            <div key={tour.tour_id} className="tour-card">
              <div className="tour-info">
                {tour.image_url ? (
                  <img
                    src={`http://localhost:8081${tour.image_url}`}
                    alt={tour.tour_name}
                  />
                ) : (
                  "No Image"
                )}
                <div>
                  <h3>{tour.tour_name}</h3>
                  <p>Location: {tour.location}</p>
                  <p>Price: ${tour.price}</p>
                  <p>Status: {tour.status || "pending"}</p>
                </div>
              </div>
              <div className="tour-actions">
                <button onClick={() => alert("Open update form")}>Update</button>
                <button onClick={() => alert("Delete tour")}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PartnerTours;
