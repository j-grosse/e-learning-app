import { createContext, useEffect, useState } from 'react';
// import axios from '../axiosInstanceMockaroo'; // use this for Mockaroo API with loadMockarooData()
import axios from '../axiosInstance'; // use this for mongoDB with loadMongoData()

export const CoursesContext = createContext(null);

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState(null);

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
  const loadMongoData = () => {
    axios
      .get(`/api/courses`)
      .then((res) => {
        setCourses(res.data);
        // console.log('axios data from MongoDB Atlas:', '\n\n', res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (courses === null) {
      // loadMockarooData();
      loadMongoData();
    }
  }, [courses]);

  return (
    <>
      {/* {console.log('content of courses context:', { courses })} */}

      <CoursesContext.Provider value={courses}>
        {children}
      </CoursesContext.Provider>
    </>
  );
};

export default CoursesProvider;
