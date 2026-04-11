// const express = require("express");
// const router = express.Router();

// const { login, register } = require("../controllers/authController");
// router.post("/login", login);
// router.post("/register", register);

// module.exports = router;


const express = require("express");
const router = express.Router();

const { adminLogin, studentLogin, register } = require("../controllers/authController");

router.post("/admin-login", adminLogin);
router.post("/student-login", studentLogin);
router.post("/register", register);

module.exports = router;