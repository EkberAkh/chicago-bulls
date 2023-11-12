const bcrypt = require("bcrypt");
// const fs = require("fs");
// const path = require("path");
// const EmailService = require("../services/email");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SALT_ROUNDS = 10;
async function login(req, res) {
  const { email, password } = req.body

  const user = await User.findOne({
    where: { email },
  })

  if(email.trim() === '' || password.trim() === '') {
    return res.send({
      error: "Email and password are required"
    })
  }

  if(!user) {
    return res.send({
      error: "Email or password is incorrect!"
    })  
  }

  if(!bcrypt.compareSync(password, user.password)) {
    return res.send({
      error: "Email or password is incorrect!"
    })  
  }

  const accesToken = jwt.sign({
    userId: user.id,
    fullName: user.fullName,
    email: user.email,
  },
   process.env.JWT_SECRET_KEY,
  {
    expiresIn: "1h"
  })

  res.send({
    error: null,
    accesToken,
  })
}

async function registration(req, res) {
  const { fullName, email, password } = req.body;

  const existingUser = await User.findOne({ where: { email } });

  if(email.trim() === '' || password.trim() === '', fullName.trim() === '') {
    return res.send({
      error: "Name, email and password are required"
    })
  }

  if (existingUser) {
    return res.send({
      error: "User already exists!",
    });
  }

  const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS);

  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });

  // const emailTemplate = fs
  //   .readFileSync(path.resolve("src", "email-templates", "confirmation.html"))
  //   .toString();
  // const confirmationURL = "http://localhost:8080/auth/email-confirmation";

  // EmailService.sendMail({
  //   from: "Chicago Bulls <info@chicago-bulls>",
  //   to: email,
  //   subject: "Confirm your email",
  //   html: emailTemplate
  //     .replace("{confirmationURL}", confirmationURL)
  //     .replace("{fullName}", fullName),
  // });

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
