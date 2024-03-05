import React, { useState } from 'react';
import CourseCardList from './CourseCardList';
import { Button } from '@/components/ui/button';

const CoursesSection = ({ courses }) => {
  const [showCourses, setShowCourses] = useState(false);

  const loadCourses = () => {
    setShowCourses(true);
  };
  return (
    <div className="flex justify-center m-6">
      {!showCourses && (
        <Button className="hover:animate-beat" onClick={loadCourses}>
          Load Courses
        </Button>
      )}

      {showCourses && <CourseCardList courses={courses} />}
    </div>
  );
};

export default CoursesSection;
