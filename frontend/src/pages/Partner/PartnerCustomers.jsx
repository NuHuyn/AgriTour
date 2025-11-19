import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './PartnerCustomers.css';

const PartnerCustomers = () => {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [tour, setTour] = useState("");

  // Fake data (có dữ liệu thật thì thay vào)
  const customers = [
    { id: 1, name: "Nguyễn Văn A", tour: "Northern Vietnam Scenic Tour", phone: "0901234567", status: "Completed" },
    { id: 2, name: "Trần Thị B", tour: "Central Vietnam Cultural Tour", phone: "0912345678", status: "Pending" },
    { id: 3, name: "Lê Văn C", tour: "South Vietnam Highlights", phone: "0932345678", status: "Cancelled" },
  ];

  // Filter logic
  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (status === "" || c.status === status) &&
    (tour === "" || c.tour === tour)
  );

  return (
    <div>
      <h1>Customer Management</h1>
      <p>Danh sách khách hàng đã đặt tour của bạn.</p>

      {/* ==== FILTER SECTION ==== */}
      <div className="filters-row">

        {/* Search */}
        <div className="filter-input">
          <FaSearch className="filter-icon" />
          <input
            type="text"
            placeholder="Search customer name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Status Filter */}
        <select
          className="filter-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        {/* Tour Filter */}
        <select
          className="filter-select"
          value={tour}
          onChange={(e) => setTour(e.target.value)}
        >
          <option value="">All Tours</option>
          <option value="Northern Vietnam Scenic Tour">Northern Vietnam Scenic Tour</option>
          <option value="Central Vietnam Cultural Tour">Central Vietnam Cultural Tour</option>
          <option value="South Vietnam Highlights">South Vietnam Highlights</option>
        </select>
      </div>

      {/* ==== TABLE ==== */}
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Tour</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filtered.length > 0 ? (
            filtered.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.tour}</td>
                <td>{c.phone}</td>
                <td>
                  <span className={`status-badge ${c.status.toLowerCase()}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PartnerCustomers;
