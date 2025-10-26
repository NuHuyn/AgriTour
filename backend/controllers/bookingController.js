const db = require("../db");

// 🧩 Create booking (customer)
exports.createBooking = (req, res) => {
  const { user_id, tour_id, num_people, total_price } = req.body;
  const sql = `
    INSERT INTO bookings (user_id, tour_id, num_people, total_price, status)
    VALUES (?, ?, ?, ?, 'pending')
  `;
  db.query(sql, [user_id, tour_id, num_people, total_price], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Booking created successfully!" });
  });
};

// 🧩 Update booking (only if unpaid)
exports.updateBooking = (req, res) => {
  const { booking_id } = req.params;
  const { num_people, total_price } = req.body;
  const check = `SELECT status FROM bookings WHERE booking_id = ?`;

  db.query(check, [booking_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result.length) return res.status(404).json({ message: "Booking not found" });
    if (result[0].status === "confirmed")
      return res.status(400).json({ message: "Cannot update after payment" });

    const update = `UPDATE bookings SET num_people = ?, total_price = ? WHERE booking_id = ?`;
    db.query(update, [num_people, total_price, booking_id], (err2) => {
      if (err2) return res.status(500).json({ error: err2 });
      res.json({ message: "Booking updated successfully!" });
    });
  });
};

// 🧩 Delete booking (only if unpaid)
exports.deleteBooking = (req, res) => {
  const { booking_id } = req.params;
  const check = `SELECT status FROM bookings WHERE booking_id = ?`;

  db.query(check, [booking_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result.length) return res.status(404).json({ message: "Booking not found" });
    if (result[0].status === "confirmed")
      return res.status(400).json({ message: "Cannot delete after payment" });

    db.query(`DELETE FROM bookings WHERE booking_id = ?`, [booking_id], (err2) => {
      if (err2) return res.status(500).json({ error: err2 });
      res.json({ message: "Booking deleted successfully!" });
    });
  });
};

// 🧩 Get bookings by user
exports.getBookingsByUser = (req, res) => {
  const { user_id } = req.params;
  const sql = `
    SELECT b.*, t.tour_name
    FROM bookings b
    JOIN tours t ON b.tour_id = t.tour_id
    WHERE b.user_id = ?
  `;
  db.query(sql, [user_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};
