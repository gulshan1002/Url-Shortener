const express = require('express');
const urlRoutes = express.Router();

const {generateURL, redirectURL, getClickCounts} = require('../controllers/url');

urlRoutes.post("/", generateURL);
urlRoutes.get("/analytics/:id", getClickCounts);
urlRoutes.get("/:id", redirectURL);

module.exports = urlRoutes;