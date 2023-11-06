const express = require("express");
const authRouter = require("./auth");
const playerRouter = require("./player");

const APP_ROUTER = express.Router();

APP_ROUTER.use(authRouter)
APP_ROUTER.use(playerRouter)

module.exports = APP_ROUTER;


