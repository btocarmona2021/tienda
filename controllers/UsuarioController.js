import { Usuario } from '../models/UsuarioModel.js';
import bcrypt from 'bcryptjs'

export const crearUsuario = async (req, res) => {
  try {
    const { nombre, apellido, telefono, email, password, activo } = req.body;
      
      const passwordHasheado = bcrypt.hashSync(password, 10);
      
    console.log(nombre, apellido, telefono, email, password, activo);
    
    const usuario = await Usuario.create({
      nombre,
      apellido,
      telefono,
      email,
      password:passwordHasheado,
      activo,
    });

      res.status(201).json({ message: 'Usuario creado correctamente', usuario });
      

  } catch (error) {
    console.log(error.name);
  }
};
