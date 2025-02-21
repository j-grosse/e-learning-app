import ProgressDemo from '@/components/ProgressDemo';
import LessonContent from './LessonContent';
import LessonsSidebar from './LessonsSidebar';

const CourseModule = ({ course, courseModule, lesson }) => {
  return (
    <div className="flex flex-col gap-3">
      {!lesson && (
        <>
          <div className="flex flex-col w-full bg-background border rounded-lg p-6 gap-4 shadow-lg">
            <div>
              <div className="flex flex-wrap justify-between text-xs gap-2 mb-4">
                <div>
                  <h2 className="mb-3">{courseModule.title}</h2>
                  <div className="flex gap-4">
                    <div className="w-24">
                      <ProgressDemo value={33} />
                    </div>
                    <p>
                      1 von {course.courseModules.length} Modulen abgeschlossen
                    </p>
                  </div>
                </div>

                <p>CourseModule Card</p>
              </div>
              <p>In this Module we dive deep into ...</p>
            </div>
          </div>

          <LessonsSidebar course={course} courseModule={courseModule} />
        </>
      )}

      {lesson && (
        <LessonContent
          course={course}
          courseModule={courseModule}
          lesson={lesson}
        />
      )}
    </div>
  );
};

export default CourseModule;
