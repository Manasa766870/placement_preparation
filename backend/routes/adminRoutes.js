// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const path = require("path");
// const db = require("../config/db"); // your database connection

// // Multer storage config
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // your uploads folder
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage: storage });

// // ✅ Upload Video
// router.post("/upload-video", upload.single("video"), (req, res) => {
//   const title = req.body.title;
//   const filePath = `/uploads/${req.file.filename}`;

//   // Save video info to DB (MySQL example)
//   const query = "INSERT INTO videos (title, path) VALUES (?, ?)";
//   db.query(query, [title, filePath], (err, result) => {
//     if (err) return res.status(500).json({ message: "DB error", error: err });
//     res.json({ message: "Video uploaded successfully!", video: { title, path: filePath } });
//   });
// });

// // ✅ Get all uploaded videos (optional for admin preview)
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

module.exports = router;