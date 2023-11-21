const express = require("express");
const { cartItems } = require("../controllers/cartController");

const cartRouter = express.Router();

cartRouter.get("/cart-items-list", cartItems);

module.exports = cartRouter;