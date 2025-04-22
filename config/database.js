import { Sequelize } from 'sequelize';

export const conectarDB = new Sequelize({
  host: 'localhost',
  port: 3306,
  database: 'tiendacomercio',
  password: 'root',
  username: 'root',
  dialect: 'mysql',
});

const conectar = async () => {
  try {
    await conectarDB.authenticate(); // Verifica la conexión
    console.log('Se ha conectado a la base de datos correctamente');
  } catch (error) {
    console.log('Ha ocurrido un error al conectar con la base de datos:', error);
  }
};
conectar();
