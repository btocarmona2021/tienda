import { DataTypes } from 'sequelize';
import { conectarDB } from '../config/database.js';

export const Color = conectarDB.define(
  'colores',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    valor_hexa: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'colores',
    timestamps: false,
  },
);
