import React, { useContext } from 'react';
import { CourseContext } from '../../context/CourseContext';
import Hero from '../../components/common/Hero';
import CoursesSection from './CoursesSection';

const Home = () => {
  const courses = useContext(CourseContext);

  return (
    <>
      {/* {user && <UserProfile />} */}
      <Hero />
      <CoursesSection courses={courses} />
      {/* <TestimonialsSection /> */}
    </>
  );
};

export default Home;
