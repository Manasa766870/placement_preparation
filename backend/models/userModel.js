const db = require("../config/db");

// Create user
const createUser = (user, callback) => {
  const { name, email, password, role } = user;

  const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, password, role], callback);
};

// Find user (for login)
const findUser = (email, password, callback) => {
  const sql = "SELECT * FROM users WHERE email=? AND password=?";

  db.query(sql, [email, password], callback);
};

module.exports = { createUser, findUser };