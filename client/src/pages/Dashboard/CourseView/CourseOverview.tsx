import CourseCardHorizontal from '@/components/common/CourseCardHorizontal';
import ProgressDemo from '@/components/ProgressDemo';
import { Link } from 'react-router-dom';

const CourseOverview = ({ course }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col w-full bg-background border rounded-lg p-6 gap-4 shadow-lg">
        <div className="flex flex-wrap justify-between text-xs gap-2">
          <div>
            <h2 className="mb-3">{course.title}</h2>
            <div className="flex gap-4">
              <div className="w-24">
                <ProgressDemo value={33} />
              </div>
              <p>1 von {course.courseModules.length} Modulen abgeschlossen</p>
            </div>
          </div>

          <CourseCardHorizontal
            course={course}
            selectedCourse={null}
            handleCourseSelect={null}
          />
        </div>
        <p>{course.description}</p>
      </div>

      {/* Course modules */}
      <div className="flex flex-col gap-4 w-full bg-background border rounded-lg p-6 shadow-lg">
        <h2>Modules</h2>
        <ol className="ml-6 text-md list-decimal">
          {course.courseModules.map((courseModule) => (
            <Link
              to={`/dashboard/course/${course._id}/${courseModule._id}`}
              key={courseModule._id}
              // onClick={() => handleLessonSelect(lesson._id)}
              className='hover:text-gray-500'
            >
              <li>{courseModule.title}</li>
            </Link>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CourseOverview;
