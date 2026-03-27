const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// 🔗 Import DB
const db = require("./config/db");

// 🔗 Import Routes
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

// ✅ Middleware
app.use(cors());
app.use(express.json());

// 📁 Static folder for uploads (PDFs/videos)
app.use("/uploads", express.static("uploads"));

// 🧪 Test route
app.get("/", (req, res) => {
  res.send("Placement Prep API is running...");
});

// 🔐 Routes
app.use("/api/auth", authRoutes);     // login/register
app.use("/api/admin", adminRoutes);   // admin actions
app.use("/api/user", userRoutes);     // user actions

// ❌ 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// 🚀 Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});