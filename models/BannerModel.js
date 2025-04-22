import { DataTypes } from 'sequelize';
import { conectarDB } from '../config/database.js';

export const Banner = conectarDB.define(
  'banner',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enlace: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    },
  
  {
    tableName: 'banners',
    timestamps: false,
  },
);
