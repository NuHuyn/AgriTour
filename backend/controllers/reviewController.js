const db = require("../db");

// 🧩 Add review
exports.createReview = (req, res) => {
  const { user_id, tour_id, rating, comment } = req.body;
  const sql = `
    INSERT INTO reviews (user_id, tour_id, rating, comment)
    VALUES (?, ?, ?, ?)
  `;
  db.query(sql, [user_id, tour_id, rating, comment], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Review added successfully!" });
  });
};

// 🧩 Get reviews for a tour
exports.getReviewsByTour = (req, res) => {
  const { tour_id } = req.params;
  const sql = `
    SELECT r.*, u.full_name
    FROM reviews r
    JOIN users u ON r.user_id = u.user_id
    WHERE tour_id = ?
  `;
  db.query(sql, [tour_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};
