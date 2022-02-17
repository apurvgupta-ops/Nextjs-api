const { default: mongoose } = require("mongoose");

const heroSchema = new mongoose.Schema({
  superHero: {
    type: String,
    required: [true, "Please Enter Name"],
    trim: true,
    unique: true,
  },
  realName: {
    type: String,
    required: [true, "Please Real Name"],
    trim: true,
    unique: true,
  },
});

module.exports = mongoose.models.Hero || mongoose.model("Hero", heroSchema);
