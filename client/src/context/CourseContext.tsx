import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
// import axios from '../axiosInstance'; // use this for mongoDB with loadMongoData()

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const loadMockarooData = () => {
      axios
        .get(`https://my.api.mockaroo.com/courses.json?key=2030e670`)
        .then((res) => {
          setCourses(res.data);
          console.log('axios data from Mockaroo.com:', '\n\n', res.data);
        })
        .catch((e) => console.log(e));
    };

    const loadMongoData = () => {
        axios
          .get(`/api/courses`)
          .then((res) => {
            setCourses(res.data);
            console.log('axios data from MongoDB Atlas:', '\n\n', res.data);
          })
          .catch((e) => console.log(e));
      };
      
      loadMockarooData();
    // loadMongoData();
    // setCourses(data); // use local array data instead of database data
  }, []);

  return (
    <CourseContext.Provider value={courses}>{children}</CourseContext.Provider>
  );
};

export default CourseProvider;