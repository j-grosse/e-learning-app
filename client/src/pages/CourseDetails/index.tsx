import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CourseHeader from './CourseHeader';
import CourseAbout from './CourseAbout';
import CourseSidebar from './CourseSidebar';
// import data from '../../assets/courseData';
import { CoursesContext } from '../../context/CoursesContext';

const CourseDetails = () => {
  const {courses, loading} = useContext(CoursesContext);
  console.log('courses context:', courses);

  const { id } = useParams();
  const idNumber = parseInt(id);
  const course = courses && courses.find((el) => el.id === idNumber);
  // console.log('course:', course);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-gray-50 dark:bg-black">
      Home / courses / {course.title}
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
