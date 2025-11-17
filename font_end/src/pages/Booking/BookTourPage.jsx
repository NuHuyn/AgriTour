import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { tour_full_sample_list } from "../../assets/tour_sample_full";
import {parsePrice, formatPrice, calcPriceFromBase} from "../../components/Utils/priceUtils";
import { useCart } from "../../context-store/CartContext";


import './BookTourPage.css';
const BookTourPage = () => {
   const { id } = useParams();
  const navigate = useNavigate();
  const selectedTour = tour_full_sample_list.find((t) => t.id === parseInt(id));
  if (!selectedTour) return <h2 style={{ textAlign: "center", marginTop: 60 }}>Tour not found</h2>;

  // --- default fees (if tour provides, use those; else fallback) ---
  const basePriceRaw = parsePrice(selectedTour.price);
  const baseFees = {
    visaFee: selectedTour.visa_fee ?? 690000, // fallback sample
    singleRoomFee: selectedTour.single_room_fee ?? 1600000,
  };
  
  const { addBookingToCart } = useCart();
  // --- form state ---
  const [qtyAdult, setQtyAdult] = useState(1);
  const [qtyChild, setQtyChild] = useState(0);
  const [qtySmallChild, setQtySmallChild] = useState(0);
  const [qtyInfant, setQtyInfant] = useState(0);

  const [visaOption, setVisaOption] = useState("none"); // none / visa
  const [visaCount, setVisaCount] = useState(0);

  const [singleRoomOption, setSingleRoomOption] = useState("no"); // no / yes
  const [singleRoomCount, setSingleRoomCount] = useState(0);

  const [paymentMethod, setPaymentMethod] = useState("counter"); // default

  // --- derived price table ---
  const priceTable = useMemo(() => calcPriceFromBase(basePriceRaw), [basePriceRaw]);

  // --- compute totals ---
  const subtotalPeople = useMemo(() => {
    const adultTotal = qtyAdult * priceTable.adult;
    const childTotal = qtyChild * priceTable.child;
    const smallChildTotal = qtySmallChild * priceTable.smallChild;
    const infantTotal = qtyInfant * priceTable.infant; // usually 0
    return adultTotal + childTotal + smallChildTotal + infantTotal;
  }, [qtyAdult, qtyChild, qtySmallChild, qtyInfant, priceTable]);

  const visaTotal = useMemo(() => {
    if (visaOption === "visa") return visaCount * baseFees.visaFee;
    return 0;
  }, [visaOption, visaCount, baseFees.visaFee]);

  const singleRoomTotal = useMemo(() => {
    if (singleRoomOption === "yes") return singleRoomCount * baseFees.singleRoomFee;
    return 0;
  }, [singleRoomOption, singleRoomCount, baseFees.singleRoomFee]);

  const grandTotal = useMemo(() => subtotalPeople + visaTotal + singleRoomTotal, [subtotalPeople, visaTotal, singleRoomTotal]);

  // --- handlers to keep values non-negative integers ---
  const clampInt = (v, min = 0) => Math.max(min, parseInt(v || 0, 10));

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

    return (
    <div className="book-tour-container">

      {/* HEADER */}
      <div className="tour-header-wrapper">
        <div className="tour-header-image">
          <img src={selectedTour.tour_image} alt={selectedTour.tour_name} />
        </div>

        <div className="tour-header-info">
          <h1 className="tour-title">{selectedTour.tour_name}</h1>

          <div className="info-grid">
            <p><span>Tour ID:</span> {selectedTour.id}</p>
            <p><span>Duration:</span> {selectedTour.period}</p>
            <p><span>Price:</span> {formatPrice(basePriceRaw)} / person</p>
            <p><span>Start Date:</span> {selectedTour.start_date}</p>
            <p><span>Departure:</span> Ho Chi Minh City</p>
            <p><span>Available Seats:</span> 10</p>
          </div>
        </div>
      </div>

      {/* PRICE TABLE */}
      <h2 className="section-title">DETAILED TOUR PRICING</h2>

      <table className="price-table">
        <thead>
          <tr>
            <th>Price Type / Age</th>
            <th>Adult (≥ 11y)</th>
            <th>Child (5–11y)</th>
            <th>Small Child (2–5y)</th>
            <th>Infant (&lt;2y)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Price</td>
            <td>{formatPrice(priceTable.adult)}</td>
            <td>{formatPrice(priceTable.child)}</td>
            <td>{formatPrice(priceTable.smallChild)}</td>
            <td>{formatPrice(priceTable.infant)}</td>
          </tr>

          <tr>
            <td>Notes</td>
            <td>Standard price</td>
            <td>60% of adult price</td>
            <td>30% of adult price</td>
            <td>Free (must travel with an adult)</td>
          </tr>
        </tbody>
      </table>

      {/* CONTACT INFO */}
      <div className="contact-section">
        <h2 className="form-title">
          <i className="fa fa-info-circle"></i> CONTACT INFORMATION
        </h2>

        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input 
               type="text" 
               placeholder="Full Name" 
               value={fullName}
               onChange={(e) => setFullName(e.target.value)}
            />

          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label>Address *</label>
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
             />
          </div>

          <div className="form-group full-width">
            <label>Notes</label>
            <textarea
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* PASSENGER INFO */}
      <div className="quantity-section">
        <h2 className="form-title">
          <i className="fa fa-users"></i> PASSENGER INFORMATION
        </h2>

        <div className="form-row">
          <div className="form-group">
            <label>Adults</label>
            <input
              type="number"
              min="1"
              value={qtyAdult}
              onChange={(e) => setQtyAdult(clampInt(e.target.value, 1))}
            />
          </div>

          <div className="form-group">
            <label>Children (5–11y)</label>
            <input
              type="number"
              min="0"
              value={qtyChild}
              onChange={(e) => setQtyChild(clampInt(e.target.value, 0))}
            />
          </div>

          <div className="form-group">
            <label>Small Children (2–5y)</label>
            <input
              type="number"
              min="0"
              value={qtySmallChild}
              onChange={(e) => setQtySmallChild(clampInt(e.target.value, 0))}
            />
          </div>

          <div className="form-group">
            <label>Infants (&lt;2y)</label>
            <input
              type="number"
              min="0"
              value={qtyInfant}
              onChange={(e) => setQtyInfant(clampInt(e.target.value, 0))}
            />
          </div>
        </div>
      </div>

      {/* TOTAL PRICE */}
      <div className="total-section">
        <span>Total Amount: </span>
        <b className="total-price">{formatPrice(grandTotal)}</b>
      </div>

      {/* PAYMENT METHODS */}
      <h2 className="section-title">PAYMENT METHODS</h2>

      <div className="payment-options">
        <label className="payment-item">
          <input
            type="radio"
            name="pay"
            checked={paymentMethod === "transfer"}
            onChange={() => setPaymentMethod("transfer")}
          />
          Bank Transfer
        </label>

        <label className="payment-item">
          <input
            type="radio"
            name="pay"
            checked={paymentMethod === "zalopay"}
            onChange={() => setPaymentMethod("zalopay")}
          />
          ZaloPay
        </label>

        <label className="payment-item">
          <input
            type="radio"
            name="pay"
            checked={paymentMethod === "vnpay"}
            onChange={() => setPaymentMethod("vnpay")}
          />
          VNPAY
        </label>

        <label className="payment-item">
          <input
            type="radio"
            name="pay"
            checked={paymentMethod === "momo"}
            onChange={() => setPaymentMethod("momo")}
          />
          MoMo
        </label>
      </div>

           <button
  className="confirm-btn"
  onClick={() => {
    const bookingData = {
      tempId: Date.now(), // ID tạm để phân biệt giữa các booking
      tour: selectedTour,
      customer: {
        fullName,
        email,
        phone,
        address,
        notes
      },
      passengers: {
        adults: qtyAdult,
        children: qtyChild,
        smallChildren: qtySmallChild,
        infants: qtyInfant
      },
      paymentMethod,
      totalAmount: grandTotal
    };

    // 👉 LƯU VÀO GIỎ HÀNG
    addBookingToCart(bookingData);

    // 👉 CHUYỂN ĐẾN CONFIRM PAGE
    navigate("/confirm-booking", {
      state: bookingData
    });
  }}
>
  COMPLETE BOOKING
</button>

    </div>
  )
}

export default BookTourPage
