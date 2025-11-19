/*import React,{useState,useContext} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { tour, list_tour_1, list_tour_2 } from "../../assets/assets";
import { tour_full_sample_list } from "../../assets/tour_sample_full";
import { useAuth } from "../../context-store/AuthContext";
import LoginPopup from "../../components/LoginPopup/LoginPopup";
import BookingPopup from "../../components/BookingPopup/BookingPopup";
import './TourDetail.css'
*/
/*
const TourDetail = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

// lấy user từ Context
  const { user, setUser } = useAuth();


  const { id } = useParams();
  const navigate = useNavigate();
  // gom tất cả tour lại để tìm theo id
  const allTours = [
  ...tour,
  ...list_tour_1,
  ...list_tour_2,
  ...tour_full_sample_list  // ⭐ thêm tour full detail vào
];

const selectedTour =
  tour_full_sample_list.find(t => t.id === parseInt(id)) ||
  tour.find(t => t.id === parseInt(id)) ||
  list_tour_1.find(t => t.id === parseInt(id)) ||
  list_tour_2.find(t => t.id === parseInt(id));

  if (!selectedTour) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Tour not found</h2>;
  }
   
 const handleBookClick = () => {
   if (!user) {
    setShowLogin(true);
   } else {
    navigate(`/book-tour/${selectedTour.id}`);
   }
  };



  return (
    <div className="tour-detail-container">

      <h1 className="tour-detail-title">{selectedTour.tour_name}</h1>

      <div className="tour-detail-content"> */
        {/* LEFT */} 
       /* <div className="tour-detail-left">
          <img
            src={selectedTour.tour_image}
            alt={selectedTour.tour_name}
            className="tour-detail-image"
          />
*/
          {/* Journey Highlights */}
          /*
          <div className="tour-highlight-section">
            <h2>Journey Highlights</h2>

            <div className="tour-highlight-table">
              <p><strong>Route:</strong> {selectedTour.route || "Updating..."}</p>
              <p><strong>Duration:</strong> {selectedTour.period || "Updating..."}</p>
              <p><strong>Departure Dates:</strong> {selectedTour.departure_dates || "Updating..."}</p>
              <p><strong>Transportation:</strong> {selectedTour.transport || "Updating..."}</p>
            </div>

            <p className="tour-detail-description">
              {selectedTour.long_description ||
                "More detailed information for this tour will be updated soon."}
            </p>

            {selectedTour.tags && (
              <p className="tour-tags">
                <strong>Tags:</strong> {selectedTour.tags.join(", ")}
              </p>
            )}
          </div>
*/
          {/* Itinerary */}
          /*
          <div className="tour-itinerary-section">
            <h2>Detailed Itinerary</h2>

            {selectedTour.itinerary ? (
              selectedTour.itinerary.map((item, idx) => (
                <div key={idx} className="itinerary-day">
                  <h3>{item.day}</h3>

                  {item.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}

                  {item.images?.length > 0 && (
                    <div className="itinerary-images">
                      {item.images.map((img, j) => (
                        <img key={j} src={img} alt="" />
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>Itinerary details will be updated.</p>
            )}
          </div>
        </div>
         */
        {/* RIGHT SIDE (INFORMATION BOX) */}
        /*
        <div className="tour-detail-right">*/

  {/* BOX THÔNG TIN */}
  /*
        <div className="tour-info-wrapper">
          <h2>{selectedTour.tour_name}</h2>

        <div className="tour-info-row">
          <b>Tour ID:</b> <span>{selectedTour.id}</span>
        </div>
        <div className="tour-info-row">
          <b>Duration:</b> <span>{selectedTour.period}</span>
        </div>
        <div className="tour-info-row">
          <b>Departure:</b> <span>{selectedTour.departure_dates || "Updating..."}</span>
        </div>
        <div className="tour-info-row">
          <b>Transport:</b> <span>{selectedTour.transport || "Updating..."}</span>
        </div>
        <div className="tour-info-row">
          <b>From:</b> <span>Ho Chi Minh City</span>
        </div>
        </div>
*/
  {/* BOX GIÁ */}
  /*
  <div className="price-box">
    <span>Price:</span>
    <div className="price-value">{selectedTour.price}</div>
  </div>
*/
  {/* TRẢI NGHIỆM */}
  /*
  <div className="experience-box">
    <p><b>Experience:</b></p>
    <ul>
      <li>Conquer Ma Pi Leng Pass</li>
      <li>Check-in Nho Que River</li>
      <li>Local cuisine experience in Dong Van</li>
    </ul>
  </div>
*/
  {/* NGÀY */}
  /*
  <input
    type="text"
    placeholder="16-11-2025"
    className="date-input"
    readOnly
  />
*/
  {/* BUTTON */}
  /*
  <button className="book-btn" onClick={handleBookClick}>
     BOOK TOUR NOW
  </button>


</div>

      </div>
*/
      {/* POPUP LOGIN */}
 /*     {showLogin && (
        <LoginPopup
          setShowLogin={setShowLogin}
          setUser={(u) => {
            setUser(u);               
            setShowBooking(true);     
          }}
        />
      )}
*/
      {/* POPUP BOOKING */}
  /*    {showBooking && (
        <BookingPopup
          setShowBooking={setShowBooking}
          selectedTour={selectedTour}
          user={user}
        />
      )}

    </div>
  )
}

export default TourDetail
*/

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context-store/AuthContext";
import LoginPopup from "../../components/LoginPopup/LoginPopup";

