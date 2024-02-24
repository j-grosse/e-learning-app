import React from 'react';
import CourseCardList from './CourseCardList';

const CoursesSection = ({ courses }) => {

  return (
    <>
      <CourseCardList courses={courses} />
    </>
  );
};

export default CoursesSection;
