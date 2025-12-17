const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(express.json());
require('dotenv').config();
// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // max requests per IP
  message: "Too many requests, try later"
});
app.use("/api", limiter);

// CORS
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}));

// API Key Middleware
const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: "Forbidden: Invalid API Key" });
  }
  next();
};
app.use("/api", apiKeyAuth);

// Test Route
app.get('/api/data', (req, res) => {
  res.json({ message: "Secured API data!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
