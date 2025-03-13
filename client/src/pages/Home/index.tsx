import { useContext } from 'react';
import { CoursesContext } from '../../context/CoursesContext';
import Hero from '../../components/common/Hero';
import CoursesSection from './CoursesSection';
import About from '../About';
import TestimonialSection from './TestimonialSection';

const Home = () => {
  const { courses } = useContext(CoursesContext);

  return (
    <div className="w-full h-auto min-h-screen max-w-screen">
      {/* {user && <UserProfile />} */}
      <Hero />

      <CoursesSection courses={courses} />
      <TestimonialSection />
    </div>
  );
};

export default Home;
