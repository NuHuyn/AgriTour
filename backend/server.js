const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // nếu có mật khẩu thì thêm vào đây
  database: "tour",
  port: 3307
});

// Kết nối thử khi khởi động server
db.connect((err) => {
  if (err) {
    console.log("Lỗi kết nối MySQL:", err);
  } else {
    console.log("Đã kết nối MySQL thành công!");
  }
});

// Lấy toàn bộ user
app.get("/", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// Tạo user mới
app.post("/create", (req, res) => {
  const sql = "INSERT INTO user (`Name`, `Email`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("Lỗi khi tạo user:", err);
      return res.status(500).json({ message: "Error creating user" });
    }

    // Gửi phản hồi có thông điệp + id mới
    return res.status(200).json({
      message: "Create user successfully!",
      insertedId: data.insertId
    });
  });
});


// Cập nhật thông tin user
app.put("/update/:id", (req, res) => {
  const sql = "UPDATE user SET Name = ?, Email = ? WHERE ID = ?";
  const values = [
    req.body.name,
    req.body.email
  ];
  const id = req.params.id;

  // 
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error updating user" });
    }

    // 
    return res.status(200).json({
      message: "Update user successfully!",
    });
  });
});

// Delete the information of user
app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM user WHERE ID = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error("Error deleting user:", err);
      return res.status(500).json({ message: "Error deleting user" });
    }

    // Nếu không có dòng nào bị ảnh hưởng (không có user đó)
    if (data.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Thành công
    return res.status(200).json({
      message: "Delete user successfully!",
    });
  });
});


// Khởi động server
app.listen(8081, () => {
  console.log("Server is listening on port 8081");
});
