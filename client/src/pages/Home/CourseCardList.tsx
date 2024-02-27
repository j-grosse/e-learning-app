import React from 'react';
import CoursesPlaceholder from '../assets/images/CoursesPlaceholder.png';
import CourseThumb from '../assets/images/thumb.png';
import CourseCard from './CourseCard';

const CourseCardList = ({ courses }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-around w-full h-full m-5">
        {console.log('content of courses state:', { courses })}
        {courses &&
          courses.map((course) => {
            return (
              <div key={course.id}>
                <CourseCard course={course} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CourseCardList;
