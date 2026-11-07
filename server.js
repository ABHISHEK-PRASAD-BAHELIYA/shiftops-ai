
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to ShiftOps AI API!",
    status: "Server is running",
  });
});

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "ShiftOps AI Backend",
    status: "healthy",
  });
});

// Server configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`ShiftOps AI server running on port ${PORT}`);
});
