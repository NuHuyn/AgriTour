const express = require("express");
const router = express.Router();
const { createBooking, getBookingsByUser, cancelBooking } = require("../controllers/bookingController");

router.post("/create", createBooking);
router.get("/:user_id", getBookingsByUser);
router.delete("/cancel/:id", cancelBooking);

module.exports = router;
