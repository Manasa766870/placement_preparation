const { createUser, findUser } = require("../models/userModel");

// REGISTER
const register = (req, res) => {
  createUser(req.body, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Registered successfully" });
  });
};

// LOGIN
const login = (req, res) => {
  const { email, password } = req.body;

  findUser(email, password, (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      res.json({
        message: "Login successful",
        role: result[0].role
      });
    } else {
      res.status(401).json({
        message: "Invalid credentials"
      });
    }
  });
};

module.exports = { register, login };