import { Color } from '../models/index.js';

export const eliminarColor = async (req, res) => {
  try {
    const { id } = req.params;
    const color = await Color.destroy({
      where: { id: id },
    });
    if (!color) {
      res.status(401).json({ message: 'Error al eliminar el color' });
      return;
    }
    res.status(201).json({ message: 'Se ha eliminado el color correctamente' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al eliminar el color' });
  }
};
export const listarColores = async (req, res) => {
  try {
    const colores = await Color.findAll();
    if (!colores.length) {
      res.status(401).json({ message: 'No existen colores' });
      return;
    }
    res.status(201).json(colores);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al obtener los colores' });
  }
};
export const crearColor = async (req, res) => {
  try {
    const { valor_hexa } = req.body;

    const color = await Color.create({
      valor_hexa,
    });
    if (!color) {
      res.status(401).json({ message: 'Error al crear el nuevo color' });
      return;
    }
    res.status(201).json({ message: 'Se ha creado el color correctamente' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al crear el nuevo color' });
  }
};

export const modificarColor = async (req, res) => {
  try {
    const { id } = req.params;
    const { valor_hexa } = req.body;
    const color = await Color.update(
      { valor_hexa },
      {
        where: { id: id },
      },
    );
    if (!color) {
      res.status(401).json({ message: 'Error al modificar el color' });
      return;
    }
    res.status(201).json({ message: 'Se ha modificado el color correctamente' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al modificar el color' });
  }
};
