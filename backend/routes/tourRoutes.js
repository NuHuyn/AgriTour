const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");
const multer = require("multer");
const path = require("path");

// UPLOAD CONFIG
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



router.get("/admin/all", tourController.getAllToursForAdmin);

router.put("/review/:tour_id", tourController.reviewTour);



router.get("/", tourController.getAllTours);

router.get("/filter/by-region/:region_id", tourController.getToursByRegion);

router.get("/filter/by-category/:category_id", tourController.getToursByCategory);


router.post("/", upload.single("image"), tourController.createTour);

router.put("/update/:tour_id", upload.single("image"), tourController.updateTour);

router.delete("/delete/:tour_id", tourController.deleteTour);

// ⚠ ROUTE LẤY TOUR THEO ID — PHẢI ĐỂ CUỐI
console.log("🔍 getTourById =", tourController.getTourById);
router.get("/:tour_id", tourController.getTourById);

module.exports = router;

console.log("====== REGISTERED ROUTES ======");
router.stack.forEach(layer => {
  if (layer.route) {
    console.log(layer.route.stack[0].method.toUpperCase(), "=>", layer.route.path);
  }
});