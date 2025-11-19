const db = require("../db");

// ===============================
// 📌 GET ALL TOURS (Public or Partner)
// ===============================
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
      console.error("❌ getAllTours error:", err);
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
};



// ===============================
// 📌 GET ALL TOURS (ADMIN)
// ===============================
exports.getAllToursForAdmin = (req, res) => {
  const sql = `
    SELECT 
      t.tour_id,
      t.tour_name,
      t.description,
      t.location,
      t.start_date,
      t.end_date,
      t.price,
      t.available_slots,
      t.status,
      t.image_url,

      u.full_name AS partner_name,
      r.region_name,
      c.category_name

    FROM tours t
    LEFT JOIN users u ON t.created_by = u.user_id
    LEFT JOIN regions r ON t.region_id = r.region_id
    LEFT JOIN categories c ON t.category_id = c.category_id
    ORDER BY t.tour_id DESC
  `;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error("❌ getAllToursForAdmin error:", err);
      return res.status(500).json({ error: err });
    }
    res.json(rows);
  });
};

// ===============================
// 📌 GET TOURS BY REGION
// ===============================
exports.getToursByRegion = (req, res) => {
  const { region_id } = req.params;

  db.query(
    "SELECT * FROM tours WHERE region_id = ?",
    [region_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json(result);
    }
  );
};

// ===============================
// 📌 GET TOURS BY CATEGORY
// ===============================
exports.getToursByCategory = (req, res) => {
  const { category_id } = req.params;

  db.query(
    "SELECT * FROM tours WHERE category_id = ?",
    [category_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json(result);
    }
  );
};


// ===============================
// 📌 CREATE TOUR (partner / admin)
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
    role
  } = req.body;

  const image_url = req.file ? `/uploads/tours/${req.file.filename}` : null;

  const status = role === "admin" ? "approved" : "pending";

  const sql = `
    INSERT INTO tours (
      tour_name, description, location, region_id, category_id,
      start_date, end_date, price, available_slots, created_by, 
      image_url, status
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
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
      image_url,
      status,
    ],
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
// 📌 UPDATE TOUR
// ===============================
exports.updateTour = (req, res) => {
  const { tour_id } = req.params;
  const data = req.body;

  if (req.file) {
    data.image_url = `/uploads/tours/${req.file.filename}`;
  }

  db.query("UPDATE tours SET ? WHERE tour_id = ?", [data, tour_id], (err) => {
    if (err) return res.status(500).json({ error: err });

    res.json({ message: "Tour updated successfully!" });
  });
};

// ===============================
// 📌 ADMIN APPROVE / REJECT TOUR
// ===============================
exports.reviewTour = (req, res) => {
  const { tour_id } = req.params;
  const { action, note, admin_id } = req.body;

  console.log("📌 reviewTour BODY:", req.body);
  console.log("📌 reviewTour PARAMS:", req.params);

  if (!["approved", "rejected"].includes(action)) {
    return res.status(400).json({ message: "Invalid action" });
  }

  if (!admin_id) {
    return res.status(400).json({ message: "Missing admin_id" });
  }

  // 1️⃣ Cập nhật trạng thái tour
  db.query(
    "UPDATE tours SET status = ? WHERE tour_id = ?",
    [action, tour_id],
    (err, result) => {
      if (err) {
        console.error("❌ UPDATE ERROR:", err);
        return res.status(500).json({ error: err });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Tour not found" });
      }

      // 2️⃣ Ghi log duyệt
      db.query(
        `INSERT INTO tour_approval_logs (tour_id, admin_id, action, note)
         VALUES (?, ?, ?, ?)`,
        [tour_id, admin_id, action, note || ""],
        (err2) => {
          if (err2) {
            console.error("❌ LOG INSERT ERROR:", err2);
            return res.status(500).json({ error: err2 });
          }

          res.json({ message: `Tour ${action} successfully` });
        }
      );
    }
  );
};

// ===============================
// 📌 DELETE TOUR
// ===============================
exports.deleteTour = (req, res) => {
  const { tour_id } = req.params;

  db.query("DELETE FROM tours WHERE tour_id = ?", [tour_id], (err) => {
    if (err) return res.status(500).json({ error: err });

    res.json({ message: "Tour deleted successfully!" });
  });
};

// ===============================
// 📌 GET TOUR BY ID
// ===============================
exports.getTourById = (req, res) => {
  const { tour_id } = req.params;

  db.query(
    "SELECT * FROM tours WHERE tour_id = ?",
    [tour_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      if (result.length === 0) {
        return res.status(404).json({ message: "Tour not found" });
      }

      res.json(result[0]);
    }
  );
};

