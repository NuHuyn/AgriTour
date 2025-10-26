const db = require("../db");

// 🧩 Get all regions
exports.getAllRegions = (req, res) => {
  db.query("SELECT * FROM regions", (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};
