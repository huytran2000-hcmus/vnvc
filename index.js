const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./services/cache");
require("./models/center");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://vothang:231236@vnvc.i3fhjxi.mongodb.net/vnvc", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require("./routes/centerRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
