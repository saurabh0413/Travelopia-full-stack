const { default: mongoose } = require("mongoose");

const travelDataSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Location: { type: String, required: true },
  No_of_travellers: { type: Number, required: true },
  Budget: { type: Number, required: true },
});

const Travel = mongoose.model("travel", travelDataSchema);

module.exports = { Travel };
