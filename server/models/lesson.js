const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema(
  {
    courseId: { type: Number, required: [true, 'Course id is Required!'] },
    title: { type: String, required: [true, 'Lesson Title is Required!'] },
    content: {
      type: String,
      required: [true, 'Content is Required!'],
    },
    videoUrl: {
      type: String,
      required: [false, 'not required!'],
    },
    attachments: { type: Number, required: [false, 'not required!'] },
    // createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);
const model = mongoose.model('Lesson', lessonSchema);
module.exports = model;
