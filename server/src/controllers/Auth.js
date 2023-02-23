const jwt = require("jsonwebtoken");
const config = require("../config");

exports.verifyToken = (req, res, next) => {
	const header = req.headers["x-access-token"] || req.headers.authorization;
	if (typeof header == "undefined") {
		return res.status(401).json({ error: "No token provided!" });
	}
	const bearer = header.split(" "); // Authorization: Bearer <token>
	const token = bearer[1];
	try {
		let decoded = jwt.verify(token, config.SECRET);
		req.userId = decoded.userId;
		req.typeUser = decoded.typeUser;
		next();
	} catch (err) {
		return res.status(401).json({ error: "Unauthorized!" });
	}
};