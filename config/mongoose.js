const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://vothang:231236@vnvc.i3fhjxi.mongodb.net/vnvc",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connection successfull");
  } catch (error) {
    console.log("MongoDB connection failed: " + error);
    return res
      .status(400)
      .json({
        success: false,
        data: null,
        errors: "MongoDB connection failed",
      });
  }
}

module.exports = { connect };
