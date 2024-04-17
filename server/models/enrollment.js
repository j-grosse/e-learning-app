const mongoose = require('mongoose');

// the populated enrollment document for each of the user's enrolled courses looks something like this:
// enrollment = {
//   _id: 'enrollmentId',
//   userId: 'userId',
//   courseId: {
//     _id: 'courseId',
//     title: 'Course Title',
//     // Other course fields
//   },
//   enrollmentDate: '2022-01-01',
//   progress: ['Lesson 1', 'Lesson 2'],
//   completedLessons: [1, 2, 3],
//   createdAt: '2022-01-01T00:00:00.000Z',
//   updatedAt: '2022-01-01T00:00:00.000Z',
// };

const enrollmentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: [true, 'UserId is required!'] },
    courseId: { type: Number },
    enrollmentDate: {
      type: String,
    },
    // 'progress' contains the titles or identifiers of the lesson that the user is currently working on
    progress: {
      type: Number,
    },
    completedLessons: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);
const model = mongoose.model('Enrollment', enrollmentSchema);
module.exports = model;
