const db = require("../db");
const bcrypt = require("bcryptjs");

/**
 * Register new account
 */
exports.register = (req, res) => {
  const { full_name, email, password, phone, role } = req.body;

  if (!full_name || !email || !password)
    return res.status(400).json({ message: "Missing required fields" });

  const hash = bcrypt.hashSync(password, 10);
  const sql = `INSERT INTO users (full_name, email, password_hash, phone, role)
               VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [full_name, email, hash, phone || null, role || "customer"], (err) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY")
        return res.status(400).json({ message: "Email already exists" });
      return res.status(500).json({ error: err });
    }

    res.status(201).json({ message: "User registered successfully!" });
  });
};

/**
 * Login user
 */
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Missing email or password" });

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result.length) return res.status(404).json({ message: "User not found" });

    const user = result[0];
    const valid = bcrypt.compareSync(password, user.password_hash);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    delete user.password_hash;
    res.status(200).json({ message: "Login successful", user });
  });
};
