const db = require("../db");
const bcrypt = require("bcryptjs");

exports.register = (req, res) => {
  const { full_name, email, password, role } = req.body;

  // Kiểm tra email trùng
  const checkSql = "SELECT * FROM users WHERE email = ?";
  db.query(checkSql, [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length > 0) return res.status(400).json({ message: "Email already exists" });

    // Mã hoá mật khẩu
    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = "INSERT INTO users (full_name, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(sql, [full_name, email, hashedPassword, role || "user"], (err, result) => {
      if (err) return res.status(500).json({ message: "Register failed" });
      res.status(200).json({ message: "Register success", user_id: result.insertId });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) return res.status(404).json({ message: "User not found" });

    const user = results[0];
    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid password" });

    res.status(200).json({
      message: "Login success",
      user_id: user.user_id,
      role: user.role,
      full_name: user.full_name
    });
  });
};
