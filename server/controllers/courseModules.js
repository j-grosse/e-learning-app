const CourseModule = require('../models/courseModule');

const createCourseModule = async (req, res) => {
  try {
    //req.user._id come from the auth middleware
    const newCourseModule = await CourseModule.create({
      ...req.body,
      // createdBy: req.user._id,
    });
    console.log(
      '🚀 ~ file: courseModules.js:6 ~ createCourseModule ~ newCourseModule:',
      newCourseModule
    );

    res.status(201).json(newCourseModule);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getAllCourseModules = async (req, res) => {
  try {
    // const courseModules = await CourseModule.find().populate('createdBy', 'username email');
    const courseModules = await CourseModule.find().populate('lessons');
    console.log(
      '🚀 ~ file courseModules.js ~ loaded courseModules',
      courseModules.map((courseModule) => courseModule.id)
    );
    res.json(courseModules);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getCourseModuleById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // await CourseModule.findById(id)
    const courseModules = await CourseModule.find({ _id: id }).populate(
      'lessons'
    );

    console.log(
      '🚀 ~ file: courseModules.js:28 ~ getCourseModuleById ~ courseModules:',
      courseModules
    );
    if (courseModules.length === 0) {
      res.status(404).json({ message: 'CourseModule Not Found' });
    }
    res.json(courseModules[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCourseModule = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    // const updatedCourseModule = await CourseModule.findByIdAndUpdate()
    const updatedCourseModule = await CourseModule.findOneAndUpdate(
      { _id: id },
      body,
      {
        new: true,
      }
    );
    console.log(
      '🚀 ~ file: courseModules.js:46 ~ updateCourseModule ~ updatedCourseModule:',
      updatedCourseModule
    );
    if (!updatedCourseModule) {
      res.status(404).json({ message: 'CourseModule Not Found' });
    }
    res.json(updatedCourseModule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addLesson = async (req, res) => {
  try {
    const {
      params: { id },
      body: { lessonId },
    } = req;

    const updatedCourseModule = await CourseModule.findOneAndUpdate(
      { _id: id },
      { $addToSet: { lessons: { _id: lessonId } } }, // Add lessonId object to lessons array if it doesn't exist
      {
        new: true, // Return the updated document
      }
    );

    if (!updatedCourseModule) {
      return res.status(404).json({ message: 'Course module not found' });
    }
    res.json(updatedCourseModule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeLesson = async (req, res) => {
  try {
    const {
      params: { id },
      body: { lessonId },
    } = req;

    const updatedCourseModule = await CourseModule.findOneAndUpdate(
      { _id: id },
      { $pull: { lessons: { _id: lessonId } } }, // Remove lessonId object from lessons array
      {
        new: true, // Return the updated document
      }
    );

    if (!updatedCourseModule) {
      return res.status(404).json({ message: 'Course module not found' });
    }
    res.json(updatedCourseModule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCourseModule = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // const deletedCourseModule = await CourseModule.findByIdAndDelete()
    const deletedCourseModule = await CourseModule.findOneAndDelete({
      _id: id,
    });
    console.log(
      '🚀 ~ file: courseModules.js:62 ~ deleteCourseModule ~ deletedCourseModule:',
      deletedCourseModule
    );
    if (!deletedCourseModule) {
      res.status(404).json({ message: 'CourseModule Not Found' });
    }
    res.json(deletedCourseModule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCourseModule,
  getAllCourseModules,
  getCourseModuleById,
  updateCourseModule,
  addLesson,
  removeLesson,
  deleteCourseModule,
};
