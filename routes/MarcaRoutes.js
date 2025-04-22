import { Router } from "express";
import { crearMarca, eliminarMarca, listarMarcas, modificarMarca } from "../controllers/MarcaController.js";

export const marcaRouter = Router();

marcaRouter.post('/marca',crearMarca)
marcaRouter.put('/marca/:id',modificarMarca)
marcaRouter.delete('/marca/:id',eliminarMarca)
marcaRouter.get('/marcas',listarMarcas)