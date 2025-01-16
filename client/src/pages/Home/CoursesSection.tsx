import React, { useState, useEffect } from 'react';
import CourseCardList from './CourseCardList';
import { Button } from '@/components/ui/button';

const CoursesSection = ({ courses }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foundCourses, setFoundCourses] = useState([]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const result =
      courses &&
      courses.filter((el) =>
        el.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    setFoundCourses(result);
  }, [searchQuery, courses]);

  return (
    <div className="flex flex-col items-center p-6 bg-secondary">
      <form className="my-6">
        <input
          type="text"
          placeholder="Search courses"
          value={searchQuery}
          onChange={handleChange}
          className="px-4 py-2 text-foreground dark:text-black border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
        />
      </form>

      <CourseCardList courses={foundCourses} />
    </div>
  );
};

export default CoursesSection;
