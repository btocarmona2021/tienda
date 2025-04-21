import express from 'express';
import cors from 'cors';
import { productoRouter } from './routes/ProductoRoutes.js';
import { categoriaRouter } from './routes/CategoriaRoutes.js';

const app = express();
const PUERTO = 3000;

//configuracion del cors
const opcionesCors = {
  origin: 'htpp://localhost:3000',
};
app.use(cors(opcionesCors));

app.use(express.json());

app.use('/v1', productoRouter);
app.use('/v1', categoriaRouter);

app.listen(PUERTO, (error) => {
  if (error) {
    console.log('ha ocurrido un error al iniciar el servidor');
    return;
  } else {
    console.log('Servidor corriendo en el puerto: ' + PUERTO);
  }
});
