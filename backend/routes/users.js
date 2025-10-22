const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT user_id, full_name, email, role FROM users", (err, data) => {
    if (err) return res.status(500).json({ message: "Error fetching users" });
    res.json(data);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM users WHERE user_id = ?", [id], (err) => {
    if (err) return res.status(500).json({ message: "Error deleting user" });
    res.json({ message: "User deleted successfully" });
  });
});

module.exports = router;
