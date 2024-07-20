require('dotenv').config();
// Add this line to check if the variable is loaded
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(MONGODB_URI)
.then(() => console.log("DB Connected Successfully...."))
.catch(err => console.error("MongoDB connection error:", err));
