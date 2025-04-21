// models/index.js
import { Producto } from './Producto.js';
import { Imagen } from './Imagen.js';
import { Categoria } from './Categoria.js';
import { Color } from './Color.js';
import { ProductoColor } from './Producto_Color.js';
import { Usuario } from './Usuario.js';

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
// Sincronización
await Color.sync({ alter: true })
await Categoria.sync({ alter: true });
await Producto.sync({ alter: true });
await Imagen.sync({ alter: true });
await ProductoColor.sync({ alter: true })
await Usuario.sync({alter:true})


// Exportar modelos (opcional)
export { Producto, Categoria, Imagen, Color, ProductoColor,Usuario};
