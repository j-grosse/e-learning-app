import { createContext, useEffect, useState } from 'react';
// import axios from '../axiosInstanceMockaroo'; // use this for Mockaroo API with loadMockarooData()
import axios from '../axiosInstance'; // use this for mongoDB with loadMongoData()

export const EnrollmentsContext = createContext(null);

const EnrollmentsProvider = ({ children }) => {
  const [enrollments, setEnrollments] = useState(null);

  // const loadMockarooData = () => {
  //   axios
  //     .get(`https://my.api.mockaroo.com/enrollments.json?key=2030e670`)
  //     .then((res) => {
  //       setEnrollments(res.data);
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

  // setEnrollments(data); // use local array data instead of database data

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
