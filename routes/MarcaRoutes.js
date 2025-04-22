import { Router } from "express";
import { crearMarca } from "../controllers/MarcaController.js";

export const MarcaRouter = Router();

MarcaRouter.post('/marca',crearMarca)