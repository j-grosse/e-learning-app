import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-wrap bg-gray-50 shadow-lg m-3 rounded-lg overflow-hidden">
      <Link to="/details/${course.id}">
        <div className="w-60">
          {/* Card-header */}
          <div className="relative w-full object-fit h-32 aspect-w-1 aspect-h-1">
            <a href={`/details/${course.id}`}>
              <img
                className="w-full object-cover h-24 aspect-w-1 aspect-h-1 hover:scale-125 transform transition-transform duration-500"
                src={course.image}
                alt="image"
              />
              <span className="absolute top-0 left-0 bg-green-500 rounded-sm text-white text-sm px-2 py-0.5 m-3">
                NEW
              </span>
            </a>
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

/* {
  <div class="col-xl-3 col-lg-4 col-sm-6">

                                <!-- Course Start -->
                                <div class="course-item-02 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                    <div class="course-header">
                                        <div class="course-header__thumbnail rounded-0">
                                            <a href="course-single-layout-01.html"><img src="assets/images/courses/courses-4.jpg" alt="courses" width="330" height="221"></a>
                                        </div>
                                        <div class="course-header__badge">
                                            <span class="free">Free</span>
                                        </div>
                                    </div>
                                    <div class="course-info-02">
                                        <span class="course-info-02__badge-text badge-all">All Levels</span>
                                        <div class="course-info-02__category">
                                            <a href="#">Communications</a>
                                        </div>
                                        <h3 class="course-info-02__title"><a href="course-single-layout-01.html">Successful Negotiation: Master Your Negotiating Skills</a></h3>
                                        <div class="course-info-02__description">
                                            <p>Negotiation is a skill well worth mastering – by putting …</p>
                                        </div>
                                        <div class="course-info-02__price">
                                            <span class="free">Free</span>
                                        </div>
                                        <div class="course-info-02__rating">

                                            <div class="rating-star">
                                                <div class="rating-label" style="width: 100%;"></div>
                                            </div>

                                            <span>(2)</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Course End -->

                            </div>
} */
