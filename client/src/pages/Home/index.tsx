import React, { useContext } from 'react';
import { CoursesContext } from '../../context/CoursesContext';
import Hero from '../../components/common/Hero';
import CoursesSection from './CoursesSection';

const Home = () => {
  const { courses, loading } = useContext(CoursesContext);

  return (
    <div className="w-full h-auto min-h-screen max-w-screen">
      {/* {user && <UserProfile />} */}
      <Hero />

      <CoursesSection courses={courses} />
      {/* <TestimonialsSection /> */}
    </div>
  );
};

export default Home;
