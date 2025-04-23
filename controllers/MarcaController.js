import { Marca } from '../models/MarcaModel.js';

export const crearMarca = async (req, res) => {
  try {
    const { nombre } = req.body;
    const logomarca = process.env.BASE_URL + '/uploads/missubidas/' + req.file.filename;
    const marca = await Marca.create({ nombre, logomarca });
    if (!marca) {
      res.status(401).json({ message: 'No se pudo crear la marca' });
      return;
    }
    res.status(201).json(marca);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al iintentar crear la marca' });
  }
};
export const modificarMarca = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, logomarca } = req.body;
    const modificados = await Marca.update(nombre, logomarca, { where: { id } });
    if (modificados == 0) {
      res.status(401).json({ message: 'No se pudo actualizar la marca' });
      return;
    }
    res.status(200).json({ message: 'Marca actualizada correctamente' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al intentar actualizar' });
  }
};
export const eliminarMarca = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminados = await Marca.destroy({ where: { id } });
    if (eliminados == 0) {
      res.status(401).json({ message: 'No se pudo eliminar la marca' });
      return;
    }
    res.status(201).json({ message: 'Marca eliminada correctamente' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al intentar eliminar' });
  }
};
export const listarMarcas = async (req, res) => {
  try {
    const [marcas] = await Marca.findAll();
    if (marcas.length === 0) {
      res.status(401).json({ message: 'No se pudo listar las marcas' });
      return;
    }
    res.status(201).json(marcas);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error al intentar listar las marcas' });
  }
};
