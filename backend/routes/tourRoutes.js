const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");
const multer = require("multer");
const path = require("path");

//  Cấu hình nơi lưu ảnh
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "uploads", "tours"));
  },
  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// === Public routes ===

//  ĐƯA ROUTE NÀY LÊN TRÊN
router.get("/admin/all", tourController.getAllToursForAdmin);

// Lấy tất cả tour
router.get("/", tourController.getAllTours);

// Lọc tour theo region hoặc category (phải đặt trước route :id)
router.get("/filter/by-region/:region_id", tourController.getToursByRegion);
router.get("/filter/by-category/:category_id", tourController.getToursByCategory);

//  Route dạng /:tour_id PHẢI ĐỂ XUỐNG CUỐI
router.get("/:tour_id", tourController.getTourById);

// === Partner/Admin actions ===

// Tạo tour (partner hoặc admin)
router.post("/", upload.single("image"), tourController.createTour);

// Cập nhật tour (partner hoặc admin)
router.put("/:tour_id", upload.single("image"), tourController.updateTour);

// Admin duyệt hoặc từ chối tour
router.put("/:tour_id/approve", tourController.approveTour);

// Xóa tour (chỉ admin)
router.delete("/:tour_id", tourController.deleteTour);

module.exports = router;
