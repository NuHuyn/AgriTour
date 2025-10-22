const db = require("../db");

exports.createBooking = (req, res) => {
  const { user_id, tour_id, quantity } = req.body;
  const sql = `
    INSERT INTO bookings (user_id, tour_id, quantity, status)
    VALUES (?, ?, ?, 'pending')
  `;
  db.query(sql, [user_id, tour_id, quantity], (err, result) => {
    if (err) return res.status(500).json({ message: "Error creating booking" });
    res.json({ message: "Booking created", booking_id: result.insertId });
  });
};

exports.getBookingsByUser = (req, res) => {
  const user_id = req.params.user_id;
  const sql = `
    SELECT b.*, t.name AS tour_name, t.price AS tour_price
    FROM bookings b
    JOIN tours t ON b.tour_id = t.tour_id
    WHERE b.user_id = ?
  `;
  db.query(sql, [user_id], (err, data) => {
    if (err) return res.status(500).json({ message: "Error fetching bookings" });
    res.json(data);
  });
};

exports.cancelBooking = (req, res) => {
  const id = req.params.id;
  const sql = "UPDATE bookings SET status='cancelled' WHERE booking_id = ?";
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ message: "Error cancelling booking" });
    res.json({ message: "Booking cancelled" });
  });
};
