const express = require("express");
const cors = require("cors");
const app = express();
const port = 8081;
const path = require("path");

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/partners", require("./routes/partnerRoutes"));
app.use("/api/tours", require("./routes/tourRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/api/invoices", require("./routes/invoiceRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/regions", require("./routes/regionRoutes"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => console.log(`✅ Server running at http://localhost:${port}`));
