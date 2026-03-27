const db = require("../config/db");

// ADD RESOURCE (video/pdf)
const addResource = (req, res) => {
  const { title, type, topic } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const filePath = req.file.filename;

  const sql = `
    INSERT INTO resources (title, type, file_path, topic)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [title, type, filePath, topic], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Resource uploaded successfully" });
  });
};


// GET ALL RESOURCES
const getResources = (req, res) => {
  db.query("SELECT * FROM resources", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};


module.exports = { addResource, getResources };