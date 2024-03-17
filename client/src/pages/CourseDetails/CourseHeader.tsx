import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { RxDividerVertical } from 'react-icons/rx';

const CourseHeader = ({ course }) => {
  return (
    <>
      <div className="w-full bg-gray-200 dark:bg-gray-800">
        <div className="p-10 m-16 leading-10 tutor-course-top-info__content">
          <div className="tutor-course-top-info__badges">
            <span className="p-1 text-xs font-semibold text-yellow-100 bg-blue-600 onsale">
              -39%
            </span>
            <a className="ml-3 text-blue-600 badges-category" href="#">
              {course.category}
            </a>
          </div>
          <h1 className="text-3xl tutor-course-top-info__title">
            {course ? course.title : 'No course with this id found'}
          </h1>

          <div className="flex tutor-course-top-info__meta">
            <div className="flex items-center tutor-course-top-info__meta-instructor">
              <div className="w-8 h-8 overflow-hidden rounded-full instructor-avatar">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsm.askmen.com%2Ft%2Faskmen_in%2Farticle%2Ff%2Ffacebook-p%2Ffacebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg&f=1&nofb=1&ipt=3bb4f05da17a654779eaa91aa8a09590bec3c623406137e42bb9194dea51a769&ipo=images"
                  className="object-cover w-full h-full"
                  alt="tutor"
                  width="16"
                  height="16"
                />
              </div>
              <div className="ml-2 font-bold instructor-name">
                {course.tutor}
              </div>
              <RxDividerVertical className="text-2xl text-gray-500" />
            </div>
            <div className="tutor-course-top-info__meta-update">
              Last Update December 1, {course.year}
            </div>
          </div>

          <div className="flex items-center tutor-course-top-info__meta">
            <div className="flex items-center tutor-course-top-info__meta-rating">
              <div className="rating-average">
                <strong>{course.rating}</strong> /5
              </div>
              <div className="rating-star">
                <div className="flex ml-2 rating-label">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
              </div>

              <div className="ml-1 text-gray-500 rating-count">(8)</div>
            </div>
            <RxDividerVertical className="text-2xl text-gray-500" />
            <FaUserAlt className="ml-1 text-gray-500" />
            <div className="ml-4 text-gray-500 tutor-course-top-info__meta-action">
              8 already enrolled
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHeader;
