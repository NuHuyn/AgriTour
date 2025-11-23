import React from "react";
import { useNavigate } from "react-router-dom";
import "./PromoSection.css";

// lấy data giống trang Tour
import { tour, list_tour_1, list_tour_2 } from "../../assets/assets";

const PromoSection = () => {
  const navigate = useNavigate();

  // Combine all tour lists
  const allTours = [...tour, ...list_tour_1, ...list_tour_2];

  // Select first 4 tours as promotion tours
  const promoTours = allTours.slice(0, 4);

  return (
    <div className="promo-wrapper">
      <h1 className="promo-title">SPECIAL PROMOTION TOURS</h1>

      <div className="promo-tour-list">
        {promoTours.map((t, index) => (
          <div className="promo-tour-card" key={t.id || index}>
            <div className="promo-img-box">
              <img src={t.tour_image} alt={t.tour_name} />
              <span className="promo-badge">Promotion</span>
            </div>

            <div className="promo-info">
              <h3>{t.tour_name}</h3>
              <p><strong>Start Date:</strong> {t.start_date}</p>
              <p><strong>Period:</strong> {t.period}</p>
              <p className="promo-price">{t.price}</p>

              <button
                onClick={() => navigate(`/tour-details/${t.id}`)}
                className="promo-detail-btn"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All button */}
      <div className="promo-viewall">
        <button onClick={() => navigate("/tour")}>View All</button>
      </div>

      {/* Banner section */}
      <div className="promo-banner">
        <img
          src="https://images.unsplash.com/photo-1579613259121-29683cd01432?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Explore Banner"
        />

        <div className="promo-banner-content">
          <h2>One Tap – All Services You Need!</h2>
          <button onClick={() => navigate("/tour")}>
            Let's Explore Right Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
