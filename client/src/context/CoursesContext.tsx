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

  const createLesson = async (newLesson, courseModuleId) => {
    setLoading(true);
    try {
      const res = await axios.post('/api/lessons', newLesson);
      console.log('Lesson created:', res.data);
      console.log('ids:', res.data._id, courseModuleId);
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

  const deleteLesson = async (lessonId, courseModuleId) => {
    setLoading(true);
    try {
      const res = await axios.delete(`/api/lessons/${lessonId}`);
      console.log('Lesson deleted:', res.data);
      console.log('ids:', res.data._id, courseModuleId);
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
      console.log('Lesson removed from course module lessons array:', res.data.lessons);
      await fetchCourses(); // Reload courses after adding the lesson id
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

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
          createLesson,
          updateLesson,
          deleteLesson,
        }}
      >
        {children}
      </CoursesContext.Provider>
    </>
  );
};

export default CoursesProvider;
