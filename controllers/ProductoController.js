import { Producto } from '../models/index.js';


export const crearProducto = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      talle,
      cantidad,
      precio,
      peso,
      estado,
      destacado,
      descuento,
      stock_minimo,
    } = req.body;

    // if (
    //   !nombre ||
    //   !descripcion ||
    //   !talle ||
    //   !cantidad ||
    //   !precio ||
    //   !peso ||
    //   !estado ||
    //   !destacado ||
    //   !descuento ||
    //   !stock_minimo
    // ) {
    //   res.status(400).json({ message: 'Falta rellenar algunos campos' });
    //   return;
    //   }
    await Producto.create({
      nombre,
      descripcion,
      talle,
      cantidad,
      precio,
      peso,
      estado,
      destacado,
      descuento,
      stock_minimo,
    });

    res.status(201).json({ message: 'Producto creado correctamente' });
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ message: 'Ha ocurrido un error al crear el producto' });
  }
};

export const listarProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    if (productos.length === 0) {
      res.status(400).json({ message: 'No hay productos' });
      return;
    }
    res.status(201).json({ productos: productos });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.destroy({ where: { id: id } });
    if (!producto) {
      res.status(404).json({ message: 'No se encontro el producto a eliminar' });
      return;
    } else {
      res.status(201).json({ message: 'Producto eliminado correctamente' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al intentar eliminar el producto' });
  }
};

export const modificarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      descripcion,
      talle,
      cantidad,
      precio,
      peso,
      estado,
      destacado,
      descuento,
      stock_minimo,
    } = req.body;

    const [actualizado] = await Producto.update(
      {
        nombre,
        descripcion,
        talle,
        cantidad,
        precio,
        peso,
        estado,
        destacado,
        descuento,
        stock_minimo,
      },
      { where: { id: id } },
    );
    if (actualizado.length === 0) {
      res.status(404).json({ message: 'Error, no se encontro producto con esa id' });
      return;
    }
    res
      .status(201)
      .json({ message: 'Producto actualizado se modificaron ' +  actualizado + ' registros' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al intentar actualizar el producto' });
  }
};

