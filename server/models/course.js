const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    id: { type: Number, required: [true, 'Course id is Required!'] },
    title: { type: String, required: [true, 'Course Title is Required!'] },
    instructor: {
      type: String,
      required: [true, 'Course Author is Required!'],
    },
    description: {
      type: String,
      required: [true, 'Course Author is Required!'],
    },
    year: { type: Number, required: [true, 'Course Year is Required!'] },
    duration: { type: Number, required: [true, 'Course Year is Required!'] },
    price: { type: Number, required: [true, 'Course Year is Required!'] },
    // createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);
const model = mongoose.model('Course', courseSchema);
module.exports = model;
