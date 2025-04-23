# Tienda - API REST

Este proyecto es una API REST para la gestión de una tienda. Permite administrar productos, categorías, marcas, colores, banners y usuarios.

## Características

- CRUD de productos, categorías, marcas, colores y banners.
- Gestión de imágenes para productos y categorías.
- Relación entre productos, categorías, marcas y colores.
- Uso de Sequelize como ORM para la base de datos MySQL.
- Middleware para manejo de archivos con Multer.
- Configuración de CORS.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/btocarmona2021/tienda.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno en un archivo `.env`:
   ```env
   BASE_URL=http://localhost:3000
   ```
4. Inicia el servidor:
   ```bash
   npm run dev
   ```

## Endpoints

### Productos
- **POST** `/v1/producto` - Crear un producto.
- **GET** `/v1/productos` - Listar productos.
- **PUT** `/v1/producto/:id` - Modificar un producto.
- **DELETE** `/v1/producto/:id` - Eliminar un producto.

### Categorías
- **POST** `/v1/categoria` - Crear una categoría.
- **GET** `/v1/categorias` - Listar categorías.
- **PUT** `/v1/categoria/:id` - Modificar una categoría.
- **DELETE** `/v1/categoria/:id` - Eliminar una categoría.

### Marcas
- **POST** `/v1/marca` - Crear una marca.
- **GET** `/v1/marcas` - Listar marcas.
- **PUT** `/v1/marca/:id` - Modificar una marca.
- **DELETE** `/v1/marca/:id` - Eliminar una marca.

### Colores
- **POST** `/v1/color` - Crear un color.
- **GET** `/v1/colores` - Listar colores.
- **PUT** `/v1/color/:id` - Modificar un color.
- **DELETE** `/v1/color/:id` - Eliminar un color.

### Banners
- **POST** `/v1/banner` - Crear un banner.
- **GET** `/v1/banners` - Listar banners.
- **PUT** `/v1/banner/:id` - Modificar un banner.
- **DELETE** `/v1/banner/:id` - Eliminar un banner.

## Estructura del Proyecto

```
├── config/
│   └── database.js       # Configuración de la base de datos
├── controllers/          # Controladores de las entidades
├── middlewares/          # Middlewares personalizados
├── models/               # Modelos de Sequelize
├── routes/               # Rutas de la API
├── uploads/              # Gestión de archivos subidos
├── index.js              # Punto de entrada de la aplicación
├── package.json          # Dependencias y scripts
└── readme.md             # Documentación del proyecto
```

## Dependencias

- **express**: Framework para construir la API REST.
- **sequelize**: ORM para la base de datos MySQL.
- **mysql2**: Driver para conectar con MySQL.
- **multer**: Middleware para manejo de archivos.
- **dotenv**: Manejo de variables de entorno.
- **cors**: Configuración de CORS.
- **jsonwebtoken**: Manejo de autenticación con JWT.
- **bcryptjs**: Encriptación de contraseñas.

## Scripts

- `npm run dev`: Inicia el servidor en modo desarrollo con nodemon.

## Autor

- **Alberto Carmona**  
  [GitHub](https://github.com/btocarmona2021)

## Licencia

Este proyecto está bajo la licencia MIT.
