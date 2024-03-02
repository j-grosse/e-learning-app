import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ProgressDemo from '@/components/ProgressDemo';

const Course = () => {
  return (
    <div>
      <h2>Course</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Lesson 1</AccordionTrigger>
          <AccordionContent>Introduction</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Lesson 2</AccordionTrigger>
          <AccordionContent>Introduction</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Lesson 3</AccordionTrigger>
          <AccordionContent>Introduction</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Lesson 4</AccordionTrigger>
          <AccordionContent>Introduction</AccordionContent>
        </AccordionItem>
      </Accordion>

      <ProgressDemo value={33} />

    </div>
  );
};

export default Course;
