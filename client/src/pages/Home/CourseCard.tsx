import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-wrap bg-gray-50 shadow-lg m-3 rounded-lg overflow-hidden">
      <Link to={`/details/${course.id}`}>
        <div className="w-60">
          {/* Card-header */}
          <div className="relative w-full object-fit h-32 aspect-w-1 aspect-h-1">
              <img
                className="w-full object-cover h-24 aspect-w-1 aspect-h-1 hover:scale-125 transform transition-transform duration-500"
                src={course.image}
                alt="image"
              />
              <span className="absolute top-0 left-0 bg-green-500 rounded-sm text-white text-sm px-2 py-0.5 m-3">
                NEW
              </span>
          </div>
          {/* Card body */}
          <div className="px-6 py-4">
            <p class="bg-green-100 text-green-500 px-2 py-0.5 mb-4">
              All Levels
            </p>
            <p class="text-blue-400 font-light">Programming</p>
            <div className="font-bold text-xl mb-2">{course.title}</div>
            <p className="min-h-40 overflow-hidden text-gray-600 font-light">
              {course.text}
            </p>
            <p className="font-bold text-xl mt-3">Free</p>
          </div>
          <div className="tutor-course-rating flex items-center mb-4">
            <div className="rating-star">
              <div className="rating-label flex ml-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
            <div className="rating-count ml-1 text-gray-500">(8)</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
