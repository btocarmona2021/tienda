import express from 'express';
import cors from 'cors';
import { productoRouter } from './routes/ProductoRoutes.js';
import { categoriaRouter } from './routes/CategoriaRoutes.js';
import { colorRouter } from './routes/ColorRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { marcaRouter } from './routes/MarcaRoutes.js';
import { bannerRouter } from './routes/BannerRoutes.js';

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
app.use('/v1', colorRouter);
app.use('/v1',marcaRouter)
app.use('/v1',bannerRouter)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads/missubidas', express.static(path.join(__dirname, 'uploads', 'missubidas')));

app.listen(PUERTO, (error) => {
  if (error) {
    console.log('ha ocurrido un error al iniciar el servidor');
    return;
  } else {
    console.log('Servidor corriendo en el puerto: ' + PUERTO);
  }
});
