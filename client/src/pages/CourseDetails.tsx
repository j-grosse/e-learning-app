import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { RxDividerVertical } from 'react-icons/rx';
import CourseData from '../components/CourseData';
import CourseAbout from '../components/CourseAbout';

const CourseDetails = () => {
  return (
    <>
      Home / courses / Mastering Data Modelling Fundamentals
      <CourseData />
      <CourseAbout/>
    </>
  );
};

export default CourseDetails;
