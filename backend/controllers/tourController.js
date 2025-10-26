/*const db = require("../db");

// 🧩 Create tour (partner or admin)
exports.createTour = (req, res) => {
  const {
    tour_name, description, location, region_id, category_id,
    start_date, end_date, price, available_slots, image_url, created_by
  } = req.body;

  const sql = `
    INSERT INTO tours (tour_name, description, location, region_id, category_id,
                       start_date, end_date, price, available_slots, image_url, created_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [tour_name, description, location, region_id, category_id,
                 start_date, end_date, price, available_slots, image_url, created_by],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Tour submitted for approval." });
    });
};

// 🧩 Approve / reject tour (admin)
exports.approveTour = (req, res) => {
  const { tour_id, admin_id, action, note } = req.body;
  const sql1 = "UPDATE tours SET status = ? WHERE tour_id = ?";
  const sql2 = `
    INSERT INTO tour_approval_logs (tour_id, admin_id, action, note)
    VALUES (?, ?, ?, ?)
  `;

  db.beginTransaction((err) => {
    if (err) return res.status(500).json({ error: err });
    db.query(sql1, [action, tour_id], (err1) => {
      if (err1) return db.rollback(() => res.status(500).json({ error: err1 }));
      db.query(sql2, [tour_id, admin_id, action, note], (err2) => {
        if (err2) return db.rollback(() => res.status(500).json({ error: err2 }));
        db.commit(() => res.json({ message: `Tour ${action} successfully.` }));
      });
    });
  });
};

// 🧩 Get all tours (public)
exports.getAllTours = (req, res) => {
  const sql = `
    SELECT t.*, u.full_name AS creator_name, c.category_name, r.region_name
    FROM tours t
    LEFT JOIN users u ON t.created_by = u.user_id
    LEFT JOIN categories c ON t.category_id = c.category_id
    LEFT JOIN regions r ON t.region_id = r.region_id
  `;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};
*/
// controllers/tourController.js
const db = require("../db");

// Lấy tất cả tour
exports.getAllTours = (req, res) => {
  db.query("SELECT * FROM tours", (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

// Lấy tour theo ID
exports.getTourById = (req, res) => {
  const { tour_id } = req.params;
  db.query("SELECT * FROM tours WHERE tour_id = ?", [tour_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0) return res.status(404).json({ message: "Tour not found" });
    res.json(result[0]);
  });
};

// Lọc tour theo region
exports.getToursByRegion = (req, res) => {
  const { region_id } = req.params;
  db.query("SELECT * FROM tours WHERE region_id = ?", [region_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

// Lọc tour theo category
exports.getToursByCategory = (req, res) => {
  const { category_id } = req.params;
  db.query("SELECT * FROM tours WHERE category_id = ?", [category_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

// Tạo tour
exports.createTour = (req, res) => {
  const { tour_name, description, location, region_id, category_id, start_date, end_date, price, available_slots, created_by } = req.body;
  const sql = `
    INSERT INTO tours (tour_name, description, location, region_id, category_id, start_date, end_date, price, available_slots, created_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [tour_name, description, location, region_id, category_id, start_date, end_date, price, available_slots, created_by], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Tour created successfully!" });
  });
};

// Cập nhật tour
exports.updateTour = (req, res) => {
  const { tour_id } = req.params;
  const data = req.body;
  db.query("UPDATE tours SET ? WHERE tour_id = ?", [data, tour_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Tour updated successfully!" });
  });
};

// Duyệt tour
exports.approveTour = (req, res) => {
  const { tour_id } = req.params;
  const { status } = req.body; // 'approved' hoặc 'rejected'
  db.query("UPDATE tours SET status = ? WHERE tour_id = ?", [status, tour_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: `Tour ${status} successfully!` });
  });
};

// Xóa tour
exports.deleteTour = (req, res) => {
  const { tour_id } = req.params;
  db.query("DELETE FROM tours WHERE tour_id = ?", [tour_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Tour deleted successfully!" });
  });
};

