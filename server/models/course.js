const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Course Title is Required!'] },
    // author: { type: String, required: [true, 'Course Author is Required!'] },
    // year: { type: Number, required: [true, 'Course Year is Required!'] },
    // createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);
const model = mongoose.model('Course', courseSchema);
module.exports = model;
