const express = require("express");
const { login, registration } = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", registration);

module.exports = authRouter;
