import React, { useState } from "react";
import "./RatingPopup.css";

const RatingPopup = ({ booking, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="rating-overlay" onClick={onClose}>
      <div className="rating-box" onClick={(e) => e.stopPropagation()}>

        <h2>Rate Your Tour</h2>
        <p className="tour-name">{booking.tour_name}</p>

        {/* ⭐⭐⭐⭐⭐ */}
        <div className="stars">
          {[1,2,3,4,5].map((n) => (
            <span
              key={n}
              className={`star ${rating >= n ? "active" : ""}`}
              onClick={() => setRating(n)}
            >★</span>
          ))}
        </div>

        {/* Comment */}
        <textarea
          className="rating-textarea"
          placeholder="Share your experience..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <div className="rating-actions">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>

          <button
            className="submit-btn"
            onClick={() => onSubmit({ rating, comment })}
          >
            Submit Review
          </button>
        </div>

      </div>
    </div>
  )
}

export default RatingPopup
