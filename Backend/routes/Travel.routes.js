const express = require("express");
const {
  getTravelData,
  postTravelData,
} = require("../controller/Travel.controller");

const travelRoute = express.Router();

travelRoute.get("/", getTravelData);
travelRoute.post("/", postTravelData);

module.exports = { travelRoute };
