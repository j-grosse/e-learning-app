import { createContext, useEffect, useState } from 'react';
import axios from '../axiosInstance'; // use this for mongoDB with loadMongoData()

export const EnrollmentsContext = createContext(null);

const EnrollmentsProvider = ({ children }) => {
  const [enrollments, setEnrollments] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadMongoData = async () => {
    try {
      const res = await axios.get(`/api/enrollments`)
      setEnrollments(res.data);
      setLoading(false);
      // console.log('Enrollments data from MongoDB Atlas:', '\n\n', res.data);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (enrollments === null) {
      // loadMockarooData();
      loadMongoData();
    }
  }, [enrollments]);

  return (
    <>
      {/* {console.log('content of enrollments context:', { enrollments })} */}

      <EnrollmentsContext.Provider value={{enrollments, loading}}>
        {children}
      </EnrollmentsContext.Provider>
    </>
  );
};

export default EnrollmentsProvider;
