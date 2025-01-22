import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import axios from '../axiosInstance'; // use this for mongoDB with loadMongoData()
import { AuthContext, AuthContextType } from './AuthContext';

interface Enrollment {
  userId: string;
  courseId: string;
}

interface EnrollmentsContextType {
  enrollments: Enrollment[] | null;
  loading: boolean;
}

export const EnrollmentsContext = createContext<EnrollmentsContextType | null>(
  null
);

export const EnrollmentsProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useContext<AuthContextType>(AuthContext);
  const [enrollments, setEnrollments] = useState<Enrollment[] | null>(null);
  const [loading, setLoading] = useState(true);

  const loadMongoData = async () => {
    try {
      const res = await axios.get(`/api/enrollments`);
      setEnrollments(res.data);
      setLoading(false);
      console.log('Enrollments data from MongoDB Atlas:', '\n\n', res.data);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      // loadMockarooData();
      loadMongoData();
    }
  }, [user]);

  return (
    <>
      {/* {console.log('content of enrollments context:', { enrollments })} */}

      <EnrollmentsContext.Provider value={{ enrollments, loading }}>
        {children}
      </EnrollmentsContext.Provider>
    </>
  );
};

export default EnrollmentsProvider;
