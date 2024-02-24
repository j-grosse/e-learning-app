import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CourseHeader from './CourseHeader';
import CourseAbout from './CourseAbout';
import CourseSidebar from './CourseSidebar';
// import data from '../../assets/courseData';
import { CourseContext } from '../../context/CourseContext';

const CourseDetails = () => {
  const courses = useContext(CourseContext);
  console.log('courses context:', courses);
  
  const { id } = useParams();
  const idNumber = parseInt(id);
  const course = courses && courses.find((el) => el.id === idNumber);
  console.log('course:', course);
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
