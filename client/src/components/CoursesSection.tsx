import React, { useState, useEffect } from 'react';
import CoursesPlaceholder from '../assets/images/CoursesPlaceholder.png';
import CourseThumb from '../assets/images/thumb.png';
import CourseCard from './CourseCard';
import axios from 'axios';

const CoursesSection = () => {
  const [Courses, setCourses] = useState(null); // data from backend

  // const loadData = () => {
  //   axios
  //     .get(`http://localhost:8000/api/courses`)
  //     .then((res) => {
  //       setCourses(res.data);
  //       console.log('axios data from db:', '\n\n', res.data);
  //     })
  //     .catch((e) => console.log(e));
  // };

  const data = [
    {
      id: '1',
      title: 'HTML basics',
      image:
        'https://www.udacity.com/blog/wp-content/uploads/2020/06/HTML_Blog-scaled.jpeg',
      text: 'Learn the basics of HTML.',
    },
    {
      id: '2',
      title: 'CSS basics',
      image:
        'https://cdn-media-2.freecodecamp.org/w1280/5f9c9d7b740569d1a4ca3800.jpg',
      text: 'Fundamental of UX for Application design The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.',
    },
    {
      id: '3',
      title: 'Javascript basics',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fcoding-concept-html-code-coding-programming-concept-html-source-code-tilted-vector-illustration-155503904.jpg&f=1&nofb=1&ipt=3ac8ffd453ffda7c0ddc7f218474984acc961fa83fd356d3a181fd50c58c60db&ipo=images',
      text: 'Fundamental of UX for Application design The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.',
    },
    {
      id: '4',
      title: 'React basics',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fcoding-concept-html-code-coding-programming-concept-html-source-code-tilted-vector-illustration-155503904.jpg&f=1&nofb=1&ipt=3ac8ffd453ffda7c0ddc7f218474984acc961fa83fd356d3a181fd50c58c60db&ipo=images',
      text: 'Fundamental of UX for Application design The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.',
    },
  ];

  useEffect(() => {
    // loadData();
    setCourses(data);
  }, []);

  return (
    <>
      <div className="flex flex-row">
        {Courses &&
          Courses.map((course) => {
            return (
              <div key={course.id}>
                <CourseCard
                  image={course.image}
                  title={course.title}
                  text={course.text}
                  size="sm"
                />
              </div>
            );
          })}
      </div>
      
    </>
  );
};

export default CoursesSection;
