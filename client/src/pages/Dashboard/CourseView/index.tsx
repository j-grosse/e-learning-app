import { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext.tsx';
import { CoursesContext } from '@/context/CoursesContext.tsx';
import CourseIndex from './CourseIndex.tsx';
import CourseContent from './CourseContent.tsx';

/**
 * Course Layout component displays the course index (TOC) and course content components side by side.
 * It gets the course data from the courses context and displays the content of the selected lesson.
 */

const CourseLayout = () => {
  const { courses, loading } = useContext(CoursesContext);
  const user = useContext(AuthContext);
  const [selectedLesson, setSelectedLesson] = useState('');

  const { id } = useParams(); // get course id from route params
  const idNumber = parseInt(id);
  const course = courses ? courses.find((el) => el.id === idNumber) : null;

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {/* Course TOC */}
        <div className="md:max-w-[20%] border rounded-lg p-3 shadow-lg">
          <Link to="/dashboard/course">
            <p className="pb-3 mx-auto hover:text-gray-500">&lt; back</p>
          </Link>
          {course && (
            <CourseIndex
              user={user}
              course={course}
              setSelectedLesson={setSelectedLesson}
            />
          )}
        </div>
        {/* Course Content */}
        <div className="md:max-w-[70%] border rounded-lg p-4 shadow-lg">
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
    </>
  );
};

export default CourseLayout;
