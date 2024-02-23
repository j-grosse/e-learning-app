import React from 'react';
import { useParams } from 'react-router-dom';
import CourseHeader from './CourseHeader';
import CourseAbout from './CourseAbout';
import CourseSidebar from './CourseSidebar';
import data from '../../assets/courseData';

const CourseDetails = () => {
  const { id } = useParams();
  const course = data.find((el) => el.id === id);
  const ruler = 'border-gray-300 mx-4 my-4';

  return (
    <div className="bg-gray-50">
      Home / courses / Mastering Data Modelling Fundamentals
      <CourseHeader course={course} />
      <div className="flex">
        <div className="container">
          <CourseAbout course={course} />
        </div>
        <CourseSidebar course={course} />
      </div>
    </div>
  );
};

export default CourseDetails;
