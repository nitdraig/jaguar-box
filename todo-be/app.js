const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/tasksRoutes");
const userRoutes = require("./routes/usersRoutes");

require("dotenv").config();
const app = express();
const cors = require("cors");

// Conecta a tu base de datos MongoDB (cambia la URL y el nombre de la base de datos según tu configuración)
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
  console.log("Conectado a MongoDB");
});

// ...
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// Configurar el middleware para manejar solicitudes JSON
app.use(express.json());
app.use(cors(corsOptions));

// Configurar las rutas de la API
app.use("/todo-app", apiRoutes);

// Configurar las rutas de usuario
app.use("/user", userRoutes);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
