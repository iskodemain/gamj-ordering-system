import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.js';

const Admin = sequelize.define(
  'Admin',
  {
    ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    adminId: {
      type: DataTypes.STRING(50),
      allowNull: false, // it's auto-generated by MySQL
      unique: true,
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    emailAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phoneNumber: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updateAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    verifiedAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    adminHead: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      unique: true,
    },
  },
  {
    tableName: 'admin',
    timestamps: false,
  }
);

export default Admin;