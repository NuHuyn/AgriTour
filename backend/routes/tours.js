const express = require("express");
const router = express.Router();
const {
  getAllTours,
  createTour,
  updateTour,
  deleteTour
} = require("../controllers/tourController");

router.get("/", getAllTours);
router.post("/", createTour);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);

module.exports = router;
