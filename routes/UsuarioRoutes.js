import { Router } from 'express';
import { crearUsuario } from '../controllers/UsuarioController.js';

export const UsuarioRouter = Router();

UsuarioRouter.post('/usuario',crearUsuario)
