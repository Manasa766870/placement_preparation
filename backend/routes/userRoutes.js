const express = require("express");
const router = express.Router();
const db = require("../config/db");


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


// Get questions
router.get("/questions/:topic", (req, res) => {
  const topic = req.params.topic;

  const sql = "SELECT * FROM questions WHERE topic=? ORDER BY RAND() LIMIT 10";

  db.query(sql, [topic], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

//  Get results 
router.get("/results/:user", (req, res) => {
  const sql = "SELECT * FROM results WHERE user=? ORDER BY id";

  db.query(sql, [req.params.user], (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});



router.post("/save-result", (req, res) => {
  const { email, score, total } = req.body;

  const query = `
    INSERT INTO results (user, score, total)
    VALUES (?, ?, ?)
  `;

  db.query(query, [email, score, total], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Result saved" });
  });
});

module.exports = router;