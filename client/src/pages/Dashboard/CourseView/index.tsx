import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext.tsx';
import { CoursesContext } from '../../../context/CoursesContext.tsx';
import CourseIndex from './CourseIndex.tsx';
import CourseContent from './CourseContent.tsx';

/**
 *
 * Course Layout component displays the course index (TOC) and course content components side by side.
 * It gets the course data from the courses context and displays the content of the current lesson from the database.
 */

const CourseLayout = () => {
  const { courses, loading } = useContext(CoursesContext);
  const context = useContext(AuthContext);
  // console.log('courses context:', courses);
  const [selectedLesson, setSelectedLesson] = useState('');

  const { id } = useParams();
  const idNumber = parseInt(id);
  const course = courses && courses.find((el) => el.id === idNumber);
  // console.log('course:', course);
  // console.log('user:', context.user);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-wrap gap-12">
      {/* Course TOC */}
      <div className="md:w-4/12 max-w-[200px]">
        {course && (
          <CourseIndex
            user={context.user}
            course={course}
            setSelectedLesson={setSelectedLesson}
          />
        )}
      </div>
      {/* Course Content */}
      <div className="md:w-8/12 max-w-[500px]">
        {/* list selected lesson */}
        {selectedLesson ? (
          <CourseContent course={course} selectedLesson={selectedLesson} />
        ) : (
          <>
            <p>{course && course.description}</p>
            <img
              className="my-6 m-auto"
              src={course && course.image}
              alt={course.title}
            ></img>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseLayout;
