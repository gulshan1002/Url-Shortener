const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const urlRoutes = require('./routes/urlRoutes')

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/url", urlRoutes);

app.use((req, res, next) => {
    res.status(403).json({ message: "Not found or this page doesn't exist" });
});


module.exports = app;