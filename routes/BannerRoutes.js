import { Router } from 'express';
import { crearBanner, modificarBanner, eliminarBanner, listarBanner } from '../controllers/BannerController.js';
import { fotosProductos } from '../uploads/multer.js';

export const bannerRouter = Router();

bannerRouter.post('/banner', fotosProductos.single('imagen_url'), crearBanner);
bannerRouter.put('/banner/:id', modificarBanner);
bannerRouter.delete('/banner/:id', eliminarBanner);
bannerRouter.get('/banners', listarBanner);
