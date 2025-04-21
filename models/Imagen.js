import { DataTypes } from 'sequelize';
import { conectarDB } from '../config/database.js';


export const Imagen = conectarDB.define(
  'imagenes',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    ruta_imagen: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'imagenes_productos',
    timestamps: false,
  },
);



