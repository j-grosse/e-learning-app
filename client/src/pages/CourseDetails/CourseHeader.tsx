import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { RxDividerVertical } from 'react-icons/rx';

const CourseHeader = ( { course }) => {

  return (
    <>
      <div className='bg-gray-200 w-full'>
        <div className="tutor-course-top-info__content m-16 leading-10 p-10">
          <div className="tutor-course-top-info__badges">
            <span className="onsale bg-blue-600 p-1 font-semibold text-yellow-100 text-xs">
              -39%
            </span>
            <a className="badges-category text-blue-600 ml-3" href="#">
              Data Modeling
            </a>
          </div>
          <h1 className="tutor-course-top-info__title text-3xl">
          {course ? course.title : 'No course with this id found'}
          </h1>

          <div className="tutor-course-top-info__meta flex">
            <div className="tutor-course-top-info__meta-instructor flex items-center">
              <div className="instructor-avatar rounded-full overflow-hidden h-8 w-8">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsm.askmen.com%2Ft%2Faskmen_in%2Farticle%2Ff%2Ffacebook-p%2Ffacebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg&f=1&nofb=1&ipt=3bb4f05da17a654779eaa91aa8a09590bec3c623406137e42bb9194dea51a769&ipo=images"
                  className="object-cover h-full w-full"
                  alt="Instructor"
                  width="16"
                  height="16"
                />
              </div>
              <div className="instructor-name font-bold ml-2">Owen Christ</div>
              <RxDividerVertical className="text-gray-500 text-2xl" />
            </div>
            <div className="tutor-course-top-info__meta-update">
              Last Update December 1, 2023
            </div>
          </div>

          <div className="tutor-course-top-info__meta flex items-center">
            <div className="tutor-course-top-info__meta-rating flex items-center">
              <div className="rating-average">
                <strong>4.38</strong> /5
              </div>
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
            <RxDividerVertical className="text-gray-500 text-2xl" />
            <FaUserAlt className="text-gray-500 ml-1" />
            <div className="tutor-course-top-info__meta-action text-gray-500 ml-4">
              0 already enrolled
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHeader;
