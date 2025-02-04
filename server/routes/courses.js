const express = require('express');
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  addCourseModule,
  deleteCourse,
} = require('../controllers/courses');

// commented out to allow for api calls without the user being logged in:
// const authenticate = require('../middlewares/auth');
// router.use(authenticate);

router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.put('/:id/addModule', addCourseModule);
router.delete('/:id', deleteCourse);

module.exports = router;
