import React, { useState } from 'react';
import { list_tour_1 } from '../../assets/assets'
import './Admin.css';
const ManageTours = () => {
  //dữ liệu giả nhớ cập nhật khi fetch back end
  const tours = list_tour_1.map((tour, index) => ({
  ...tour,
  status: index % 3 === 0 ? "pending" : index % 3 === 1 ? "approved" : "cancelled",
  }));
  

  //phần filter 
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [partnerFilter, setPartnerFilter] = useState('');
  const [selectedTour, setSelectedTour] = useState(null);
  const [regionFilter, setRegionFilter] = useState('');

  const filteredTours = list_tour_1.filter((tour) => {
    const matchesSearch = tour.tour_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? tour.status === statusFilter : true;
    const matchesRegion = regionFilter ? tour.region === regionFilter : true;
    const matchesLocation = locationFilter
      ? tour.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;
    const matchesPartner = partnerFilter
      ? tour.partner_name.toLowerCase().includes(partnerFilter.toLowerCase())
      : true;
    return matchesSearch && matchesStatus && matchesLocation && matchesPartner && matchesRegion;
  });
      
    //phân trang
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 5;
   const totalPages = Math.ceil(filteredTours.length / itemsPerPage);
   const paginatedTours = filteredTours.slice(
     (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );


  return (
    
      <div className="booking-tour-container">
      <h2>Manage Tours</h2>

      {/* Bộ lọc */}
      <div className="partner-filter">
        <input
          type="text"
          placeholder="Tìm theo tên tour..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <input
          type="text"
          placeholder="Tìm theo địa điểm..."
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tìm theo tên partner..."
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
         

        

      {/* Bảng tour */}
      <table className="booking-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tour Name</th>
            <th>Location</th>
            <th>Start</th>
            <th>Period</th>
            <th>Price</th>
            <th>Partner</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTours.map((tour)=> (
            <tr key={tour.id}>
              <td>{tour.id}</td>
              <td>{tour.tour_name}</td>
              <td>{tour.location}</td>
              <td>{tour.start_date}</td>
              <td>{tour.period}</td>
              <td>{tour.price}</td>
              <td>{tour.partner_name}</td>
              <td>
                <span className={`status ${tour.status}`}>
                  {tour.status === 'pending'
                    ? 'Pending'
                    : tour.status === 'approved'
                    ? 'Approved'
                    : 'Cancelled'}
                </span>
              </td>
                <td>
                  <button className="action-btn edit" onClick={() => setSelectedTour(tour)}>
                    Edit
                   </button>
                 {tour.status === 'pending' && (
                   <button
                     className="action-btn approve"
                     onClick={() => alert(`Approved tour ID: ${tour.id}`)}
                   >
                      Approve
                   </button>
                 )}
                </td>

            </tr>
          ))}
        </tbody>
      </table>
          <div className="pagination">
             {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? 'active' : ''}
                onClick={() => setCurrentPage(i + 1)}
               >
             {i + 1}
             </button>
              ))}
          </div>

      {/* Popup chỉnh sửa */}
      {selectedTour && (
        <div className="popup-overlay" onClick={() => setSelectedTour(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Edit Tour</h3>
            <form className="edit-form">
              <input type="text" defaultValue={selectedTour.tour_name} placeholder="Tour name" />
              <input type="text" defaultValue={selectedTour.location} placeholder="Location" />
              <input type="date" defaultValue={selectedTour.start_date} />
              <input type="text" defaultValue={selectedTour.period} placeholder="Period" />
              <input type="text" defaultValue={selectedTour.price} placeholder="Price" />
              <select defaultValue={selectedTour.status}>
                <option value="pending">Pending</option>
                <option value="approved">Aprroved</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setSelectedTour(null)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageTours
