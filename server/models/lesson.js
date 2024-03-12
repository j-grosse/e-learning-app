const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema(
  {
    courseId: { type: Number, required: [true, 'Course id is required!'] },
    title: { type: String, required: [true, 'Title is required!'] },
    text: {
      type: String,
    },
    videoUrls: [{
      type: String,
    }],
    attachmentUrls: [{ type: String }],
  },
  {
    timestamps: true,
  }
);
const model = mongoose.model('Lesson', lessonSchema);
module.exports = model;