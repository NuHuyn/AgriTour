import React, {useState} from 'react'
import './PartnerDashboard.css'
const PartnerDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Partner Dashboard</h1>

      <form onSubmit={handleSubmit} className="tour-form">
        <input
          type="text"
          placeholder="Tour Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <button type="submit">{editing ? "Update" : "Add Tour"}</button>
      </form>

      <table className="tour-table">
        <thead>
          <tr>
            <th>Tour Name</th>
            <th>Price</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour) => (
            <tr key={tour.id}>
              <td>{tour.name}</td>
              <td>{tour.price.toLocaleString()} VNĐ</td>
              <td>{tour.location}</td>
              <td>
                <button onClick={() => handleEdit(tour)}>Edit</button>
                <button onClick={() => handleDelete(tour.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PartnerDashboard
