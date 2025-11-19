
import React, { useContext, useEffect, useState, useRef } from "react";
import "./Tour.css";
import RegionSelector from "../../components/region/RegionSelector";
import { StoreContext } from "../../context-store/StoreContext";
import { Link } from "react-router-dom";

const Tour = () => {
  const { region } = useContext(StoreContext);
  const regionSectionRef = useRef(null);
  const [dbTours, setDbTours] = useState([]);

  // Map region_id → region name
  const regionMapDB = {
    1: "North",
    2: "Central",
    3: "South"
  };

  // TÍNH SỐ NGÀY
  const calcPeriod = (s, e) => {
    if (!s || !e) return "Updating...";
    const start = new Date(s);
    const end = new Date(e);
    return Math.ceil((end - start) / (1000 * 3600 * 24)) + " days";
  };
  const formatDate = (dateStr) => {
  if (!dateStr) return "Updating...";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB");  // 25/11/2025
};

  // Chuẩn hóa tour từ DB
  const normalizeTour = (t) => ({
    id: t.tour_id,
    tour_name: t.tour_name,
    image_url: t.image_url ? `http://localhost:8081${t.image_url}` : null,
    start_date: formatDate(t.start_date),
    end_date: formatDate(t.end_date),
    period: calcPeriod(t.start_date, t.end_date),
    price: t.price,
    region_name: regionMapDB[t.region_id], // ⭐ GIẢI QUYẾT LỖI LỌC REGION
    available_slots: t.available_slots
  });

  // Lấy tour backend
  useEffect(() => {
    fetch("http://localhost:8081/api/tours")
      .then((res) => res.json())
      .then((data) => {
        const approved = data.filter(
          (t) => t.status?.toLowerCase() === "approved"
        );
        setDbTours(approved.map(normalizeTour));
      })
      .catch((err) => console.error(err));
  }, []);

  // ⭐ HOT Tours = 4 tour đầu tiên
  const hotTours = dbTours.slice(0, 4);

  // ⭐ Education Tours = region CENTRAL
  const eduTours = dbTours.filter((t) => t.region_name === "Central");

  // ⭐ Lọc theo region người dùng chọn
  const filteredRegionTours =
    region === "All"
      ? []
      : dbTours.filter((t) => t.region_name === region);

  // Scroll khi đổi region
  useEffect(() => {
    if (region !== "All" && regionSectionRef.current) {
      regionSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [region]);

  return (
    <>
      <div className="explore-tour">
        <h1>Explore Tour</h1>

        <RegionSelector />

        {/* HOT TOURS */}
        <h2>Tour hot in all season !!!</h2>
        <div className="explore-tour-list">
          {hotTours.map((t, i) => (
            <div key={i} className="explore-tour-item">
              <img src={t.image_url} alt={t.tour_name} />

              <h3>{t.tour_name}</h3>
              <p>Start Date: {t.start_date}</p>
              <p>Period: {t.period}</p>
              <p>Slot: {t.available_slots}</p>

              <div className="tour-price-row">
                <p className="tour-price">{t.price}$</p>
                <Link to={`/tour-details/${t.id}`}>
                  <button className="view-details-btn">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* EDUCATION TOURS */}
        <h2>Tour with education</h2>
        <div className="explore-tour-list">
          {eduTours.length === 0 ? (
            <p>No education tours available.</p>
          ) : (
            eduTours.map((t, i) => (
              <div key={i} className="explore-tour-item">
                <img src={t.image_url} alt={t.tour_name} />

                <h3>{t.tour_name}</h3>
                <p>Start Date: {t.start_date}</p>
                <p>Period: {t.period}</p>
                <p>Slot: {t.available_slots}</p>

                <div className="tour-price-row">
                  <p className="tour-price">{t.price}$</p>
                  <Link to={`/tour-details/${t.id}`}>
                    <button className="view-details-btn">View Details</button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* REGION FILTERED TOURS */}
      {region !== "All" && (
        <div className="main-region-tour" ref={regionSectionRef}>
          <h2>Tour in {region}</h2>

          <div className="main-tour-list">
            {filteredRegionTours.length === 0 ? (
              <p>No tours available in this region.</p>
            ) : (
              filteredRegionTours.map((t, i) => (
                <div key={i} className="main-tour-item">
                  <img src={t.image_url} alt={t.tour_name} />

                  <h3>{t.tour_name}</h3>
                  <p>Start Date: {t.start_date}</p>
                  <p>Period: {t.period}</p>
                  <p>Slot: {t.available_slots}</p>

                  <div className="tour-price-row">
                    <p className="tour-price">{t.price}$</p>
                    <Link to={`/tour-details/${t.id}`}>
                      <button className="view-details-btn">View Details</button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Tour;
