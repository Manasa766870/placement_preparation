// const express = require("express");
// const router = express.Router();
// const db = require("../config/db");

// // ✅ Get all videos for students
// router.get("/videos", (req, res) => {
//   const query = "SELECT * FROM videos ORDER BY id DESC";
//   db.query(query, (err, results) => {
//     if (err) return res.status(500).json({ message: "DB error", error: err });
//     res.json(results);
//   });
// });

// module.exports = router;




const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ✅ THIS IS IMPORTANT
router.get("/resources", (req, res) => {
  const query = "SELECT * FROM resources ORDER BY created_at DESC";

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "DB error" });
    }
    res.json(results);
  });
});

module.exports = router;