const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");

// === Public routes ===

// Lấy tất cả tour
router.get("/", tourController.getAllTours);

// Lọc tour theo region hoặc category (phải đặt trước route :id)
// Lọc tour theo region
exports.getToursByRegion = (req, res) => {
  const { region_id } = req.params;
  const sql = `
    SELECT t.*, r.region_name, c.category_name
    FROM tours t
    LEFT JOIN regions r ON t.region_id = r.region_id
    LEFT JOIN categories c ON t.category_id = c.category_id
    WHERE t.region_id = ?
  `;
  db.query(sql, [region_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

// Lọc tour theo category
exports.getToursByCategory = (req, res) => {
  const { category_id } = req.params;
  const sql = `
    SELECT t.*, r.region_name, c.category_name
    FROM tours t
    LEFT JOIN regions r ON t.region_id = r.region_id
    LEFT JOIN categories c ON t.category_id = c.category_id
    WHERE t.category_id = ?
  `;
  db.query(sql, [category_id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};


// Lấy tour theo ID
router.get("/:tour_id", tourController.getTourById);

// === Partner/Admin routes ===

// Tạo tour (partner hoặc admin)
router.post("/", tourController.createTour);

// Cập nhật tour (partner hoặc admin)
router.put("/:tour_id", tourController.updateTour);

// Admin duyệt hoặc từ chối tour
router.put("/:tour_id/approve", tourController.approveTour);

// Xóa tour (chỉ admin)
router.delete("/:tour_id", tourController.deleteTour);

module.exports = router;
