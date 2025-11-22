const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "agritour",
  password: "123456",
  database: "mytour",
  port: 3307
});

db.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối MySQL:", err);
  } else {
    console.log("Kết nối MySQL thành công!");
  }
});

module.exports = db;

db.query("SELECT DATABASE() AS db", (err, rows) => {
  console.log("🔥 API đang dùng database:", rows[0].db);
});