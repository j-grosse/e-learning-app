import { useState, useContext, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext.tsx';
import { CoursesContext } from '@/context/CoursesContext.tsx';
import CourseIndex from './CourseIndex.tsx';
import CourseContent from './LessonContent.tsx';
import CourseCardHorizontal from '@/components/common/CourseCardHorizontal.tsx';
import ProgressDemo from '@/components/ProgressDemo.tsx';
import CourseModule from './CourseModule.tsx';

/**
 * Course Layout component displays the course index (TOC) and course content components side by side.
 * It gets the course data from the courses context and displays the content of the selected lesson.
 */

const CourseLayout = () => {
  const { courses, loading } = useContext(CoursesContext);
  const user = useContext(AuthContext);
  // const [selectedLesson, setSelectedLesson] = useState('');
  const navigate = useNavigate();

  const { id } = useParams(); // get course id from route params
  const course = courses ? courses.find((course) => course._id === id) : null;

  const { courseModuleId } = useParams();
  const courseModule = course
    ? course.courseModules.find(
        (courseModule) => courseModule._id === courseModuleId
      )
    : null;

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {course && courseModule && <CourseModule course courseModule />}

      {course && (
        <div className="flex flex-wrap gap-4">
          {/* Course Content */}
          <div className="bg-background border rounded-lg p-6 shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between text-xs">
                <div>
                  <h2 className="mb-3">{course.title}</h2>
                  <div className="flex gap-4">
                    <div className="w-24">
                      <ProgressDemo value={33} />
                    </div>
                    <p>
                      1 von {course.courseModules.length} Modulen abgeschlossen
                    </p>
                  </div>
                </div>
                <div>
                  <CourseCardHorizontal
                    course={course}
                    selectedCourse={null}
                    handleCourseSelect={null}
                  />
                </div>
              </div>
              <p>{course.description}</p>
              {/* Course modules */}
              <h2>Modules</h2>
              <ol className="ml-6 text-xl list-decimal">
                {course.courseModules.map((courseModule) => (
                  <Link
                    to={`/course/${course._id}/${courseModule._id}`}
                    // onClick={() => handleLessonSelect(lesson._id)}
                  >
                    <li key={courseModule._id}>{courseModule.title}</li>
                  </Link>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseLayout;
