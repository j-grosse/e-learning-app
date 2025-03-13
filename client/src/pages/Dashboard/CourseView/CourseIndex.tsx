import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

/*
 * Component is currently not used.
 * The CourseIndex component displays a table of content / list of modules
 * and lessons of a course.
 */

const CourseIndex = ({ course, handleLessonSelect }) => {
  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <div className="cursor-pointer" onClick={() => handleLessonSelect('')}>
        <h2>Content</h2>
      </div>

      {/* <p className="text-2xl">Modules</p> */}
      {/* modules */}
      <ol className="ml-6 text-xl list-decimal">
        {course.courseModules.map((module) => (
          <li key={module._id}>
            <Accordion key={module._id} type="single" collapsible>
              <AccordionItem value={module._id}>
                <AccordionTrigger>
                  <p className="text-left">{module.title}</p>
                </AccordionTrigger>

                {/* lessons */}

                <AccordionContent>
                  <ol className="ml-6 text-lg list-decimal">
                    {module.lessons &&
                      (module.lessons.length > 1 ? (
                        module.lessons.map((lesson) => (
                          <li key={lesson._id}>
                            <div
                              className="cursor-pointer hover:text-gray-500"
                              onClick={() => handleLessonSelect(lesson._id)}
                            >
                              <p>{lesson.title}</p>
                            </div>
                            {/* <Link
                        to={`/lessons/${lesson._id}`}
                        onClick={() => handleLessonSelect(lesson._id)}
                      >
                        lesson link
                      </Link> */}
                          </li>
                        ))
                      ) : module.lessons[0] !== undefined ? (
                        <li key={module.lessons[0]._id}>
                          <div
                            className="cursor-pointer"
                            onClick={() =>
                              handleLessonSelect(module.lessons[0]._id)
                            }
                          >
                            <p>{module.lessons[0].title}</p>
                          </div>
                          <Link
                            to={`/lessons/${module.lessons[0]._id}`}
                            onClick={() =>
                              handleLessonSelect(module.lessons[0]._id)
                            }
                          ></Link>
                        </li>
                      ) : (
                        ''
                      ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CourseIndex;
