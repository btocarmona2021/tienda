import { Router } from "express";
import { crearCategoria, eliminarCategoria, listarCategorias, modificarCategoria } from "../controllers/CategoriaController.js";
import { fotosProductos } from "../uploads/multer.js";
export const categoriaRouter = Router();

categoriaRouter.post('/categoria',fotosProductos.single('imagen'), crearCategoria);
categoriaRouter.get('/categorias', listarCategorias);
categoriaRouter.put('/categoria/:id', modificarCategoria);
categoriaRouter.delete('/categoria/:id', eliminarCategoria);