"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sesi extends Model {
    static associate(models) {}
  }
  Sesi.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      sesi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      waktu_sesi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Sesi",
      tableName: "sesi",
      timestamps: false,
    }
  );
  return Sesi;
};
