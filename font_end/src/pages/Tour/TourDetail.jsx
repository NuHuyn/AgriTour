import React,{useState,useContext} from "react";
import { useParams } from "react-router-dom";
import { tour, list_tour_1, list_tour_2 } from "../../assets/assets";
import { tour_full_sample_list } from "../../assets/tour_sample_full";
import { useAuth } from "../../context-store/AuthContext";
import LoginPopup from "../../components/LoginPopup/LoginPopup";
import BookingPopup from "../../components/BookingPopup/BookingPopup";
import './TourDetail.css'
const TourDetail = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

// lấy user từ Context
  const { user, setUser } = useAuth();


  const { id } = useParams();

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
    // ❌ Chưa login → bật popup login
    setShowLogin(true);
  } else {
    // ✔ Đã login → mở popup booking
    setShowBooking(true);
  }
};



  return (
    <div className="tour-detail-container">

      <h1 className="tour-detail-title">{selectedTour.tour_name}</h1>

      <div className="tour-detail-content">
        {/* LEFT */}
        <div className="tour-detail-left">
          <img
            src={selectedTour.tour_image}
            alt={selectedTour.tour_name}
            className="tour-detail-image"
          />

          {/* Journey Highlights */}
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

          {/* Itinerary */}
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
         
        {/* RIGHT SIDE (INFORMATION BOX) */}
        <div className="tour-detail-right">

  {/* BOX THÔNG TIN */}
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

  {/* BOX GIÁ */}
  <div className="price-box">
    <span>Price:</span>
    <div className="price-value">{selectedTour.price}</div>
  </div>

  {/* TRẢI NGHIỆM */}
  <div className="experience-box">
    <p><b>Experience:</b></p>
    <ul>
      <li>Conquer Ma Pi Leng Pass</li>
      <li>Check-in Nho Que River</li>
      <li>Local cuisine experience in Dong Van</li>
    </ul>
  </div>

  {/* NGÀY */}
  <input
    type="text"
    placeholder="16-11-2025"
    className="date-input"
    readOnly
  />

  {/* BUTTON */}
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
            setShowBooking(true);     
          }}
        />
      )}

      {/* POPUP BOOKING */}
      {showBooking && (
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
