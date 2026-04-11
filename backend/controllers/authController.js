// const { createUser, findUser } = require("../models/userModel");

// // REGISTER
// const register = (req, res) => {
//   createUser(req.body, (err, result) => {
//     if (err) return res.status(500).json(err);

//     res.json({ message: "Registered successfully" });
//   });
// };

// // LOGIN
// const login = (req, res) => {
//   const { email, password } = req.body;

//   findUser(email, password, (err, result) => {
//     if (err) return res.status(500).json(err);

//     if (result.length > 0) {
//       res.json({
//         message: "Login successful",
//         role: result[0].role
//       });
//     } else {
//       res.status(401).json({
//         message: "Invalid credentials"
//       });
//     }
//   });
// };

// module.exports = { register, login };












const { createUser, findUser } = require("../models/userModel");

// REGISTER
const register = (req, res) => {
  createUser(req.body, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Registered successfully" });
  });
};

// ✅ ADMIN LOGIN
const adminLogin = (req, res) => {
  console.log("ADMIN LOGIN HIT"); 
  const { email, password } = req.body;

  findUser(email, password, (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 🔴 CHECK ROLE
    if (result[0].role !== "admin") {
      return res.status(403).json({ message: "Access denied: Not admin" });
    }

    res.json({
      message: "Admin login successful"
    });
  });
};

// ✅ STUDENT LOGIN
const studentLogin = (req, res) => {
  console.log("STUDENT LOGIN HIT");
  const { email, password } = req.body;

  findUser(email, password, (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 🔵 CHECK ROLE
    if (result[0].role !== "user") {
      return res.status(403).json({ message: "Access denied: Not student" });
    }

    res.json({
      message: "Student login successful"
    });
  });
};

module.exports = { register, adminLogin, studentLogin };