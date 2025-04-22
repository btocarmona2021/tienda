import { Banner } from '../models/BannerModel.js';

export const crearBanner = async (req, res) => {
  try {
    const { titulo, descripcion, imagen_url, enlace, activo } = req.body;
    const banner = await Banner.create({ titulo, descripcion, imagen_url, enlace, activo });
    if (!banner) {
      res.status(401).json({ message: 'Error al crear el banner' });
      return;
    }
    res.status(201).json(banner);
  } catch (error) {
    console.log(error.message);
    res.stattus(400).json({ message: 'ha ocurrido un error al guardar el banner' });
  }
};
export const modificarBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion, imagen_url, enlace, activo } = req.body;
    const modificados = await Banner.update(
      { titulo, descripcion, imagen_url, enlace, activo },
      { where: { id: id } },
    );
    if (modificados === 0) {
      res.status(401).json({ message: 'Ha ocurrido un error al modificar el banner' });
      return;
    }
    res.status(201).json({ message: 'Se ha actualizado correctamente el banner' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error' });
  }
};
export const eliminarBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminados = await Banner.delete({ where: { id: id } });
    if (eliminados === 0) {
      res.status(401).json({ message: 'Ha ocurrido un error al eliminar el banner' });
      return;
    }
    res.status(201).json({ message: 'Se ha eliminado correctamente el banner' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error' });
  }
};
export const listarBanner = async (req, res) => {
  try {
    const [banners] = await Banner.findAll();
    if (banners.length === 0) {
      res.status(401).json({ message: 'No se encontraron banners' });
      return;
    }
    res.status(200).json(banners);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Ha ocurrido un error' });
  }
};
