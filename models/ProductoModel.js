import { DataTypes } from 'sequelize';
import { conectarDB } from '../config/database.js';

export const Producto = conectarDB.define(
  'Productos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Nuevo Producto',
    },
    descripcion: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: 'Descripcion del producto',
    },
    talle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    destacado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    descuento: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    stock_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'productos',
    timestamps: false,
  },
);
