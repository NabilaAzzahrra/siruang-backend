"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SesiTwo extends Model {
    static associate(models) {}
  }
  SesiTwo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      kegiatan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_mata_kuliah: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_dosen: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_kelas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      kelas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      program_studi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dosen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mata_kuliah: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_sesi: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nama_ruang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_tahun_akademik: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hari: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      semester: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      verifikasi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hari: {
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
      modelName: "SesiTwo",
      tableName: "sesi_two",
      timestamps: false,
    }
  );
  return SesiTwo;
};
