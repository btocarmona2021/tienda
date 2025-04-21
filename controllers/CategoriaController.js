import { Categoria } from "../models/index.js";


export const crearCategoria =async (req,res) => {
  try {
      const { nombre, imagen } = req.body;
      const categoria = await Categoria.create({
          nombre,
          imagen,
      });

      if (!categoria) {
        res.status(404).json({message:'No se pudo crear la categoria'})
          return;
      }
      res.status(201).json({message:'Se a credo una nueva categoria' , categoria})
      
  } catch (error) {
    console.log(error.message);
    res.status(400).json({message:'Ha ocurrido un error al crear la categoria'})
  }
}