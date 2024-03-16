import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  console.log('lessons:', course.lessons)

  return (
    <div className="flex flex-wrap m-3 overflow-hidden rounded-lg">
      <Link to={`/details/${course.id}`}>
        <div className="w-60">
          {/* Card-header */}
          <div className="relative bg-yellow-300 w-full overflow-clip object-center aspect-[3/2]">
              <img
                className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110"
                src={course.image}
                alt="image"
              />
            {/* badge: NEW */}
            {course.year == new Date().getFullYear() && (
              <span className="absolute top-0 left-0 bg-green-500 rounded-sm text-sm px-2 py-0.5 m-3">
                NEW
              </span>
            )}
          </div>
          {/* Card body */}
          <div className="dark:text-foreground px-2 py-2">
            {/* <p className="bg-green-100 text-green-500 px-2 py-0.5 mb-4">
              All Levels
            </p> */}
            <p className="font-light text-blue-400">{course.category}</p>
            <div className="mb-2 text-xl font-bold">{course.title}</div>
            {/* <p className="overflow-hidden font-light min-h-40">
              {course.description}
            </p> */}
            <p className="mt-3 text-xl font-bold">{course.price} </p>
          </div>
          <div className="flex items-center mb-4 tutor-course-rating">
            <div className="rating-star">
              <div className="flex ml-2 rating-label">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
            <div className="ml-1 text-gray-500 rating-count">
              ({course.rating})
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
