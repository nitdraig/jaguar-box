const mongoose = require("mongoose");

const motivationalSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("MotivationalQuote", motivationalSchema);
