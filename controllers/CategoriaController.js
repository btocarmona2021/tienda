import { Categoria } from '../models/index.js';
import dotenv from 'dotenv';
dotenv.config(); 

export const crearCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;

    const imagen = `${process.env.BASE_URL}/uploads/missubidas/${req.file.filename}`;
    const categoria = await Categoria.create({
      nombre,
      imagen,
    });

    if (!categoria) {
      res.status(404).json({ message: 'No se pudo crear la categoria' });
      return;
    }
    res.status(201).json({ message: 'Se a credo una nueva categoria', categoria });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al crear la categoria' });
  }
};
export const modificarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, imagen } = req.body;
    const categoria = await Categoria.update(
      {
        nombre,
        imagen,
      },
      { where: { id: id } },
    );

    if (!categoria) {
      res.status(404).json({ message: 'No se pudo encontrar la categoria' });
      return;
    }
    res.status(201).json({ message: 'Se ha modificado la categoria correctamente' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al modificar la categoria' });
  }
};
export const listarCategorias = async (req, res) => {
  try {
    const [categorias] = await Categoria.findAll();

    if (categorias.length) {
      res.status(404).json({ message: 'No se encontraron categorias' });
      return;
    }
    res.status(201).json(categorias);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al listar las categorias' });
  }
};

export const eliminarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.destroy({ where: { id: id } });

    if (!categoria) {
      res.status(404).json({ message: 'No se pudo encontrar la categoria' });
      return;
    }
    res.status(201).json({ message: 'Se ha eliminado la categoria correctamente' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al eliminar la categoria' });
  }
};
