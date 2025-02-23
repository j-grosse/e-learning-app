const express = require('express');
const router = express.Router();
const {
  createCourseModule,
  getAllCourseModules,
  getCourseModuleById,
  updateCourseModule,
  addLesson,
  removeLesson,
  deleteCourseModule,
} = require('../controllers/courseModules');

// commented out to allow for api calls without the user being logged in:
// const authenticate = require('../middlewares/auth');
// router.use(authenticate);

router.get('/', getAllCourseModules);
router.get('/:id', getCourseModuleById);
router.post('/', createCourseModule);
router.put('/:id', updateCourseModule);
router.put('/:id/addLesson', addLesson);
router.put('/:id/removeLesson', removeLesson);
router.delete('/:id', deleteCourseModule);
module.exports = router;
