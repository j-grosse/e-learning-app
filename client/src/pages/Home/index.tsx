import Hero from '../../components/common/Hero';
import CoursesSection from './CoursesSection';
import UserProfile from '../../components/UserProfile';
import Header from '../../components/common/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* {user && <UserProfile />} */}
      <Hero />
      <CoursesSection />
    </>
  );
};

export default Home;
