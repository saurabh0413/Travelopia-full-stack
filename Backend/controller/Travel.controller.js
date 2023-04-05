const { Travel } = require("../model/Travel.model");

const postTravelData = async (req, res) => {
  try {
    const TRAVEL_DATA = new Travel(req.body);
    await TRAVEL_DATA.save();
    res.send(TRAVEL_DATA);
  } catch (err) {
    throw err;
  }
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
