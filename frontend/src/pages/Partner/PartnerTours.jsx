/*import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PartnerTours.css";

const PartnerTours = ({ user }) => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL; 
   const API_BASE = import.meta.env.VITE_API_BASE;

  const [tours, setTours] = useState([]);
  const [search, setSearch] = useState("");

  // 📌 Lấy danh sách tour
  useEffect(() => {
    if (!user?.user_id) return;
    const url = `${API_URL}/tours/partner/${user.user_id}`;
    console.log("🔗 Fetching tours from:", url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("📦 Tours fetched:", data);
        // Sắp xếp theo created_at (mới nhất lên đầu)
        const sorted = [...data].sort((a, b) => {
          if (!a.created_at) return 1;   // Nếu thiếu created_at, cho xuống dưới
          if (!b.created_at) return -1;
          return new Date(b.created_at) - new Date(a.created_at);
        });

        setTours(sorted);
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

      
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search tours..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => navigate("/partner/tours/create")}>Create New Tour</button>
      </div>

      
      <div className="tour-container">
        {filteredTours.length === 0 ? (
          <p>No tours found.</p>
        ) : (
          filteredTours.map((tour) => 
            (
            <div key={tour.tour_id} className="tour-card">
              <div className="tour-info">
                {tour.image_url ? (
                  <img
                    src={`${API_URL}${tour.image_url}`}
                    alt={tour.tour_name}
                  />
                ) : (
                  "No Image"
                )}
                <div>
                  <h3>{tour.tour_name}</h3>
                  <p>Location: {tour.location}</p>
                  <p>Price: ${tour.price}</p>
                  <p>
                    Status:{" "}
                    <span
                      className={
                        "status-badge " +
                        (tour.status === "approved"
                          ? "status-approved"
                          : tour.status === "rejected"
                            ? "status-rejected"
                            : "status-pending")
                      }
                    >
                      {tour.status || "pending"}
                    </span>
                  </p>
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
*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PartnerTours.css";

const PartnerTours = ({ user }) => {
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;     // chỉ dùng để gọi API
  const API_BASE = import.meta.env.VITE_API_BASE;   // dùng để load ảnh

  const [tours, setTours] = useState([]);
  const [search, setSearch] = useState("");

  // 📌 Lấy danh sách tour
  useEffect(() => {
    if (!user?.user_id) return;

    const url = `${API_URL}/tours/partner/${user.user_id}`;
    console.log("🔗 Fetching tours from:", url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 Tours fetched:", data);

        /*const sorted = [...data].sort((a, b) => {
          if (!a.created_at) return 1;
          if (!b.created_at) return -1;
          return new Date(b.created_at) - new Date(a.created_at);
        }); */

        const sorted = [...data].sort((a, b) => b.tour_id - a.tour_id);

        setTours(sorted);
      })
      .catch((err) => console.error("Fetch tours error:", err));
  }, [user]);

  // 🔎 Lọc theo search
  const filteredTours = tours.filter((tour) =>
    tour.tour_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="partner-tours">
      <h1>Manage Your Tours</h1>

      
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search tours..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => navigate("/partner/tours/create")}>
          Create New Tour
        </button>
      </div>

      
      <div className="tour-container">
        {filteredTours.length === 0 ? (
          <p>No tours found.</p>
        ) : (
          filteredTours.map((tour) => {

            // ⭐ CHUẨN HOÁ image_url giống UserPanel
            const imageUrl = tour.image_url?.startsWith("http")
              ? tour.image_url
              : `${API_BASE}${tour.image_url}`;

            return (
              <div key={tour.tour_id} className="tour-card">
                <div className="tour-info">
                  {tour.image_url ? (
                    <img src={imageUrl} alt={tour.tour_name} />
                  ) : (
                    "No Image"
                  )}

                  <div>
                    <h3>{tour.tour_name}</h3>
                    <p>Location: {tour.location}</p>
                    <p>Price: ${tour.price}</p>
                    <p>
                      Status:{" "}
                      <span
                        className={
                          "status-badge " +
                          (tour.status === "approved"
                            ? "status-approved"
                            : tour.status === "rejected"
                            ? "status-rejected"
                            : "status-pending")
                        }
                      >
                        {tour.status || "pending"}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="tour-actions">
                  <button onClick={() => alert("Open update form")}>
                    Update
                  </button>
                  <button onClick={() => alert("Delete tour")}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PartnerTours;
