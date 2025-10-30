const db = require("../db");
const path = require("path");

exports.getAllTours = (req, res) => {
  const { created_by, role } = req.query;

  let sql = "SELECT * FROM tours";
  const params = [];

  if (role === "partner") {
  sql += " WHERE created_by = ?";
  params.push(created_by);
}

db.query(sql, params, (err, result) => {
  if (err) {
    console.error("❌ Query error:", err);
    return res.status(500).json({ error: err });
  }
  res.json(result);
});
}





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

// ===============================
// 📌 Tạo tour mới (có upload ảnh)
// ===============================
exports.createTour = (req, res) => {
  const {
    tour_name,
    description,
    location,
    region_id,
    category_id,
    start_date,
    end_date,
    price,
    available_slots,
    created_by,
    role, // 👈 thêm dòng này
  } = req.body;

  const image_url = req.file ? `/uploads/tours/${req.file.filename}` : null;

  // ✅ Nếu admin tạo tour thì duyệt luôn, partner thì chờ duyệt
  const status = role === "admin" ? "approved" : "pending";

  const sql = `
    INSERT INTO tours (tour_name, description, location, region_id, category_id,
                       start_date, end_date, price, available_slots, created_by, image_url, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [tour_name, description, location, region_id, category_id, start_date, end_date, price, available_slots, created_by, image_url, status],
    (err) => {
      if (err) {
        console.error("❌ Error inserting tour:", err);
        return res.status(500).json({ error: err });
      }
      res.json({ message: "Tour created successfully!" });
    }
  );
};

// ===============================
// 📌 Cập nhật tour (có thể thay ảnh)
// ===============================
exports.updateTour = (req, res) => {
  const { tour_id } = req.params;
  const data = req.body;

  // Nếu có file ảnh mới, cập nhật thêm image_url
  if (req.file) {
    data.image_url = `/uploads/tours/${req.file.filename}`;
  }

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

