import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  console.log('lessons:', course.lessons)

  return (
    <div className="flex flex-wrap m-3 overflow-hidden rounded-lg shadow-lg bg-card">
      <Link to={`/details/${course.id}`}>
        <div className="w-60">
          {/* Card-header */}
          <div className="relative w-full h-32 object-fit aspect-w-1 aspect-h-1">
            <img
              className="object-cover w-full h-24 transition-transform duration-500 transform aspect-w-1 aspect-h-1 hover:scale-125"
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
          <div className="px-6 py-4">
            {/* <p className="bg-green-100 text-green-500 px-2 py-0.5 mb-4">
              All Levels
            </p> */}
            <p className="font-light text-blue-400">{course.category}</p>
            <div className="mb-2 text-xl font-bold">{course.title}</div>
            <p className="overflow-hidden font-light min-h-40">
              {course.description}
            </p>
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
