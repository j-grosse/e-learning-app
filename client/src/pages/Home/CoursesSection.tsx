import React, { useState, useEffect } from 'react';
import CoursesPlaceholder from '../assets/images/CoursesPlaceholder.png';
import CourseThumb from '../assets/images/thumb.png';
import CourseCard from './CourseCard';
import axios from 'axios';
import data from '../../assets/courseData';

const CoursesSection = () => {
  const [Courses, setCourses] = useState(null); // data from backend

  // const loadData = () => {
  //   axios
  //     .get(`/api/courses`)
  //     .then((res) => {
  //       setCourses(res.data);
  //       console.log('axios data from db:', '\n\n', res.data);
  //     })
  //     .catch((e) => console.log(e));
  // };

  useEffect(() => {
    // loadData();
    setCourses(data); // use local array data instead of database data
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-around w-full h-full m-5">
        {Courses &&
          Courses.map((course) => {
            return (
              <div key={course.id}>
                <CourseCard course={course} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CoursesSection;
