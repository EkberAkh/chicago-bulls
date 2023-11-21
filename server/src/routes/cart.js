const express = require("express");
const { cartItems } = require("../controllers/cartController");

const cartRouter = express.Router();

cartRouter.post("/cart-items-list", cartItems);

module.exports = cartRouter;