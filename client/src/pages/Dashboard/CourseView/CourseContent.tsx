import React from 'react';
// import VideoPlaceholder from '../../../assets/images/VideoPlaceholder.png';

const CourseContent = ({ course }) => {
  return (
    <div>
      <h2>Introduction</h2>
      <br />
      <img src={course.image} />
      {/* <br /> */}
      {/* <img src={VideoPlaceholder} /> */}
    </div>
  );
};

export default CourseContent;
