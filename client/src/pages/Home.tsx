
import Hero from '../components/home/Hero';
import Courses from '../components/Courses';
import Userprofile from '../components/Userprofile';
import Header from '../components/home/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* {user && <Userprofile />} */}
      <Hero />
      <Courses />

    </>
  );
};

export default Home;
