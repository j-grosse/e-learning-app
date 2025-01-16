const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    id: { type: Number, required: [true, 'Id is required!'] },
    title: { type: String, required: [true, 'Title is required!'] },
    description: {
      type: String,
      required: [true, 'Description is required!'],
    },
    tutor: {
      type: String,
      required: [true, 'Instructor name is required!'],
    },
    image: { type: String },
    year: { type: Number, required: [true, 'Year is required!'] },
    category: { type: String },
    duration: {
      type: Number,
      required: [true, 'Duration is required!'],
    },
    price: { type: String, required: [true, 'Price is required!'] },
    rating: { type: Number },
    courseModules: [{ type: mongoose.Types.ObjectId, ref: 'CourseModule' }],
    // lessons: [{ type: mongoose.Types.ObjectId, ref: 'Lesson' }],
    // createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);
const model = mongoose.model('Course', courseSchema);
module.exports = model;
