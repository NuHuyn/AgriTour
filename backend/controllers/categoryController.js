const db = require("../db");

// 🧩 Get all categories
exports.getAllCategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

// 🧩 Create new category (admin)
exports.createCategory = (req, res) => {
  const { category_name } = req.body;
  db.query("INSERT INTO categories (category_name) VALUES (?)", [category_name], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Category created successfully" });
  });
};

// 🧩 Delete category (admin)
exports.deleteCategory = (req, res) => {
  const { category_id } = req.params;
  db.query("DELETE FROM categories WHERE category_id = ?", [category_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Category deleted successfully" });
  });
};
