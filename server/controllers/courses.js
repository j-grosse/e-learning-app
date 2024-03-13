const Course = require('../models/course');

const createCourse = async (req, res) => {
  try {
    //req.user._id come from the auth middleware
    const newCourse = await Course.create({
      ...req.body,
      createdBy: req.user._id,
    });
    console.log(
      '🚀 ~ file: courses.js:6 ~ createCourse ~ newCourse:',
      newCourse
    );

    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getAllCourses = async (req, res) => {
  try {
    // const courses = await Course.find().populate('createdBy', 'username email');
    const courses = await Course.find();
    console.log(
      '🚀 ~ file courses.js ~ loaded courses',
      courses.map((course) => course.id)
    );
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getCourseById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // await Course.findById(id)
    const courses = await Course.find({ _id: id }).populate(
      'createdBy',
      'username email'
    );
    console.log('🚀 ~ file: courses.js:28 ~ getCourseById ~ courses:', courses);
    if (courses.length === 0) {
      res.status(404).json({ message: 'Course Not Found' });
    }
    res.json(courses[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    // const updatedCourse = await Course.findByIdAndUpdate()
    const updatedCourse = await Course.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    console.log(
      '🚀 ~ file: courses.js:46 ~ updateCourse ~ updatedCourse:',
      updatedCourse
    );
    if (!updatedCourse) {
      res.status(404).json({ message: 'Course Not Found' });
    }
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // const deletedCourse = await Course.findByIdAndDelete()
    const deletedCourse = await Course.findOneAndDelete({ _id: id });
    console.log(
      '🚀 ~ file: courses.js:62 ~ deleteCourse ~ deletedCourse:',
      deletedCourse
    );
    if (!deletedCourse) {
      res.status(404).json({ message: 'Course Not Found' });
    }
    res.json(deletedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
