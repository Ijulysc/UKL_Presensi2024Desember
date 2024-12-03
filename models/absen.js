'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

module.exports = (sequelize, DataTypes) => {
    const Absen = sequelize.define('Absen', {
        id_presensi: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('hadir', 'izin', 'sakit', 'alpha'),
            allowNull: false
        }
    }, {
        tableName: 'presensi_absen',
        timestamps: true // Menyediakan kolom createdAt dan updatedAt
    });

    Absen.associate = function(models) {
        // Relasi dengan tabel User
        Absen.belongsTo(models.User, {
            foreignKey: 'id_user',
            as: 'user'
        });
    };

    return Absen;
};