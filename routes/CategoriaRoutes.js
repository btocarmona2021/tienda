import { Router } from "express";
import { crearCategoria } from "../controllers/CategoriaController.js";
export const categoriaRouter = Router();

categoriaRouter.post('/categoria', crearCategoria);