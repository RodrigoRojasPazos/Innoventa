# InnoVenta POS System

Este proyecto es un sistema de punto de venta (**POS**) desarrollado con **Node.js, Express.js, MySQL y React.js**. Está diseñado para gestionar la venta de productos electrónicos, administración de inventario y control de usuarios.

## 🚀 Tecnologías Utilizadas

### Backend
- **Node.js** con **Express.js** para manejar solicitudes HTTP.
- **MySQL** como base de datos relacional.
- **JWT (JSON Web Token)** para autenticación segura.
- **Swagger** para documentación de la API.

### Frontend
- **React.js** con **Vite** para una experiencia de usuario rápida.
- **Tailwind CSS** para un diseño minimalista y moderno.

### Herramientas Adicionales
- **GitHub** para el control de versiones y colaboración.
- **Middleware personalizado** para manejo de errores y autenticación.
- **Configuración de entornos** para desarrollo y producción.

---

## 🎯 Características
- 🔐 **Autenticación de Usuarios**: Registro e inicio de sesión con JWT.
- 🛍️ **Gestión de Productos**: Operaciones CRUD para productos y categorías.
- 💳 **Procesamiento de Ventas**: Registro de ventas y métodos de pago.
- 📊 **Generación de Reportes**: Reportes de ventas en tiempo real.
- 🎨 **Interfaz Responsiva**: Diseñada con React.js y Tailwind CSS.
- 📡 **Documentación API**: Swagger para probar endpoints de manera interactiva.

---

## 📌 Instalación y Configuración

### 📂 1. Clonar el Repositorio
```sh
git clone <repository-url>
cd InnoVentaPOS
```

### 🛠️ 2. Configuración del Backend
```sh
cd backend
npm install
```
Configura la base de datos MySQL en `backend/src/config/db.js`.

### 💻 3. Configuración del Frontend
```sh
cd ../frontend
npm install
```

### 🚀 4. Iniciar Servidores
#### Backend:
```sh
cd backend
npm start
```

#### Frontend:
```sh
cd ../frontend
npm run dev
```

---

## 📡 API Endpoints

### 🔐 Autenticación
- **POST** `/api/auth/login`: Iniciar sesión
- **POST** `/api/auth/register`: Registrar usuario

### 👤 Administración de Usuarios
- **GET** `/api/users`: Obtener todos los usuarios
- **GET** `/api/users/:id`: Obtener usuario por ID
- **POST** `/api/users`: Crear usuario
- **PUT** `/api/users/:id`: Actualizar usuario por ID
- **DELETE** `/api/users/:id`: Eliminar usuario por ID

### 🛒 Gestión de Productos
- **GET** `/api/products`: Obtener todos los productos
- **GET** `/api/products/:id`: Obtener producto por ID
- **POST** `/api/products`: Crear producto
- **PUT** `/api/products/:id`: Actualizar producto por ID
- **DELETE** `/api/products/:id`: Eliminar producto por ID

### 💰 Gestión de Ventas
- **GET** `/api/sales`: Obtener todas las ventas
- **POST** `/api/sales`: Registrar una nueva venta
- **GET** `/api/sales/:id`: Obtener detalles de una venta
- **DELETE** `/api/sales/:id`: Eliminar una venta

### 📢 Gestión de Promociones
- **GET** `/api/promotions`: Obtener todas las promociones
- **POST** `/api/promotions`: Crear una nueva promoción
- **DELETE** `/api/promotions/:id`: Eliminar promoción

### 📊 Generación de Reportes
- **GET** `/api/reports/sales`: Generar reporte de ventas

---

## 📜 Licencia
Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

