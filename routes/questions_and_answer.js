var express = require("express");
var router = express.Router();

const Questions_and_answerController = require("../controllers/questions_and_answer");
router.get("/", Questions_and_answerController.getQuestion_and_answer);
router.post("/", Questions_and_answerController.addQuestion_and_answer);

module.exports = router;
