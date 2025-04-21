import { DataTypes } from 'sequelize';
import { conectarDB } from '../config/database.js';
import { Producto } from './Producto.js';
import { Imagen } from './Imagen.js';

export const Categoria = conectarDB.define(
  'categorias',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'categorias',
    timestamps: false,
  },
);
