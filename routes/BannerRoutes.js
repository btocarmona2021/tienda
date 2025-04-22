import { Router } from 'express';
import { crearBanner, modificarBanner, eliminarBanner, listarBanner } from '../controllers/BannerController.js';

export const bannerRouter = Router();

bannerRouter.post('/banner', crearBanner);
bannerRouter.put('/banner/:id', modificarBanner);
bannerRouter.delete('/banner/:id', eliminarBanner);
bannerRouter.get('/banners', listarBanner);
