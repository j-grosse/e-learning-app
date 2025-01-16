const mongoose = require('mongoose');

const courseModuleSchema = new mongoose.Schema(
  {
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    title: { type: String, required: [true, 'Title is required!'] },
    lessons: [{ type: mongoose.Types.ObjectId, ref: 'Lesson' }],
  },

  {
    timestamps: true,
  }
);
const model = mongoose.model('CourseModule', courseModuleSchema);
module.exports = model;
