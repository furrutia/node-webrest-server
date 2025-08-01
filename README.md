# API Template Node.js + Express

Este proyecto es una plantilla base para crear APIs REST usando **Node.js**, **Express** y **Router** con conexión a **PostgreSQL** mediante Prisma.

---

## 🚀 Requisitos

- Node.js >= 18.x
- npm >= 9.x
- PostgreSQL >= 13.x

---

## ⚙️ Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/furrutia/node-webrest-server
   cd node-webrest-server
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   - Crea un archivo `.env` en la raíz del proyecto:
     ```
     PORT=3000
     DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/tu_basededatos"
     ```
   - Cambia los valores según tu configuración local.

---

## 🗄️ Levantar la base de datos PostgreSQL

1. **Con Docker (opcional):**
   ```bash
   docker run --name postgres-api -e POSTGRES_PASSWORD=tu_password -e POSTGRES_DB=tu_basededatos -p 5432:5432 -d postgres:13
   ```

2. **Crea las tablas con Prisma:**
   ```bash
   npx prisma migrate dev --name init
   ```

---

## 🏁 Ejecución de la API

### En modo desarrollo:
```bash
npm run dev
```

### En modo producción:
```bash
npm run build
npm start
```

La API estará disponible en [http://localhost:3000](http://localhost:3000) (o el puerto que definas).

---

## 🧪 Probar los endpoints

Puedes usar **Postman**, **Insomnia** o `curl`.

### Ejemplo: Crear un TODO

**POST** `/api/todos`
```json
{
  "name": "Aprender Node.js"
}
```

### Ejemplo: Listar todos los TODOs

**GET** `/api/todos`

### Ejemplo: Obtener un TODO por ID

**GET** `/api/todos/1`

### Ejemplo: Actualizar un TODO

**PUT** `/api/todos/1`
```json
{
  "name": "Aprender Node.js avanzado"
}
```

### Ejemplo: Eliminar un TODO

**DELETE** `/api/todos/1`

---

## 📂 Estructura del proyecto

```
src/
  config/
  data/
  domain/
  presentation/
    todos/
    routes.ts
    server.ts
public/
  index.html
```

---

## 📝 Notas

- Puedes modificar la estructura y los endpoints según tus necesidades.
- El archivo `public/index.html` es la página de bienvenida de la API.
- La configuración de la base de datos se encuentra en el archivo `.env`.

---

## 🛠️ Scripts útiles

- `npm run dev` — Ejecuta la API en modo desarrollo con recarga automática.
- `npm run build` — Compila el proyecto a JavaScript.
- `npm start` — Ejecuta la API en modo producción.
- `npx prisma studio` — Abre una interfaz web para explorar la base de datos.

---

## 📖 Recursos

- [Documentación de Express (español)](https://expressjs.com/es/)
- [Documentación de Prisma (español)](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
- [Documentación de PostgreSQL (español)](https://www.postgresql.org/docs/es/)

---

¡Listo! Ahora puedes comenzar a desarrollar