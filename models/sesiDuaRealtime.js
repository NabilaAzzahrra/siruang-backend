"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SesiDuaRealtime extends Model {
    static associate(models) {}
  }
  SesiDuaRealtime.init(
    {
      idRuang: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      ruang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.INTEGER,
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
      id_sesi: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_ruang: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_tahun_akademik: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_hari: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_konfigurasi: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      semester: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_jenis_kegiatan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      no_hp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tgl_pakai: {
        type: DataTypes.DATE,
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
      kelas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      program_studi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mata_kuliah: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dosen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kegiatan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "SesiDuaRealtime",
      tableName: "vw_sesiduarealtime",
      timestamps: false,
    }
  );
  return SesiDuaRealtime;
};
