const express = require('express');
let router = express.Router();
const { body, param, validationResult } = require("express-validator");

const { verifyToken } = require("../controllers/Auth");
const SecurityQuestionsController = require("../controllers/SecurityQuestions");

router.route("/")
	.get(SecurityQuestionsController.getQuestions);

//send a predefined error message for invalid routes
router.all("*", (req, res) => res.status(404).json({ error: "Security Questions: what???" }));

module.exports = router;