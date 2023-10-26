const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../database/index");

const Player = sequelize.define(
  "Player",
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "users_email_index",
        using: "BTREE",
        fields: ["email"],
      },
    ],
  }
);

module.exports = Player;
