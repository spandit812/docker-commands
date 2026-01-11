const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
  res.send("Node.js + MySQL API is running");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
