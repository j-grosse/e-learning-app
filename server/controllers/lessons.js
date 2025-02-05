const Lesson = require('../models/lesson');

const createLesson = async (req, res) => {
  try {
    //req.user._id come from the auth middleware
    const newLesson = await Lesson.create({
      ...req.body,
      createdBy: req.user._id,
    });
    console.log(
      '🚀 ~ file: lessons.js:6 ~ createLesson ~ newLesson:',
      newLesson
    );

    res.status(201).json(newLesson);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getAllLessons = async (req, res) => {
  try {
    // const lessons = await Lesson.find().populate('createdBy', 'username email');
    const lessons = await Lesson.find();
    console.log(
      '🚀 ~ file lessons.js ~ loaded lessons',
      lessons.map((lesson) => lesson.id)
    );
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getLessonById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // await Lesson.findById(id)
    const lessons = await Lesson.find({ _id: id });

    console.log('🚀 ~ file: lessons.js:28 ~ getLessonById ~ lessons:', lessons);
    if (lessons.length === 0) {
      res.status(404).json({ message: 'Lesson Not Found' });
    }
    res.json(lessons[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLesson = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    // const updatedLesson = await Lesson.findByIdAndUpdate()
    const updatedLesson = await Lesson.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    console.log(
      '🚀 ~ file: lessons.js:46 ~ updateLesson ~ updatedLesson:',
      updatedLesson
    );
    if (!updatedLesson) {
      res.status(404).json({ message: 'Lesson Not Found' });
    }
    res.json(updatedLesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLesson = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // const deletedLesson = await Lesson.findByIdAndDelete()
    const deletedLesson = await Lesson.findOneAndDelete({ _id: id });
    console.log(
      '🚀 ~ file: lessons.js:62 ~ deleteLesson ~ deletedLesson:',
      deletedLesson
    );
    if (!deletedLesson) {
      res.status(404).json({ message: 'Lesson Not Found' });
    }
    res.json(deletedLesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLessons = async (req, res) => {
  try {
    const {
      params: { id: moduleId },
    } = req;
    // const deletedLesson = await Lesson.findByIdAndDelete()
    const deletedLessons = await Lesson.deleteMany({
      courseModuleId: { _id: moduleId },
    });
    console.log('deleted Lessons:', deletedLessons);
    if (deletedLessons.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: 'No lessons found for the given course module ID' });
    }

    if (!deletedLessons) {
      res.status(404).json({ message: 'Lesson Not Found' });
    }
    res.json(deletedLessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createLesson,
  getAllLessons,
  getLessonById,
  updateLesson,
  deleteLesson,
  deleteLessons,
};
