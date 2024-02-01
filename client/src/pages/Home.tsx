
import Hero from '../components/home/Hero';
import CoursesSection from '../components/CoursesSection';
import Userprofile from '../components/Userprofile';
import Header from '../components/home/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* {user && <Userprofile />} */}
      <Hero />
      <CoursesSection />

    </>
  );
};

export default Home;
