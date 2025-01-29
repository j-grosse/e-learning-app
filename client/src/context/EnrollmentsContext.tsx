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
  enrollmentDate: string;
  progress?: number;
  completedLessons?: number[];
  courseId: number;
}

export interface EnrollmentsContextType {
  enrollments: Enrollment[] | null;
  loading: boolean;
  enroll: (enrollment: Enrollment) => Promise<void>;
}

const defaultEnrollmentsContext: EnrollmentsContextType = {
  enrollments: null,
  loading: true,
  enroll: async () => {},
};

export const EnrollmentsContext = createContext<EnrollmentsContextType>(
  defaultEnrollmentsContext
);

export const EnrollmentsProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useContext<AuthContextType>(AuthContext);
  const [enrollments, setEnrollments] = useState<Enrollment[] | null>(null);
  const [loading, setLoading] = useState(true);

  const loadMongoData = async () => {
    setLoading(true);
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

  const enroll = async (enrollment: Enrollment) => {
    setLoading(true);
    try {
      const res = await axios.post('/api/enrollments', enrollment);
      setEnrollments((prev) => (prev ? [...prev, res.data] : [res.data])); // update local enrollments
      console.log(
        '🚀 ~ file: EnrollmentsContext.tsx:46 ~ enroll ~ enrollment:',
        enrollment
      );
      setLoading(false);
    } catch (error) {
      console.log(error.response);
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

      <EnrollmentsContext.Provider value={{ enrollments, loading, enroll }}>
        {children}
      </EnrollmentsContext.Provider>
    </>
  );
};

export default EnrollmentsProvider;
