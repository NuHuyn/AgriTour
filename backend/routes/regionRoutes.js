const express = require("express");
const router = express.Router();
const regionController = require("../controllers/regionController");

// Lấy tất cả region
router.get("/", regionController.getAllRegions);

// Thêm region (admin)
router.post("/", regionController.createRegion);

// Cập nhật region (admin)
router.put("/:id", regionController.updateRegion);

// Xóa region (admin)
router.delete("/:id", regionController.deleteRegion);

module.exports = router;
