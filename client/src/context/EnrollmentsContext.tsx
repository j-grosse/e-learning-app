import { createContext, useEffect, useState } from 'react';
import axios from '../axiosInstance'; // use this for mongoDB with loadMongoData()

export const EnrollmentsContext = createContext(null);

const EnrollmentsProvider = ({ children }) => {
  const [enrollments, setEnrollments] = useState(null);

  const loadMongoData = () => {
    axios
      .get(`/api/enrollments`)
      .then((res) => {
        setEnrollments(res.data);
        console.log('Enrollments data from MongoDB Atlas:', '\n\n', res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (enrollments === null) {
      // loadMockarooData();
      loadMongoData();
    }
  }, [enrollments]);

  return (
    <>
      {console.log('content of enrollments context:', { enrollments })}

      <EnrollmentsContext.Provider value={enrollments}>
        {children}
      </EnrollmentsContext.Provider>
    </>
  );
};

export default EnrollmentsProvider;
