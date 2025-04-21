// models/index.js
import { Producto } from './ProductoModel.js';
import { Imagen } from './ImagenModel.js';
import { Categoria } from './CategoriaModel.js';
import { Color } from './ColorModel.js';
import { ProductoColor } from './Producto_ColorModel.js';
import { Usuario } from './UsuarioModel.js';

// Relaciones
Categoria.hasMany(Producto, { foreignKey: 'categoria_id', sourceKey: 'id' });
Producto.belongsTo(Categoria, { foreignKey: 'categoria_id', targetKey: 'id' });

Producto.hasMany(Imagen, { foreignKey: 'producto_id', sourceKey: 'id' });
Imagen.belongsTo(Producto, { foreignKey: 'producto_id', targetKey: 'id' });

Producto.belongsToMany(Color, {
  through: ProductoColor, // Nombre de la tabla intermedia
  foreignKey: 'producto_id',
  otherKey: 'color_id',
});

Color.belongsToMany(Producto, {
  through: ProductoColor,
  foreignKey: 'color_id',
  otherKey: 'producto_id',
});

// Sincronización de tablas
await Color.sync({ alter: true });
await Categoria.sync({ alter: true });
await Producto.sync({ alter: true });
await Imagen.sync({ alter: true });
await ProductoColor.sync({ alter: true });
await Usuario.sync({ alter: true });

// Exporto modelos
export { Producto, Categoria, Imagen, Color, ProductoColor, Usuario };
