const express = require('express');
const router = express.Router();
const {
  createLesson,
  getAllLessons,
  getLessonById,
  updateLesson,
  deleteLesson,
} = require('../controllers/lessons');

// commented out to allow for api calls without the user being logged in:
// const authenticate = require('../middlewares/auth');
// router.use(authenticate);

router.get('/', getAllLessons);
router.get('/:id', getLessonById);
router.post('/', createLesson);
router.put('/:id', updateLesson);
router.delete('/:id', deleteLesson); 
module.exports = router;
