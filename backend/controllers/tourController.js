const db = require("../db");

exports.getAllTours = (req, res) => {
  const sql = `
    SELECT t.*, r.name AS region_name, u.full_name AS created_by_name
    FROM tours t
    LEFT JOIN regions r ON t.region_id = r.region_id
    LEFT JOIN users u ON t.created_by = u.user_id
  `;
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ message: "Error fetching tours" });
    res.json(data);
  });
};

exports.createTour = (req, res) => {
  const { name, description, price, start_date, end_date, region_id, image_url, available_slots, created_by } = req.body;

  const sql = `
    INSERT INTO tours (name, description, price, start_date, end_date, region_id, image_url, available_slots, created_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [name, description, price, start_date, end_date, region_id, image_url, available_slots, created_by], (err, result) => {
    if (err) return res.status(500).json({ message: "Error creating tour" });
    res.json({ message: "Tour created successfully", tour_id: result.insertId });
  });
};

exports.updateTour = (req, res) => {
  const id = req.params.id;
  const { name, description, price, start_date, end_date, region_id, image_url, available_slots } = req.body;

  const sql = `
    UPDATE tours
    SET name=?, description=?, price=?, start_date=?, end_date=?, region_id=?, image_url=?, available_slots=?
    WHERE tour_id=?
  `;
  db.query(sql, [name, description, price, start_date, end_date, region_id, image_url, available_slots, id], (err) => {
    if (err) return res.status(500).json({ message: "Error updating tour" });
    res.json({ message: "Tour updated successfully" });
  });
};

exports.deleteTour = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM tours WHERE tour_id = ?";
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ message: "Error deleting tour" });
    res.json({ message: "Tour deleted successfully" });
  });
};
