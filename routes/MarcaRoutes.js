import { Router } from "express";
import { crearMarca, eliminarMarca, listarMarcas, modificarMarca } from "../controllers/MarcaController.js";
import { fotosProductos } from "../uploads/multer.js";

export const marcaRouter = Router();

marcaRouter.post('/marca', fotosProductos.single('logomarca'), crearMarca);
marcaRouter.put('/marca/:id',modificarMarca)
marcaRouter.delete('/marca/:id',eliminarMarca)
marcaRouter.get('/marcas',listarMarcas)