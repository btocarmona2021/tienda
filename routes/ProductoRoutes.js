import { Router } from 'express';
import { crearProducto, eliminarProducto, listarProductos, modificarProducto } from '../controllers/ProductoController.js';

export const productoRouter = Router();

productoRouter.post('/producto', crearProducto);
productoRouter.get('/productos', listarProductos);
productoRouter.delete('/producto/:id', eliminarProducto);
productoRouter.patch('/producto/:id', modificarProducto);
