const express = require("express");
const router = express.Router();
const centerRouter = require("./centerRoutes");
const topicRouter = require("./topicRouters");
const questions_and_answer = require("./questions_and_answer");
const accountRouter = require("./account");

router.use("/center", centerRouter);
router.use("/topic", topicRouter);
router.use("/questions_and_answer", questions_and_answer);
router.use("/user", accountRouter);

module.exports = router;
