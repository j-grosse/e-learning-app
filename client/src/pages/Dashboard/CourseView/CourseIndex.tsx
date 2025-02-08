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
  // const [lessons, setLessons] = useState(course.lessons);
  // useEffect(() => {
  //   const fetchData = () => {
  //     axios
  //       .get(`/api/lessons/65f075d84c6ccdf6f54d124f`)
  //       .then((res) => console.log('lessons data:', res.data))
  //       // .then((res) => setLessons(res.data))
  //       .catch((e) => console.log(e.message));
  //   };
  //   fetchData();
  //   // console.log(lessons);
  // }, []);

  // console.log(course);
  // lessons && console.log('course lessons:', lessons);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="min-w-48 border rounded-lg p-3">
      <div className="cursor-pointer" onClick={() => setSelectedLesson('')}>
        <h2>{course.title}</h2>
      </div>
      <div className="my-6">
        <p className="mb-2">Progress: 33/100 </p>
        <ProgressDemo value={33} />
      </div>
      <p className="text-2xl">Modules</p>
      {/* modules */}
      {course.courseModules.map((module) => (
        <ol className="ml-6 text-xl list-decimal">
          <li>
            <Accordion key={module._id} type="single" collapsible>
              <AccordionItem value={module._id}>
                <AccordionTrigger>
                  <p className="text-left">{module.title}</p>
                </AccordionTrigger>
                  {/* lessons */}
                <AccordionContent>
                  {module.lessons &&
                    (module.lessons.length > 1 ? (
                      module.lessons.map((lesson) => (
                        <ol className="ml-6 text-lg list-decimal">
                          <li>
                            <React.Fragment key={lesson._id}>
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
                            </React.Fragment>
                          </li>
                        </ol>
                      ))
                    ) : module.lessons[0] !== undefined ? (
                      <React.Fragment key={module.lessons[0]._id}>
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
                      </React.Fragment>
                    ) : (
                      ''
                    ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        </ol>
      ))}
    </div>
  );
};

export default CourseIndex;
