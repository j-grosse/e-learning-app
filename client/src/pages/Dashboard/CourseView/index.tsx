import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CoursesContext } from '@/context/CoursesContext.tsx';
import CourseModule from './CourseModule.tsx';
import CourseOverview from './CourseOverview.tsx';
import Breadcrumbs from '@/pages/Dashboard/CourseView/Breadcrumbs.tsx';

const CourseLayout = () => {
  const { courses, loading } = useContext(CoursesContext);
  const { id, courseModuleId, lessonId } = useParams();

  const course = courses ? courses.find((course) => course._id === id) : null;
  const courseModule = courseModuleId
    ? course.courseModules.find(
        (courseModule) => courseModule._id === courseModuleId
      )
    : null;

  const lesson = lessonId
    ? courseModule.lessons.find((lesson) => lesson._id === lessonId)
    : null;
  console.log('lesson:', lesson);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-wrap gap-4">
          <div className="mt-2">
            <Breadcrumbs
              course={course}
              courseModule={courseModule}
              lesson={lesson}
            />
          </div>

        <div className="w-full">
          {!courseModuleId && !lessonId && <CourseOverview course={course} />}

          {courseModuleId && !lessonId && (
            <CourseModule
              course={course}
              courseModule={courseModule}
              lesson={null}
            />
          )}

          {courseModuleId && lessonId && (
            <CourseModule
              course={course}
              courseModule={courseModule}
              lesson={lesson}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CourseLayout;
