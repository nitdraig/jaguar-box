const MotivationalQuote = require("../models/motivationalModels");

// Controlador para obtener una cita motivacional aleatoria
exports.getRandomMotivationalQuote = async (req, res) => {
  try {
    const count = await MotivationalQuote.countDocuments();
    const random = Math.floor(Math.random() * count);
    const quote = await MotivationalQuote.findOne().skip(random);
    res.json({ quote });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la cita motivacional" });
  }
};

exports.createMotivationalQuote = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "El campo 'text' es obligatorio" });
    }

    const newQuote = new MotivationalQuote({ text });
    await newQuote.save();

    res.status(201).json({
      message: "Cita motivacional creada exitosamente",
      quote: newQuote,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear la cita motivacional" });
  }
};
