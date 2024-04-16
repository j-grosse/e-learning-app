import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ProgressDemo from '@/components/ProgressDemo';
import { Link } from 'react-router-dom';

const CourseIndex = ({ user, course }) => {
  const [lessons, setLessons] = useState(null);

  useEffect(() => {
      const fetchData = () => {
      axios
        .get(`/api/lessons/65f075d84c6ccdf6f54d124f`)
        .then((res) => console.log('lessons data:',res.data))
        // .then((res) => setLessons(res.data))
        .catch((e) => console.log(e.message));
      }
      fetchData();
  }, []);

  lessons && console.log('cours lessons:',course.lessons);
  return (
    <div>
      <h2>{course.title}</h2>
      <Accordion type="single" collapsible>
        {lessons &&
          lessons.map((lesson, index) => (
            <React.Fragment key={lesson._id}>
              <br />
              <ProgressDemo value={33} />
              <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <Link to={`/lessons/${lesson._id}`}>{lesson.title}</Link>
                </AccordionTrigger>
                <AccordionContent key={lesson._id}>
                  {/* <Link to={`/lessons/${lesson._id}`}> */}
                  {/* <Link to={`/lessons/${lesson._id}/${section._id}`}> */}
                  {lesson.title}
                  {/* </Link> */}
                  {lesson.text}
                </AccordionContent>
              </AccordionItem>
            </React.Fragment>
          ))}
      </Accordion>
      {/* <Accordion type="single" collapsible>
        <br />
        <ProgressDemo value={33} />
        <AccordionItem value="item-1">
          <AccordionTrigger><Link to="1">Lesson 1</Link></AccordionTrigger>
          <AccordionContent><Link to="1.1">Introduction</Link></AccordionContent>
          <AccordionContent><Link to="1.2">Overview</Link></AccordionContent>
          <AccordionContent><Link to="1.3">learning</Link></AccordionContent>
        </AccordionItem>
        <br />
        <ProgressDemo value={33} />
        <AccordionItem value="item-2">
          <AccordionTrigger><Link to="2">Lesson 2</Link></AccordionTrigger>
          <AccordionContent>Introduction</AccordionContent>
        </AccordionItem>
        <br />
        <ProgressDemo value={33} />
        <AccordionItem value="item-3">
          <AccordionTrigger><Link to="3">Lesson 3</Link></AccordionTrigger>
          <AccordionContent>Introduction</AccordionContent>
        </AccordionItem>
        <br />
        <ProgressDemo value={33} />
        <AccordionItem value="item-4">
          <AccordionTrigger><Link to="4">Lesson 4</Link></AccordionTrigger>
          <AccordionContent>Introduction</AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </div>
  );
};

export default CourseIndex;
