const mongoose = require("mongoose");

const sharedTaskSchema = new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const SharedTask = mongoose.model("SharedTask", sharedTaskSchema);

module.exports = SharedTask;
