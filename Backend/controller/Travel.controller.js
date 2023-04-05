const { Travel } = require("../model/Travel.model");

const postTravelData = async (req, res) => {
  console.log(req.body);
};

const getTravelData = async (req, res) => {
  try {
    const travelData = await Travel.find();
    res.send(travelData);
  } catch (err) {
    throw err;
  }
};
module.exports = { postTravelData, getTravelData };
