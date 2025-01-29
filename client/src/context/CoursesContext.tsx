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
      console.log('Courses data from MongoDB Atlas:', '\n\n', res.data);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const createLesson = async (lesson) => {
    setLoading(true);
    try {
      const res = await axios.post('/api/lessons', lesson);
      console.log('Lesson created:', res.data);
      // TODO: implement add lesson to courseModules controller and route in courseModules backend
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
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (courses === null) {
      // loadMockarooData();
      fetchCourses();
    }
  }, [courses]);

  return (
    <>
      {/* {console.log('content of courses context:', { courses })} */}

      <CoursesContext.Provider
        value={{ courses, loading, createLesson, updateLesson }}
      >
        {children}
      </CoursesContext.Provider>
    </>
  );
};

export default CoursesProvider;