import "./TourDetail.css";

// 👉 Tính số ngày tour
const calcPeriod = (start, end) => {
  if (!start || !end) return "Updating...";
  const s = new Date(start);
  const e = new Date(end);
  const diff = Math.ceil((e - s) / (1000 * 3600 * 24));
  return `${diff} days`;
};

const formatDate = (dateStr) => {
  if (!dateStr) return "Updating...";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB");  // 25/11/2025
};

const TourDetail = () => {
  const { id } = useParams();              // ✅ SỬA ĐÚNG
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  // ⭐ Load tour từ backend
  useEffect(() => {
    const loadTour = async () => {
      try {
        const res = await fetch(`http://localhost:8081/api/tours/${id}`); // ✅ SỬA
        const data = await res.json();

        if (!data || !data.tour_id) {
          setTour(null);
        } else {
          setTour({
            id: data.tour_id,
            tour_name: data.tour_name,
            image_url: data.image_url
              ? `http://localhost:8081${data.image_url}`
              : "/fallback.jpg",
            description: data.description || "No description available.",
            location: data.location || "Updating...",
            start_date: formatDate(data.start_date),
            end_date: formatDate(data.end_date),
            period: calcPeriod(data.start_date, data.end_date),
            price: data.price,
            available_slots: data.available_slots,
          });
        }
      } catch (err) {
        console.error("Error fetching tour:", err);
      } finally {
        setLoading(false);
      }
    };

    loadTour();
  }, [id]); // ✅ Theo dõi param id

  if (loading)
    return <h2 style={{ textAlign: "center", marginTop: 50 }}>Loading...</h2>;

  if (!tour)
    return <h2 style={{ textAlign: "center", marginTop: 50 }}>Tour not found</h2>;

  // ⭐ BOOK button
  const handleBookClick = () => {
    if (!user) {
      setShowLogin(true);
    } else {
      navigate(`/book-tour/${tour.id}`);
    }
  };

  return (
    <div className="tour-detail-container">
      <h1 className="tour-detail-title">{tour.tour_name}</h1>

      <div className="tour-detail-content">

        {/* LEFT */}
        <div className="tour-detail-left">
          <img
            src={tour.image_url}
            alt={tour.tour_name}
            className="tour-detail-image"
            onError={(e) => (e.target.src = "/fallback.jpg")}
          />

          <div className="tour-highlight-section">
            <h2>Tour Overview</h2>

            <div className="tour-highlight-table">
              <p><strong>Location:</strong> {tour.location}</p>
              <p><strong>Start Date:</strong> {tour.start_date}</p>
              <p><strong>End Date:</strong> {tour.end_date}</p>
              <p><strong>Duration:</strong> {tour.period}</p>
              <p><strong>Available Slots:</strong> {tour.available_slots}</p>
            </div>

            <p className="tour-detail-description">{tour.description}</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="tour-detail-right">
          <div className="tour-info-wrapper">
            <h2>{tour.tour_name}</h2>

            <div className="tour-info-row">
              <b>Tour ID:</b> <span>{tour.id}</span>
            </div>
            <div className="tour-info-row">
              <b>Duration:</b> <span>{tour.period}</span>
            </div>
            <div className="tour-info-row">
              <b>Start:</b> <span>{tour.start_date}</span>
            </div>
            <div className="tour-info-row">
              <b>End:</b> <span>{tour.end_date}</span>
            </div>
            <div className="tour-info-row">
              <b>Location:</b> <span>{tour.location}</span>
            </div>
          </div>

          <div className="price-box">
            <span>Price:</span>
            <div className="price-value">{tour.price}</div>
          </div>

          <button className="book-btn" onClick={handleBookClick}>
            BOOK TOUR NOW
          </button>
        </div>
      </div>

      {/* POPUP LOGIN */}
      {showLogin && (
        <LoginPopup
          setShowLogin={setShowLogin}
          setUser={(u) => {
            setUser(u);
            navigate(`/book-tour/${tour.id}`);
          }}
        />
      )}
    </div>
  );
};

export default TourDetail;
