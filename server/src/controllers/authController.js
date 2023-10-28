const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const EmailService = require("../services/email");
const User = require("../models/user");
const SALT_ROUNDS = 10;
function login(req, res) {}

async function registration(req, res) {
  const { fullName, email, password } = req.body;

  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    return res.status(400).send({
      error: "User already exists!",
    });
  }

  const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS);

  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });

  const emailTemplate = fs
    .readFileSync(path.resolve("src", "email-templates", "confirmation.html"))
    .toString();
  const confirmationURL = "http://localhost:8080/auth/email-confirmation";

  EmailService.sendMail({
    from: "Chicago Bulls <info@chicago-bulls>",
    to: email,
    subject: "Confirm your email",
    html: emailTemplate
      .replace("{confirmationURL}", confirmationURL)
      .replace("{fullName}", fullName),
  });

  return res.status(201).send({
    error: null,
    user: {
      id: user.id,
      fullName,
      email,
    },
  });
}

module.exports = {
  login,
  registration,
};
