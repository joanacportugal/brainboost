const { ValidationError } = require("sequelize");
const { SecurityQuestions } = require("../models");

exports.getQuestions = async (req, res) => {
	try {
		const questions = await SecurityQuestions.findAll({ order: ["id"] });

		return res.status(200).json({ questions });
	} catch (err) {
		return res.status(500).json({ error: err.message || "An error occured. Try again!" });
	}
}