const express = require("express");
const { login, registration } = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/auth/login", login);
authRouter.post("/auth/register", registration);

module.exports = authRouter;
