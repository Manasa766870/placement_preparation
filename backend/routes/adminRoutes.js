const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const db = require("../config/db");

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

/* =========================================
   ✅ Upload VIDEO (store in resources)
========================================= */
router.post("/upload-video", upload.single("video"), (req, res) => {
  const { title, topic } = req.body;
  const filePath = `/uploads/${req.file.filename}`;

  const query = `
    INSERT INTO resources (title, type, file_path, topic)
    VALUES (?, 'video', ?, ?)
  `;

  db.query(query, [title, filePath, topic], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Video uploaded successfully!" });
  });
});

/* =========================================
   ✅ Upload PDF
========================================= */
router.post("/upload-pdf", upload.single("pdf"), (req, res) => {
  const { title, topic } = req.body;
  const filePath = `/uploads/${req.file.filename}`;

  const query = `
    INSERT INTO resources (title, type, file_path, topic)
    VALUES (?, 'pdf', ?, ?)
  `;

  db.query(query, [title, filePath, topic], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "PDF uploaded successfully!" });
  });
});

/* =========================================
   ✅ Get ALL resources (for students)
========================================= */
router.get("/resources", (req, res) => {
  const query = "SELECT * FROM resources ORDER BY id DESC";

  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});



router.post("/add-question", (req, res) => {
  const { question, option1, option2, option3, option4, correct_option, topic } = req.body;

  const sql = `
    INSERT INTO questions (question, option1, option2, option3, option4, correct_option, topic)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [question, option1, option2, option3, option4, correct_option, topic], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "DB error" });
    }

    res.json({ message: "Question saved successfully!" });
  });
});



router.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

router.get("/questions-count", (req, res) => {
  db.query("SELECT COUNT(*) as count FROM questions", (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data[0]);
  });
});


router.get("/results", (req, res) => {
  db.query("SELECT * FROM results", (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});
module.exports = router;