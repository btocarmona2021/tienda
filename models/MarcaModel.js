import { DataTypes } from 'sequelize';
import { conectarDB } from '../config/database.js';

export const Marca = conectarDB.define(
  'marcas',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Marca',
    },
    logomarca: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'marcas',
    timestamps: false,
  },
);
