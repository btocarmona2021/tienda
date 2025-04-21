import { conectarDB } from '../config/database.js';

export const ProductoColor = conectarDB.define(
  'producto_colores',
  {
    
  },
  {
    tableName: 'producto_colores',
    timestamps: false,
  },
);
