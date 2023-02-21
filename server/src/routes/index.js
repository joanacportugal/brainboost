const express = require("express");
let router = express.Router();

let models = require("../models")

// middleware for all routes
router.use((req, res, next) => {
	const start = Date.now();
	res.on("finish", () => {
		//finish event is emitted once the response is sent to the client
		const diffSeconds = (Date.now() - start) / 1000; //figure out how many seconds elapsed
		console.log(
			`${req.method} ${req.originalUrl} completed in ${diffSeconds} seconds`
		);
	});
	next();
});

//send a predefined error message for invalid routes
router.all("*", function (req, res) {
	res.status(404).json({
		message: "API: what???",
	});
});

module.exports = router;
