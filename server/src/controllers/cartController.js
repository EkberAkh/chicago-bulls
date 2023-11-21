const bcrypt = require("bcrypt");
const Cart = require("../models/cart");
const jwt = require("jsonwebtoken");

async function cartItems(req, res) {
  try {
    const { productId, productTitle, productPrice, productCategory } = req.body;

    if (!productId || !productTitle || !productPrice || !productCategory) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    let userCart = await Cart.findOne({ userId });

    if (!userCart) {
      userCart = new Cart({ userId, items: [] });
    }

    const cartItem = {
      productId,
      productTitle,
      productPrice,
      productCategory,
    };
    userCart.items.push(cartItem);

    await userCart.save();

    res
      .status(201)
      .json({ message: "Product added to cart successfully", cart: userCart });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  cartItems,
};
