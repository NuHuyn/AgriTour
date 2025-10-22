const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require("./routes/auth");
const tourRoutes = require("./routes/tours");
const bookingRoutes = require("./routes/bookings");
const paymentRoutes = require("./routes/payments");
const userRoutes = require("./routes/users");

// Mount routes
app.use("/auth", authRoutes);
app.use("/tours", tourRoutes);
app.use("/bookings", bookingRoutes);
app.use("/payments", paymentRoutes);
app.use("/users", userRoutes);
app.use("/uploads", express.static("uploads"));


// Start server
app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
