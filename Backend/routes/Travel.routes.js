const express = require("express");
const { postTravelData, getTravelData } = require("../model/Travel.model");

const travelRoute = express.Router();

travelRoute.get("/", getTravelData);
travelRoute.post("/", postTravelData);

module.exports = { travelRoute };
