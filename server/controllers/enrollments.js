const Enrollment = require('../models/enrollment');

const createEnrollment = async (req, res) => {
  try {
    //req.user._id come from the auth middleware
    const newEnrollment = await Enrollment.create({
      ...req.body,
      createdBy: req.user._id,
    });
    console.log(
      '🚀 ~ file: enrollments.js:6 ~ createEnrollment ~ newEnrollment:',
      newEnrollment
    );

    res.status(201).json(newEnrollment);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getAllEnrollments = async (req, res) => {
  try {
    // const enrollments = await Enrollment.find().populate('createdBy', 'username email');
    const enrollments = await Enrollment.find();
    console.log(
      '🚀 ~ file: controllers/enrollments.js enrolled courses:',
      enrollments.map((enrollment) => enrollment.courseId)
    );
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getEnrollmentById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // await Enrollment.findById(id)
    const enrollments = await Enrollment.find({ _id: id }).populate(
      'createdBy',
      'username email'
    );
    console.log(
      '🚀 ~ file: enrollments.js:28 ~ getEnrollmentById ~ enrollments:',
      enrollments
    );
    if (enrollments.length === 0) {
      res.status(404).json({ message: 'Enrollment Not Found' });
    }
    res.json(enrollments[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEnrollment = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    // const updatedEnrollment = await Enrollment.findByIdAndUpdate()
    const updatedEnrollment = await Enrollment.findOneAndUpdate(
      { _id: id },
      body,
      {
        new: true,
      }
    );
    console.log(
      '🚀 ~ file: enrollments.js:46 ~ updateEnrollment ~ updatedEnrollment:',
      updatedEnrollment
    );
    if (!updatedEnrollment) {
      res.status(404).json({ message: 'Enrollment Not Found' });
    }
    res.json(updatedEnrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEnrollment = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // const deletedEnrollment = await Enrollment.findByIdAndDelete()
    const deletedEnrollment = await Enrollment.findOneAndDelete({ _id: id });
    console.log(
      '🚀 ~ file: enrollments.js:62 ~ deleteEnrollment ~ deletedEnrollment:',
      deletedEnrollment
    );
    if (!deletedEnrollment) {
      res.status(404).json({ message: 'Enrollment Not Found' });
    }
    res.json(deletedEnrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
  updateEnrollment,
  deleteEnrollment,
};
