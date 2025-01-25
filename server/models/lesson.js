const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema(
  {
    courseModuleId: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseModule', required: false },
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
