const db = require("../db");

exports.createPayment = (req, res) => {
  const { booking_id, amount, payment_method } = req.body;
  const sql = `
    INSERT INTO payments (booking_id, amount, payment_method)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [booking_id, amount, payment_method], (err, result) => {
    if (err) return res.status(500).json({ message: "Error creating payment" });
    const updateBooking = "UPDATE bookings SET status='paid' WHERE booking_id=?";
    db.query(updateBooking, [booking_id]);
    res.json({ message: "Payment successful", payment_id: result.insertId });
  });
};

exports.getPayments = (req, res) => {
  const sql = `
    SELECT p.*, b.user_id, t.name AS tour_name
    FROM payments p
    JOIN bookings b ON p.booking_id = b.booking_id
    JOIN tours t ON b.tour_id = t.tour_id
  `;
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ message: "Error fetching payments" });
    res.json(data);
  });
};
