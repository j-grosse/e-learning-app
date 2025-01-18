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

  console.log(course);
  // lessons && console.log('course lessons:', lessons);

  if (!course) return <div>Loading...</div>;

  return (
    <>
      <h2>{course.title}</h2>
      <div className="my-6">
        <ProgressDemo value={33} />
      </div>
      {course.courseModules.map((module) => (
        <div key={module._id}>
          <h3>{module.title}</h3>
          {module.lessons &&
            (module.lessons.length > 1 ? (
              module.lessons.map((lesson) => (
                <Accordion key={lesson._id} type="single" collapsible>
                  <p onClick={() => setSelectedLesson(lesson._id)}>
                    {lesson.text}
                  </p>
                  <React.Fragment key={lesson._id}>
                    <br />
                    <AccordionItem value={lesson._id}>
                      <AccordionTrigger>{lesson.title}</AccordionTrigger>
                      <AccordionContent key={lesson._id}>
                        <p>{lesson.description}</p>
                        <Link
                          to={`/lessons/${lesson._id}`}
                          onClick={() => setSelectedLesson(lesson._id)}
                        >
                          {lesson.text}
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </React.Fragment>
                </Accordion>
              ))
            ) : (
              <Accordion type="single" collapsible>
                <p onClick={() => setSelectedLesson(module.lessons[0]._id)}>
                  {module.lessons[0].text}
                </p>
                <React.Fragment key={module.lessons[0]._id}>
                  <br />
                  <AccordionItem value={module.lessons[0]._id}>
                    <AccordionTrigger>
                      {module.lessons[0].title}
                    </AccordionTrigger>
                    <AccordionContent key={module.lessons[0]._id}>
                      <p>{module.lessons[0].description}</p>
                      <Link
                        to={`/lessons/${module.lessons[0]._id}`}
                        onClick={() => setSelectedLesson(module.lessons[0]._id)}
                      >
                        {module.lessons[0].text}
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </React.Fragment>
              </Accordion>
            ))}
        </div>
      ))}
    </>
  );
};

export default CourseIndex;
