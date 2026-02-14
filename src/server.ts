// src/server.js
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("WORKING"));
module.exports = app;

// src/api/index.js
const serverless = require("serverless-http");
const app = require("../server");
module.exports = serverless(app);
