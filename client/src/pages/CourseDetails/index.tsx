import React from 'react';
import { useParams } from 'react-router-dom';
import {
  FaCheck,
  FaGlobe,
  FaPlayCircle,
  FaShoppingBasket,
  FaTag,
  FaUserAlt,
} from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { RxDividerVertical } from 'react-icons/rx';
import { FaSlidersH } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import CourseHeader from './CourseHeader';
import CourseAbout from './CourseAbout';
import data from '../../assets/courseData';
import thumbnail from '../../assets/images/thumb.png';

const CourseDetails = () => {
  const { id } = useParams();
  const course = data.find((el) => el.id === id);
  const ruler = 'border-gray-300 mx-4 my-4';

  return (
    <>
      Home / courses / Mastering Data Modelling Fundamentals
      <CourseHeader course={course} />
      <div
        className="flex tutor-course-main-content section-padding-01 sticky-parent"
        style={{ position: 'relative' }}
      >
        <div className="container custom-container lg:col-span-4">
          <CourseAbout course={course} />
        </div>

        {/* <!-- Tutor Course Sidebar Start --> */}
        <div className="lg:col-span-4">
          <div className="sidebar-sticky sticky top-0 z-50 bg-white">
            {/* <!-- Tutor Course Sidebar Frames Start --> */}
            <div className="tutor-course-sidebar mr-10">
              {/*  */}
              {/* <!-- Tutor Course Price Preview Start --> */}
              <div className="tutor-course-price-preview border-2 mb-4 p-4 bg-gray-50">
              {/* Video Preview Window */}
                <div className="tutor-course-price-preview__thumbnail">
                  <div className="ratio ratio-16x9 border-2">
                    <img src={thumbnail}/>
                    {/* <iframe
                          width="1280"
                          height="720"
                          src="https://www.youtube.com/embed/qKWnFRnjkA0"
                          title="What Is Data Modeling? 2 Minute erwin Expert Explanation"
                          frameBorder="1"
                          allow="web-share"
                          allowFullScreen
                        ></iframe> */}
                  </div>
                </div>
                <div className="tutor-course-price-preview__price flex justify-between mx-8 my-5 gap-4">
                  <div className="tutor-course-price flex">
                    <h2 className="sale-price text-red-600 font-bold">
                      €49.00
                    </h2>
                    <span className="regular-price line-through text-thin self-end ml-4">
                      €79.00
                    </span>
                  </div>
                  <div className="tutor-course-price-badge text-blue-600 text-center font-thin text-sm border-2 px-3 rounded-sm self-end">
                    39% OFF
                  </div>
                </div>

                <div className="tutor-course-price-preview__meta">
                  <ul className="tutor-course-meta-list flex flex-col font-thin mx-8 gap-3">
                    <li className="flex justify-between">
                      <div className="flex gap-4 items-center">
                        <FaSlidersH />
                        Level
                      </div>
                      <div className="value">Beginner</div>
                    </li>
                    <hr className="{ruler}" />

                    <li className="flex justify-between">
                      <div className="flex gap-4 items-center">
                        <FaClock /> Duration
                      </div>
                      <div className="value">15.3 hours</div>
                    </li>
                    <hr className="{ruler}" />

                    <li className="flex justify-between">
                      <div className="flex gap-4 items-center">
                        <FaPlayCircle /> Lectures
                      </div>
                      <div className="value">4 lectures</div>
                    </li>
                    <hr className="{ruler}" />

                    <li className="flex justify-between">
                      <div className="flex gap-4 items-center">
                        <FaTag /> Subject
                      </div>
                      <div className="value">
                        <a href="#">Data Modeling</a>
                      </div>
                    </li>
                    <hr className="{ruler}" />

                    <li className="flex justify-between">
                      <div className="flex gap-4 items-center">
                        <FaGlobe /> Language
                      </div>
                      <div className="value">Russian</div>
                    </li>
                    <hr className="{ruler}" />
                  </ul>
                </div>
                <div className="tutor-course-segment mx-8 ">
                  <h2 className="tutor-course-segment__title text-lg my-4">
                    Material Includes
                  </h2>

                  <ul className="tutor-course-segment__list-style-01 font-thin mb-4">
                    <li className="flex gap-3 items-center">
                      <FaCheck />
                      <p>Videos</p>
                    </li>
                    <li className="flex gap-3 items-center">
                      <FaCheck />
                      <p>Booklets</p>
                    </li>
                  </ul>
                </div>
                <div className="tutor-course-price-preview__btn mx-8">
                  <button className="btn btn-primary btn-hover-secondary flex bg-blue-500 text-white items-center justify-center gap-3 p-3 w-full rounded-md">
                    <FaShoppingBasket /> Add to cart
                  </button>
                  <button className="btn btn-primary btn-hover-secondary flex bg-gray-100 text-blue-500 items-center justify-center gap-3 p-3 w-full rounded-md">
                    Add to wishlist
                  </button>
                </div>
                <div className="tutor-course-price-preview__social">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-tumblr"></i>
                  </a>
                </div>
              </div>
              {/* <!-- Tutor Course Price Preview End --> */}

              {/* <!-- Sidebar Widget Start --> */}
              <div className="sidebar-widget border-2 p-4 bg-gray-50">
                <h2 className="sidebar-widget__title">Course categories</h2>

                <ul className="sidebar-widget__link">
                  <li>
                    <a href="#">Art &amp; Design</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Data Science</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Finance</a>
                  </li>
                  <li>
                    <a href="#">Health &amp; Fitness</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Music</a>
                  </li>
                  <li>
                    <a href="#">Personal Development</a>
                  </li>
                  <li>
                    <a href="#">Photography</a>
                  </li>
                  <li>
                    <a href="#">Teaching &amp; Academics</a>
                  </li>
                </ul>
              </div>
              {/* <!-- Sidebar Widget End --> */}

              {/* <!-- Sidebar Widget Start --> */}
              <div className="sidebar-widget border-2 mt-4  p-4 bg-gray-50">
                <h2 className="sidebar-widget__title">Related Courses</h2>

                <div className="sidebar-widget__course">
                  <div className="sidebar-widget__course-item">
                    <div className="sidebar-widget__course-thumbnail">
                      <a href="course-single-layout-01.html">
                        <img
                          src={thumbnail}
                          alt="Courses"
                          width="120"
                          height="72"
                        />
                      </a>
                    </div>
                    <div className="sidebar-widget__course-content">
                      <h2 className="sidebar-widget__course-title">
                        <a href="course-single-layout-01.html">
                          Artificial Intelligence: Reinforcement Learning in
                          Python
                        </a>
                      </h2>
                      <div className="sidebar-widget__course-price">
                        <span className="sale-price">
                          $46<span className="separator">.00</span>
                        </span>
                        <span className="regular-price">
                          $76<span className="separator">.00</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-widget__course-item">
                    <div className="sidebar-widget__course-thumbnail">
                      <a href="course-single-layout-01.html">
                        <img
                          src={thumbnail}
                          alt="Courses"
                          width="120"
                          height="72"
                        />
                      </a>
                    </div>
                    <div className="sidebar-widget__course-content">
                      <h2 className="sidebar-widget__course-title">
                        <a href="course-single-layout-01.html">
                          Statistics for Data Science and Business Analysis
                        </a>
                      </h2>
                      <div className="sidebar-widget__course-price">
                        <span className="sale-price">
                          $25<span className="separator">.00</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-widget__course-item">
                    <div className="sidebar-widget__course-thumbnail">
                      <a href="course-single-layout-01.html">
                        <img
                          src={thumbnail}
                          alt="Courses"
                          width="120"
                          height="72"
                        />
                      </a>
                      <div className="sidebar-widget__course-badge">
                        <span className="onsale">-38%</span>
                      </div>
                    </div>
                    <div className="sidebar-widget__course-content">
                      <h2 className="sidebar-widget__course-title">
                        <a href="course-single-layout-01.html">
                          Artificial Intelligence: Reinforcement Learning in
                          Python
                        </a>
                      </h2>
                      <div className="sidebar-widget__course-price flex">
                        <span className="sale-price">
                          €20<span className="separator">.00</span>
                        </span>
                        <span className="regular-price">
                          €35<span className="separator">.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Sidebar Widget End --> */}
            </div>
            {/* <!-- Tutor Course Sidebar End --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
