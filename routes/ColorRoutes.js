import { Router } from 'express';
import {
  crearColor,
  eliminarColor,
  listarColores,
  modificarColor,
} from '../controllers/ColorController.js';

export const colorRouter = Router();

colorRouter.post('/color', crearColor);
colorRouter.get('/colores', listarColores);
colorRouter.delete('/color/:id', eliminarColor);
colorRouter.put('/color/:id',modificarColor);