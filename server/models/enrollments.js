const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema(
  {
    courseId: { type: Number, required: [true, 'Course id is Required!'] },
    userId: { type: String, required: [true, 'UserId is Required!'] },
    enrollmentDate: {
      type: String,
      required: [false, 'not rquired!'],
    },
    progress: {
      type: String,
      required: [true, 'not required!'],
    },
    completedLessons: { type: Number, required: [false, 'not required!'] },
    // createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);
const model = mongoose.model('Enrollment', enrollmentSchema);
module.exports = model;
