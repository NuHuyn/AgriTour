const db = require("../db");

// ===================================================
//  CREATE BOOKING (Customer creates booking)
// ===================================================
exports.createBooking = (req, res) => {
  const {
    user_id,
    tour_id,
    num_people,
    total_price,

    customer_name,
    email,
    phone,
    address,
    notes,

    adults,
    children,
    small_children,
    infants,

    visa_option,
    visa_count,
    single_room_option,
    single_room_count,

    payment_method
  } = req.body;

  // --- Validate ---
  if (!user_id || !tour_id || !num_people || !total_price) {
    return res.status(400).json({ message: "Missing required fields!" });
  }

  const sql = `
    INSERT INTO bookings (
      user_id, tour_id, booking_date,
      num_people, total_price, status,

      customer_name, email, phone, address, notes,
      adults, children, small_children, infants,
      visa_option, visa_count,
      single_room_option, single_room_count,
      payment_method
    )
    VALUES (?, ?, NOW(),
      ?, ?, 'pending',
      ?, ?, ?, ?, ?,
      ?, ?, ?, ?,
      ?, ?,
      ?, ?,
      ?
    )
  `;

  const params = [
    user_id, tour_id,
    num_people, total_price,

    customer_name, email, phone, address, notes,
    adults, children, small_children, infants,
    visa_option, visa_count,
    single_room_option, single_room_count,
    payment_method
  ];

  db.query(sql, params, (err, result) => {
    if (err) return res.status(500).json({ error: err });

    res.json({
      message: "Booking created successfully!",
      booking_id: result.insertId
    });
  });
};


// ===================================================
//  UPDATE BOOKING (only if NOT paid)
// ===================================================
exports.updateBooking = (req, res) => {
  const { booking_id } = req.params;

  const {
    num_people,
    total_price,

    customer_name,
    email,
    phone,
    address,
    notes,

    adults,
    children,
    small_children,
    infants,

    visa_option,
    visa_count,
    single_room_option,
    single_room_count,

    payment_method
  } = req.body;

  const check = `SELECT status FROM bookings WHERE booking_id = ?`;

  db.query(check, [booking_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    if (!result.length)
      return res.status(404).json({ message: "Booking not found" });

    if (result[0].status === "confirmed")
      return res.status(400).json({ message: "Cannot update after payment" });

    const sql = `
      UPDATE bookings SET
        num_people = ?, total_price = ?,
        customer_name = ?, email = ?, phone = ?, address = ?, notes = ?,
        adults = ?, children = ?, small_children = ?, infants = ?,
        visa_option = ?, visa_count = ?,
        single_room_option = ?, single_room_count = ?,
        payment_method = ?
      WHERE booking_id = ?
    `;

    const params = [
      num_people, total_price,
      customer_name, email, phone, address, notes,
      adults, children, small_children, infants,
      visa_option, visa_count,
      single_room_option, single_room_count,
      payment_method,
      booking_id
    ];

    db.query(sql, params, (err2) => {
      if (err2) return res.status(500).json({ error: err2 });

      res.json({ message: "Booking updated successfully!" });
    });
  });
};


// ===================================================
//  DELETE BOOKING (only if unpaid)
// ===================================================
exports.deleteBooking = (req, res) => {
  const { booking_id } = req.params;

  const check = `SELECT status FROM bookings WHERE booking_id = ?`;

  db.query(check, [booking_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    if (!result.length)
      return res.status(404).json({ message: "Booking not found" });

    if (result[0].status === "confirmed")
      return res.status(400).json({ message: "Cannot delete after payment" });

    db.query(`DELETE FROM bookings WHERE booking_id = ?`, [booking_id], (err2) => {
      if (err2) return res.status(500).json({ error: err2 });
      res.json({ message: "Booking deleted successfully!" });
    });
  });
};


// ===================================================
//  GET ALL BOOKINGS FOR A USER
// ===================================================
exports.getBookingsByUser = (req, res) => {
  const { user_id } = req.params;

  const sql = `
    SELECT 
      b.booking_id, 
      b.user_id, 
      b.tour_id,
      b.num_people,
      b.total_price,
      b.status,
      b.booking_date,

      b.customer_name,
      b.email,
      b.phone,
      b.address,
      b.notes,
      b.adults,
      b.children,
      b.small_children,
      b.infants,

      t.tour_name,
      t.image_url,
      t.start_date,
      t.end_date,
      t.price

    FROM bookings b
    JOIN tours t ON b.tour_id = t.tour_id
    WHERE b.user_id = ?
    ORDER BY b.booking_date DESC
  `;

  db.query(sql, [user_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    res.json(result);
  });
};

