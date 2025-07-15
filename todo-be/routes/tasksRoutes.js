const express = require("express");
const router = express.Router();
const Task = require("../models/tasksModels");
const motivationalController = require("../controllers/motivationalControllers");

// Ruta para obtener todas las tareas
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    res.status(500).send("Error interno del servidor");
  }
});

// Ruta para crear una nueva tarea
router.post("/tasks", async (req, res) => {
  const { title, description, completed } = req.body;
  try {
    const newTask = new Task({ title, description, completed });
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    console.error("Error al crear la tarea:", error);
    res.status(500).send("Error interno del servidor");
  }
});

// Ruta para obtener una tarea por su ID
router.get("/tasks/:taskId", async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).send("Tarea no encontrada");
    }
    res.json(task);
  } catch (error) {
    console.error("Error al obtener la tarea por ID:", error);
    res.status(500).send("Error interno del servidor");
  }
});

// Ruta para actualizar una tarea por su ID
router.put("/tasks/:taskId", async (req, res) => {
  const taskId = req.params.taskId;
  const { title, description, completed } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, description, completed },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).send("Tarea no encontrada");
    }
    res.json(updatedTask);
  } catch (error) {
    console.error("Error al actualizar la tarea por ID:", error);
    res.status(500).send("Error interno del servidor");
  }
});

// Ruta para eliminar una tarea por su ID
router.delete("/tasks/:taskId", async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const deletedTask = await Task.findByIdAndRemove(taskId);
    if (!deletedTask) {
      return res.status(404).send("Tarea no encontrada");
    }
    res.json(deletedTask);
  } catch (error) {
    console.error("Error al eliminar la tarea por ID:", error);
    res.status(500).send("Error interno del servidor");
  }
});

// Ruta para obtener una cita motivacional aleatoria
router.get(
  "/motivational-quote",
  motivationalController.getRandomMotivationalQuote
);
router.post(
  "/motivational-quote",
  motivationalController.createMotivationalQuote
);

module.exports = router;
