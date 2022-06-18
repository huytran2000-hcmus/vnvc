const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routers");
const db = require("./config/mongoose");
const app = express();

require("./services/cache");

app.use(bodyParser.json());

db.connect();

app.use("/api", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
