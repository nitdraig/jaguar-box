const express = require("express");
const router = express.Router();
const User = require("../models/usersModels");

// Ruta para registrar un nuevo usuario
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

module.exports = router;
