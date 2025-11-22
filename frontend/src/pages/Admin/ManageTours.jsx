import React, { useState, useEffect } from "react";
import "./Admin.css";
import { useAuth } from "../../context-store/AuthContext";

const ManageTours = () => {
  const { user } = useAuth();
  const [tours, setTours] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [partnerFilter, setPartnerFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [selectedTour, setSelectedTour] = useState(null);

  // ===========================
  // Fetch tours
  // ===========================
  const fetchTours = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/tours/admin/all", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await res.json();
      console.log("API DATA:", data);
      setTours([...data]); // ép re-render
      setCurrentPage(1);
    } catch (err) {
      console.error("Error fetching tours:", err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, [user.token]);

  // ===========================
  // APPROVE / REJECT (Optimistic Update)
  // ===========================
  const handleReview = async (tour_id, action) => {
  const note = action === "rejected" ? prompt("Reason?") : "";

  // Optimistic UI
  setTours(prev =>
    prev.map(t =>
      t.tour_id === tour_id
        ? { ...t, status: action, partner_name: t.partner_name }
        : t
    )
  );

  try {
    const res = await fetch(
      `http://localhost:5000/api/tours/review/${tour_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ action, note }),
      }
    );

    if (!res.ok) {
      alert("Error while approving!");
      return;
    }

    await fetchTours();

  } catch (err) {
    alert("Server error");
  }
};





  // ===========================
  // FILTERS
  // ===========================
  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.tour_name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? tour.status === statusFilter : true;
    const matchesRegion = regionFilter ? tour.region_name === regionFilter : true;
    const matchesLocation = locationFilter
      ? tour.location?.toLowerCase().includes(locationFilter.toLowerCase())
      : true;
    const matchesPartner = partnerFilter
      ? tour.partner_name?.toLowerCase().includes(partnerFilter.toLowerCase())
      : true;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesLocation &&
      matchesPartner &&
      matchesRegion
    );
  });

  // ===========================
  // PAGINATION
  // ===========================
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);

  const paginatedTours = filteredTours.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // ===========================
  // UI RENDER
  // ===========================
  return (
    <div className="booking-tour-container">
      <h2>Manage Tours</h2>

      {/* FILTERS */}
      <div className="partner-filter">
        <input
          type="text"
          placeholder="Search by tour name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>

        <input
          type="text"
          placeholder="Search by location..."
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />

        <input
          type="text"
          placeholder="Search by partner..."
          value={partnerFilter}
          onChange={(e) => setPartnerFilter(e.target.value)}
        />

        <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)}>
          <option value="">All region</option>
          <option value="North">North</option>
          <option value="Central">Central</option>
          <option value="South">South</option>
        </select>
      </div>

      {/* TABLE */}
      <table className="booking-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tour Name</th>
            <th>Location</th>
            <th>Start</th>
            <th>End</th>
            <th>Price</th>
            <th>Partner</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {paginatedTours.map((tour) => (
            <tr key={tour.tour_id}>
              <td>{tour.tour_id}</td>
              <td>{tour.tour_name}</td>
              <td>{tour.location}</td>
              <td>{tour.start_date?.split("T")[0]}</td>
              <td>{tour.end_date?.split("T")[0]}</td>
              <td>{tour.price}</td>
              <td>{tour.partner_name || "Unknown"}</td>

              <td>
                <span className={`status ${tour.status}`}>{tour.status}</span>
              </td>

              <td>
                <button
                  className="action-btn edit"
                  onClick={() => setSelectedTour(tour)}
                >
                  Edit
                </button>

                {/* NÚT ẨN NGAY KHI KHÔNG CÒN PENDING */}
                {tour.status === "pending" && (
                  <>
                    <button
                      className="action-btn approve"
                      onClick={async () => {
                        handleReview(tour.tour_id, "approved");
                      }}
                    >
                      Approve
                    </button>

                    <button
                      className="action-btn reject"
                      onClick={() => handleReview(tour.tour_id, "rejected")}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

    </div>
  );
};

export default ManageTours;
