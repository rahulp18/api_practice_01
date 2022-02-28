const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name must be required'],
      trim: true,
      maxlength: [20, 'Length should be less than 20'],
    },
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', taskSchema);
