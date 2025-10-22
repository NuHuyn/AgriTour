const express = require("express");
const router = express.Router();
const {
  getAllTours,
  createTour,
  updateTour,
  deleteTour
} = require("../controllers/tourController");

router.get("/", getAllTours);
router.post("/create", createTour);
router.put("/update/:id", updateTour);
router.delete("/delete/:id", deleteTour);

module.exports = router;
