import { createContext, useEffect, useState } from 'react';
// import axios from '../axiosInstanceMockaroo'; // use this for Mockaroo API with loadMockarooData()
import axios from '../axiosInstance'; // use this for mongoDB with loadMongoData()

export const CoursesContext = createContext(null);

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  // const loadMockarooData = () => {
  //   axios
  //     .get(`https://my.api.mockaroo.com/courses.json?key=2030e670`)
  //     .then((res) => {
  //       setCourses(res.data);
  //       console.log('axios request to Mockaroo.com:', '\n\n', res.data);
  //     })
  //     .catch((error) => {
  //       if (error.response && error.response.status === 500) {
  //         console.log(
  //           'Error 500: Probably no more requests to Mockaroo.com allowed today.'
  //         );
  //       } else {
  //         console.log(error.message);
  //       }
  //     });
  // };

  const fetchCourses = async () => {
    try {
      const res = await axios.get(`/api/courses`);
      setCourses(res.data);
      setLoading(false);
      // console.log('Courses data from MongoDB Atlas:', '\n\n', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const createModule = async (newModule, courseId) => {
    setLoading(true);
    try {
      const res = await axios.post('/api/courseModules', newModule);
      console.log('Module created:', res.data);
      await addModule(res.data._id, courseId);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const addModule = async (newModuleId, courseId) => {
    try {
      const res = await axios.put(`/api/courses/${courseId}/addModule`, {
        courseModuleId: newModuleId,
      });
      console.log('Module added to course:', res.data);
      await fetchCourses(); // Reload courses after adding the module id
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const createLesson = async (newLesson, courseModuleId) => {
    setLoading(true);
    try {
      const res = await axios.post('/api/lessons', newLesson);
      console.log('Lesson created:', res.data);
      await addLesson(res.data._id, courseModuleId);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const addLesson = async (newLessonId, courseModuleId) => {
    try {
      const res = await axios.put(
        `/api/courseModules/${courseModuleId}/addLesson`,
        { lessonId: newLessonId }
      );
      console.log('Lesson added to course module:', res.data);
      await fetchCourses(); // Reload courses after adding the lesson id
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const updateLesson = async (lesson, lessonId) => {
    setLoading(true);
    try {
      const res = await axios.put(`/api/lessons/${lessonId}`, lesson);
      console.log('Lesson updated:', res.data);
      await fetchCourses(); // Reload courses after updating a lesson
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const updateModule = async (courseModule, courseModuleId) => {
    setLoading(true);
    try {
      const res = await axios.put(
        `/api/courseModules/${courseModuleId}`,
        courseModule
      );
      console.log('Module updated:', res.data);
      await fetchCourses(); // Reload courses after updating a course module
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const deleteLesson = async (lessonId, courseModuleId) => {
    setLoading(true);
    try {
      const res = await axios.delete(`/api/lessons/${lessonId}`);
      console.log('Lesson deleted:', res.data);
      await removeLesson(lessonId, courseModuleId);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const removeLesson = async (lessonId, courseModuleId) => {
    try {
      const res = await axios.put(
        `/api/courseModules/${courseModuleId}/removeLesson`,
        { lessonId: lessonId }
      );
      console.log(
        'Lesson removed from course module lessons array:',
        res.data.lessons
      );
      await fetchCourses(); // Reload courses after adding the lesson id
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  // DELETE MODULE

  const deleteModule = async (courseModuleId, courseId) => {
    setLoading(true);
    try {
      await removeLessonsFromModule(courseModuleId); // remove all
      await removeModuleFromCourse(courseModuleId, courseId);

      const res = await axios.delete(`/api/courseModules/${courseModuleId}`);
      console.log('Module deleted:', res.data);
      await fetchCourses(); // Reload courses after adding the lesson id
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const removeLessonsFromModule = async (courseModuleId) => {
    try {
      const res = await axios.delete(
        `/api/lessons/deleteLessons/${courseModuleId}`
      );
      console.log(
        'All lessons associated with the course module were deleted:',
        res.data
      );
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const removeModuleFromCourse = async (courseModuleId, courseId) => {
    try {
      const res = await axios.put(`/api/courses/${courseId}/removeModule`, {
        courseModuleId: courseModuleId,
      });
      console.log(
        `Module with ${courseModuleId} removed from course's courseModules array:`,
        res.data
      );
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  // END DELETE MODULE

  useEffect(() => {
    // if (courses === null) {
    // loadMockarooData();
    fetchCourses();
    // }
  }, []);

  return (
    <>
      {/* {console.log('content of courses context:', { courses })} */}

      <CoursesContext.Provider
        value={{
          courses,
          loading,
          createModule,
          createLesson,
          updateModule,
          updateLesson,
          deleteModule,
          deleteLesson,
        }}
      >
        {children}
      </CoursesContext.Provider>
    </>
  );
};

export default CoursesProvider;
