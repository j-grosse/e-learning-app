import React from 'react';
// import axios from 'axios';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ProgressDemo from '@/components/ProgressDemo';
import { Link } from 'react-router-dom';

/* The CourseIndex component displays a table of content / list of lessons for a given course.
 * It fetches lesson data from an API and displays it using an accordion UI.
 * It also displays a progress bar to show the user's progress in the course.
 */

const CourseIndex = ({ user, course, setSelectedLesson }) => {
  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setSelectedLesson('')}>
        <h2>{course.title}</h2>
      </div>
      <div className="my-6">
        <p className="mb-2">Progress: 33/100 </p>
        <ProgressDemo value={33} />
      </div>
      <p className="text-2xl">Modules</p>
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
                              onClick={() => setSelectedLesson(lesson._id)}
                            >
                              <p>{lesson.title}</p>
                            </div>
                            {/* <Link
                        to={`/lessons/${lesson._id}`}
                        onClick={() => setSelectedLesson(lesson._id)}
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
                              setSelectedLesson(module.lessons[0]._id)
                            }
                          >
                            <p>{module.lessons[0].title}</p>
                          </div>
                          <Link
                            to={`/lessons/${module.lessons[0]._id}`}
                            onClick={() =>
                              setSelectedLesson(module.lessons[0]._id)
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
