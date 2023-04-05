const { Travel } = require("../model/Travel.model");

const postTravelData = async (req, res) => {
  try {
    const travelData = new Travel(req.body);
    await travelData.save();
    res.status(201).json(travelData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const getTravelData = async (req, res) => {
  try {
    const travelData = await Travel.find();
    res.json(travelData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = { postTravelData, getTravelData };
