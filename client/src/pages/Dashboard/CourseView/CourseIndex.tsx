import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ProgressDemo from '@/components/ProgressDemo';
import { Link } from 'react-router-dom';

const CourseIndex = ({ user, course }) => {
  const { lessons } = course; // Assuming the lessons array is present in the 'course' object
  console.log(course.lessons);
  return (
    <div>
      <h2>{course.title}</h2>
      <Accordion type="single" collapsible>
        {lessons.map((lesson, index) => (
          <React.Fragment key={lesson._id}>
            <br />
            <ProgressDemo value={33} />
            <AccordionItem value={index + 1}>
              <AccordionTrigger>
                <Link to={`/lessons/${lesson._id}`}>{lesson.title}</Link>
              </AccordionTrigger>
              {lesson.sections.map((section) => (
                <AccordionContent key={section._id}>
                  <Link to={`/lessons/${lesson._id}/${section._id}`}>
                    {section.title}
                  </Link>
                </AccordionContent>
              ))}
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
