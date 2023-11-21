const { Sequelize,DataTypes } = require("sequelize");

const sequelize = require("../database/index");

const Cart = sequelize.define(
  "Cart",
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    productCategory: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Cart;
