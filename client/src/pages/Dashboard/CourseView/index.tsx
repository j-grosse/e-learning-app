import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext.tsx';
import { CoursesContext } from '../../../context/CoursesContext.tsx';
import CourseIndex from './CourseIndex.tsx';
import CourseContent from './CourseContent.tsx';

const CourseLayout = () => {
  const courses = useContext(CoursesContext);
  const context = useContext(AuthContext);
  // console.log('courses context:', courses);

  const { id } = useParams();
  const idNumber = parseInt(id);
  const course = courses && courses.find((el) => el.id === idNumber);
  // console.log('course:', course);
  console.log('user:', context.user);

  return (
    <div className="flex w-full gap-8">
      <div className="w-3/12">
        {course && <CourseIndex user={context.user} course={course} />}
      </div>
      <div className="w-9/12">
        {/* list user's current lesson from db */}
        {course ? (
          <CourseContent course={course} />
        ) : (
          <p>Select a lesson to view its content.</p>
        )}
      </div>
    </div>
  );
};

export default CourseLayout;
