require("dotenv").config(); // read environment variables from .env file
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;
app.use(cors()); //enable ALL CORS requests (client requests from other domain)
app.use(express.json());

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));

// routing middleware for resources
app.use("/api", require("./routes"));

// handle invalid routes
app.get("*", (req, res) => res.status(404).json({ message: "WHAT???" }));

app.listen(port, host, () => console.log(`App listening at http://${host}:${port}/`));
