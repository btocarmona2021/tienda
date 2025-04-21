import express from 'express';
import cors from 'cors';
import './models/index.js'


const app = express();
const PUERTO = 3000;

//configuracion del cors
const opcionesCors = {
  origin: 'htpp://localhost:3000',
};
app.use(cors(opcionesCors));

app.use(express.json());

app.listen(PUERTO, (error) => {
  if (error) {
    console.log('ha ocurrido un error al iniciar el servidor');
    return;
  } else {
    console.log('Servidor corriendo en el puerto: ' + PUERTO);
  }
});
