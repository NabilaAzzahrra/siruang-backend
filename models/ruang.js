"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ruang extends Model {
    static associate(models) {
    }
  }
  Ruang.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      ruang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Ruang",
      tableName: "ruang",
      timestamps: false,
    }
  );
  return Ruang;
};
