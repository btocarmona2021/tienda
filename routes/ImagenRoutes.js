import { Router } from 'express';
import { crearImagen } from '../controllers/ImagenController,js';
import { fotosProductos } from '../uploads/multer.js';
import { listarImagenes } from '../controllers/ImagenController,js';
import { eliminarImagen } from '../controllers/ImagenController,js';
import { modificarImagen } from '../controllers/ImagenController,js';

export const imagenRouter = Router();

imagenRouter.post('/imagen', fotosProductos.array('imagen', 5), crearImagen);
imagenRouter.get('/imagenes', listarImagenes);
imagenRouter.delete('/imagen/:id', eliminarImagen);
imagenRouter.put('/imagen/:id', fotosProductos.single('imagen'), modificarImagen);
