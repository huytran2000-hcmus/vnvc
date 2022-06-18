const express = require("express");
const router = express.Router();
const centerRouter = require("./centerRoutes");
const topicRouter = require("./topicRouters");
const questions_and_answer = require("./questions_and_answer");

router.use("/center", centerRouter);
router.use("/topic", topicRouter);
router.use("/questions_and_answer", questions_and_answer);

module.exports = router;
