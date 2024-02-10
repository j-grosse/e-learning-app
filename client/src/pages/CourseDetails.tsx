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
      <div
        className="tutor-course-main-content section-padding-01 sticky-parent flex"
        style={{ position: 'relative' }}
      >
        <div className="container custom-container lg:col-span-4">
          <CourseAbout />
        </div>

        {/* <!-- Tutor Course Sidebar Start --> */}
        <div className="lg:col-span-4">
          <div className="sidebar-sticky" style={{}}>
            {/* <!-- Tutor Course Sidebar Start --> */}
            <div className="tutor-course-sidebar">
              {/* <!-- Tutor Course Price Preview Start --> */}
              <div className="tutor-course-price-preview">
                <div className="tutor-course-price-preview__thumbnail">
                  <div className="ratio ratio-16x9">
                    {/* <iframe
                          width="1280"
                          height="720"
                          src="https://www.youtube.com/embed/qKWnFRnjkA0"
                          title="What Is Data Modeling? 2 Minute erwin Expert Explanation"
                          frameBorder="0"
                          allow="web-share"
                          allowFullScreen
                        ></iframe> */}
                  </div>
                </div>
                <div className="tutor-course-price-preview__price">
                  <div className="tutor-course-price">
                    <span className="sale-price">
                      $46<span className="separator">.00</span>
                    </span>
                    <span className="regular-price">
                      $76<span className="separator">.00</span>
                    </span>
                  </div>
                  <div className="tutor-course-price-badge">39% off</div>
                </div>
                <div className="tutor-course-price-preview__meta">
                  <ul className="tutor-course-meta-list">
                    <li>
                      <div className="label">
                        <i className="fas fa-sliders-h"></i> Level
                      </div>
                      <div className="value">Beginner</div>
                    </li>
                    <li>
                      <div className="label">
                        <i className="fas fa-clock"></i> Duration
                      </div>
                      <div className="value">15.3 hours</div>
                    </li>
                    <li>
                      <div className="label">
                        <i className="fas fa-play-circle"></i> Lectures
                      </div>
                      <div className="value">4 lectures</div>
                    </li>
                    <li>
                      <div className="label">
                        <i className="fas fa-tag"></i> Subject
                      </div>
                      <div className="value">
                        <a href="#">Data Modeling</a>
                      </div>
                    </li>
                    <li>
                      <div className="label">
                        <i className="fas fa-globe"></i> Language
                      </div>
                      <div className="value">Russian</div>
                    </li>
                  </ul>
                </div>
                <div className="tutor-course-segment">
                  <h4 className="tutor-course-segment__title">
                    Material Includes
                  </h4>

                  <ul className="tutor-course-segment__list-style-01">
                    <li>Videos</li>
                    <li>Booklets</li>
                  </ul>
                </div>
                <div className="tutor-course-price-preview__btn">
                  <button className="btn btn-primary btn-hover-secondary w-100">
                    {' '}
                    <i className="fas fa-shopping-basket"></i> Add to cart
                  </button>
                  <a href="#" className="btn btn-light btn-hover-primary w-100">
                    Add to wishlist
                  </a>
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
              <div className="sidebar-widget">
                <h3 className="sidebar-widget__title">Course categories</h3>

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
              <div className="sidebar-widget">
                <h3 className="sidebar-widget__title">Related Courses</h3>

                <div className="sidebar-widget__course">
                  <div className="sidebar-widget__course-item">
                    <div className="sidebar-widget__course-thumbnail">
                      <a href="course-single-layout-01.html">
                        <img
                          src="assets/images/courses/courses-21.jpg"
                          alt="Courses"
                          width="120"
                          height="72"
                        />
                      </a>
                    </div>
                    <div className="sidebar-widget__course-content">
                      <h4 className="sidebar-widget__course-title">
                        <a href="course-single-layout-01.html">
                          Artificial Intelligence: Reinforcement Learning in
                          Python
                        </a>
                      </h4>
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
                          src="assets/images/courses/courses-15.jpg"
                          alt="Courses"
                          width="120"
                          height="72"
                        />
                      </a>
                    </div>
                    <div className="sidebar-widget__course-content">
                      <h4 className="sidebar-widget__course-title">
                        <a href="course-single-layout-01.html">
                          Statistics for Data Science and Business Analysis
                        </a>
                      </h4>
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
                          src="assets/images/courses/courses-33.jpg"
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
                      <h4 className="sidebar-widget__course-title">
                        <a href="course-single-layout-01.html">
                          Artificial Intelligence: Reinforcement Learning in
                          Python
                        </a>
                      </h4>
                      <div className="sidebar-widget__course-price">
                        <span className="sale-price">
                          $28<span className="separator">.00</span>
                        </span>
                        <span className="regular-price">
                          $45<span className="separator">.00</span>
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
