import { Router } from 'express';
import { crearProducto, eliminarProducto, listarProductos, modificarProducto } from '../controllers/ProductoController.js';
import { fotosProductos } from '../uploads/multer.js';

export const productoRouter = Router();

productoRouter.post('/producto',fotosProductos.single('imagen'), crearProducto);
productoRouter.get('/productos', listarProductos);
productoRouter.delete('/producto/:id', eliminarProducto);
productoRouter.patch('/producto/:id', modificarProducto);
