const bcrypt = require("bcrypt");

const Cart = require("../models/cart");

async function cartItems(req, res) {
  const cartItemsData = await Cart.findAll();

  return res.status(201).send({
    error: null,
    cartItems: cartItemsData,
  });
}

module.exports = {
  cartItems,
};
