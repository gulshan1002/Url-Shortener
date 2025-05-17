const express = require('express');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const connectDB = require('./config/db');
const urlRoutes = require('./routes/urlRoutes')

const app = express();

connectDB();

app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests, please try again after 15 minutes'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/url", urlRoutes);

app.use((req, res, next) => {
    res.status(403).json({ message: "Not found or this page doesn't exist" });
});


module.exports = app;