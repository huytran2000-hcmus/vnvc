const express = require("express");
const router = express.Router();
const centerRouter = require("./center");
const topicRouter = require("./topic");
const questions_and_answerRouter = require("./questions_and_answer");
const accountRouter = require("./account");
const vaccine_categoriesRouter = require("./vaccine_categories");
const vaccine_packetRouter = require("./vaccine_packet");

router.use("/center", centerRouter);
router.use("/topic", topicRouter);
router.use("/questions_and_answers", questions_and_answerRouter);
router.use("/user", accountRouter);
router.use("/vaccine_categories", vaccine_categoriesRouter);
router.use("/vaccine_packet", vaccine_packetRouter);

module.exports = router;
