import React, { useState } from 'react';
import { FaExclamationTriangle, FaStar, FaTags } from 'react-icons/fa';

const CourseAbout = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  const handleAccordion = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div className="col-lg-8 ml-16 w-5/12">
        {/* <!-- Tutor Course Main Segment Start --> */}
        <div className="tutor-course-main-segment">
          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment">
            <h2 className="tutor-course-segment__title">
              Course Prerequisites
            </h2>

            {/* <!-- Tutor Course Segment Prerequisites Start --> */}
            <div className="tutor-course-segment__prerequisites">
              <div className="tutor-course-segment__prerequisites-warning flex bg-yellow-100 border-2 border-neutral-500 text-neutral-500 p-4">
                <FaExclamationTriangle />
                Please note that this course has the following prerequisites
                which must be completed before it can be accessed
              </div>
              <ul className="tutor-course-segment__prerequisites-list">
                <li>
                  <br/>
                  <a className="prerequisites-item flex bg-yellow-100 border-2 border-neutral-500 text-neutral-500 p-4" href="#">
                    <div className="prerequisites-item__thumbnail">
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2022%2F11%2FGettyImages-1358149692.jpg&f=1&nofb=1&ipt=7aa48c39383fc21b54e08924da01662d1d72820eec53a5c67d63de13fab76a36&ipo=images"
                        alt="Courses"
                        width="70"
                        height="47"
                      />
                    </div>
                    <div className="prerequisites-item__title ml-4">
                      Artificial Intelligence &amp; Machine Learning
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Tutor Course Segment Prerequisites End --> */}
          </div>
          {/* <!-- Tutor Course Segment End --> */}
          <br />
          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment">
            <h2 className="tutor-course-segment__title">About This Course</h2>

            {/* <!-- Tutor Course Segment Content Wrapper Start --> */}
            <div className="tutor-course-segment__content-wrap">
              <p>
                In this course, I take you from the fundamentals and concepts of
                data modeling all the way through a number of best practices and
                techniques that you’ll need to build data models in your
                organization. You’ll find many examples that clearly demonstrate
                the key concepts and techniques covered throughout the course.
              </p>
              <p>
                By the end of the course, you’ll be all set to not only put
                these principles to work, but also to make the key data modeling
                and design decisions required by the “art” of data modeling that
                transcend the nuts-and-bolts techniques and design patterns.
              </p>
              <p>
                Organisations, or groups of organisations, may establish the
                need for master data management when they hold more than one
                copy of data about a business entity. Holding more than one copy
                of this master data inherently means that there is an
                inefficiency in maintaining a “single version of the truth”
                across all copies. Unless people, processes and technology are
                in place to ensure that the data values are kept aligned across
                all copies, it is almost inevitable that different versions of
                information about a business entity will be held.
              </p>
            </div>
            {/* <!-- Tutor Course Segment Content Wrapper End --> */}
            <br />
            {/* <!-- Tutor Course Segment Tags Start --> */}
            <div className="tutor-course-segment__tags flex">
              <div className="tutor-course-segment__tags-title">
                <FaTags />
              </div>
              <div className="tutor-course-segment__tags-list ml-3">
                <a href="#"> big data,</a>
                <a href="#">data,</a>
                <a href="#">data analysis,</a>
                <a href="#">data modeling</a>
              </div>
            </div>
            {/* <!-- Tutor Course Segment Tags End --> */}
          </div>
          {/* <!-- Tutor Course Segment End --> */}
          <br />

          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment benefits-wrap ">
            <h2 className="tutor-course-segment__title">Learning Objectives</h2>
            {/* <!-- Tutor Course Segment Benefits Items Start --> */}
            <div className="tutor-course-segment__benefits-items">
              <div className="tutor-course-segment__benefit-item">
                <div className="tutor-course-segment__benefit-content">
                  <i className="fas fa-check"></i>
                  <span className="benefit-text">
                    Ready to begin working on real-world data modeling projects,
                  </span>
                </div>
              </div>
              <div className="tutor-course-segment__benefit-item">
                <div className="tutor-course-segment__benefit-content">
                  <i className="fas fa-check"></i>
                  <span className="benefit-text">
                    Expanded responsibilities as part of an existing role
                  </span>
                </div>
              </div>
              <div className="tutor-course-segment__benefit-item">
                <div className="tutor-course-segment__benefit-content">
                  <i className="fas fa-check"></i>
                  <span className="benefit-text">
                    Find a new position involving data modeling.
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Tutor Course Segment Benefits Items End --> */}
          </div>
          {/* <!-- Tutor Course Segment End --> */}
          <br />
          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment">
            <h2 className="tutor-course-segment__title">Requirements</h2>

            {/* <!-- Tutor Course Segment Requirements Items Start --> */}
            <div className="tutor-course-segment__requirements-content">
              <ul className="tutor-course-segment__list-style-01">
                <li>
                  Basic understanding of data management concepts and constructs
                  such as relational database tables
                </li>
                <li>
                  Know how different pieces of data logically relate to one
                  another.
                </li>
              </ul>
            </div>
            {/* <!-- Tutor Course Segment Requirements Items End --> */}
          </div>
          {/* <!-- Tutor Course Segment End --> */}
          <br />
          <br />
          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment audience-wrap">
            <h2 className="tutor-course-segment__title">Target Audience</h2>

            {/* <!-- Tutor Course Segment Requirements Items Start --> */}
            <div className="tutor-course-segment__audience-content">
              <ul className="tutor-course-segment__list-style-02">
                <li>A business analyst</li>
                <li>Data engineer, or database designer</li>
                <li>
                  Who desires to build a personal toolbox of data modeling best
                  practices and techniques.
                </li>
              </ul>
            </div>
            {/* <!-- Tutor Course Segment Requirements Items End --> */}
          </div>
          {/* <!-- Tutor Course Segment End --> */}
          <br />
          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment">
            <div className="tutor-course-segment__header">
              <h2 className="tutor-course-segment__title">Curriculum</h2>

              <div className="tutor-course-segment__lessons-duration">
                <span className="tutor-course-segment__lessons">4 Lessons</span>
                <span className="tutor-course-segment__duration">15h 15m</span>
              </div>
            </div>

            {/* first accordion */}

            <div className="course-curriculum accordion">
              <div className="accordion-item">
                <button
                  className="accordion-collapse btn"
                  onClick={handleAccordion}
                >
                  <i className="tutor-icon"></i> IT background
                </button>
                {!isCollapsed && (
                  <div className="accordion-collapse">
                    <div className="course-curriculum__lessons">
                      <div className="course-curriculum__lesson">
                        <span className="course-curriculum__title">
                          <i className="fas fa-file-alt"></i> The importance of
                          data nowadays
                        </span>
                        <span className="course-curriculum__icon">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                      </div>
                      <div className="course-curriculum__lesson">
                        <span className="course-curriculum__title">
                          <i className="fas fa-file-alt"></i> Why my
                          organization should know about data
                        </span>
                        <span className="course-curriculum__icon">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                      </div>
                      <div className="course-curriculum__lesson">
                        <span className="course-curriculum__title">
                          <i className="fas fa-file-edit"></i> Assignments
                        </span>
                        <span className="course-curriculum__icon">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                      </div>
                      <div className="course-curriculum__lesson">
                        <span className="course-curriculum__title">
                          <i className="fas fa-question-circle"></i> First quiz
                        </span>
                        <span className="course-curriculum__icon">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* second accordion */}

              <div className="accordion-item">
                <button
                  className="accordion-button btn"
                  onClick={handleAccordion}
                >
                  <i className="tutor-icon"></i> Key concepts
                </button>
                {!isCollapsed && (
                  <div className="accordion-collapse">
                    <div className="course-curriculum__lessons">
                      <div className="course-curriculum__lesson">
                        <span className="course-curriculum__title">
                          <i className="fas fa-file-alt"></i>
                          Basic understanding of data management concepts
                        </span>
                        <span className="course-curriculum__icon">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                      </div>
                      <div className="course-curriculum__lesson">
                        <span className="course-curriculum__title">
                          <i className="fas fa-file-edit"></i>
                          2nd Assignments
                        </span>
                        <span className="course-curriculum__icon">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* third accordion */}
              <div className="accordion-item">
                <button
                  className="accordion-button btn"
                  onClick={handleAccordion}
                >
                  <i className="tutor-icon"></i> Apply the principles
                </button>
                {!isCollapsed && (
                  <div className="accordion-collapse">
                    <div className="course-curriculum__lessons">
                      <div className="course-curriculum__lesson">
                        <span className="course-curriculum__title">
                          <i className="fas fa-file-alt"></i>
                          Final Lesson
                        </span>
                        <span className="course-curriculum__icon">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                      </div>
                      <div className="course-curriculum__lesson">
                        <span className="course-curriculum__title">
                          <i className="fas fa-file-edit"></i>
                          Assignments
                        </span>
                        <span className="course-curriculum__icon">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                      </div>
                      <div className="course-curriculum__lesson">
                        <span className="course-curriculum__title">
                          <i className="fas fa-question-circle"></i>
                          First quiz
                        </span>
                        <span className="course-curriculum__icon">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <!-- Tutor Course Segment End --> */}
          <br />
          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment">
            <h2 className="tutor-course-segment__title">Your Instructors</h2>

            <div className="tutor-course-segment__instructor">
              <div className="tutor-instructor">
                <div className="tutor-instructor__avatar">
                  <img
                    src="assets/images/team/team-member-07.jpg"
                    alt="instructor"
                    width="200"
                    height="246"
                  />
                </div>
                <div className="tutor-instructor__instructor-info">
                  <h2 className="tutor-instructor__name">Owen Christ</h2>
                  <div className="tutor-instructor__ratings">
                    <div className="rating-star">
                      <div
                        className="rating-label"
                        style={{ width: '90%' }}
                      ></div>
                    </div>

                    <div className="rating-average">
                      <span className="rating-average__average">4.75</span>
                      <span className="rating-average__total">/5</span>
                    </div>
                  </div>
                  <div className="tutor-instructor__meta">
                    <span>
                      <i className="fas fa-play-circle"></i> 42 Courses
                    </span>
                    <span>
                      <i className="fas fa-comment-alt"></i> 4 Reviews
                    </span>
                    <span>
                      <i className="fas fa-user"></i> 73 Students
                    </span>
                  </div>
                  <a className="tutor-instructor__link" href="#">
                    <i className="fas fa-plus"></i> See more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Tutor Course Segment End --> */}
          <br />
          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment">
            <h2 className="tutor-course-segment__title">Student Feedback</h2>

            <div className="tutor-course-segment__feedback">
              <div className="tutor-course-segment__reviews-average">
                <div className="count">4.4</div>
                <div className="reviews-rating-star">
                  <div className="rating-star">
                    <div
                      className="rating-label"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
                <div className="rating-total">8 Ratings</div>
              </div>
              <div className="tutor-course-segment__reviews-metar">
                <div className="course-rating-metar">
                  <div className="rating-metar-star">
                    <div className="rating-star">
                      <div
                        className="rating-label"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="rating-metar-col">
                    <div className="rating-metar-bar">
                      <div
                        className="rating-metar-line"
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="rating-metar-text">75%</div>
                </div>

                <div className="course-rating-metar">
                  <div className="rating-metar-star">
                    <div className="rating-star">
                      <div
                        className="rating-label"
                        style={{ width: '80%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="rating-metar-col">
                    <div className="rating-metar-bar">
                      <div
                        className="rating-metar-line"
                        style={{ width: '13%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="rating-metar-text">13%</div>
                </div>

                <div className="course-rating-metar">
                  <div className="rating-metar-star">
                    <div className="rating-star">
                      <div
                        className="rating-label"
                        style={{ width: '60%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="rating-metar-col">
                    <div className="rating-metar-bar">
                      <div
                        className="rating-metar-line"
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="rating-metar-text">0%</div>
                </div>

                <div className="course-rating-metar">
                  <div className="rating-metar-star">
                    <div className="rating-star">
                      <div
                        className="rating-label"
                        style={{ width: '40%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="rating-metar-col">
                    <div className="rating-metar-bar">
                      <div
                        className="rating-metar-line"
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="rating-metar-text">0%</div>
                </div>

                <div className="course-rating-metar">
                  <div className="rating-metar-star">
                    <div className="rating-star">
                      <div
                        className="rating-label"
                        style={{ width: '20%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="rating-metar-col">
                    <div className="rating-metar-bar">
                      <div
                        className="rating-metar-line"
                        style={{ width: '13%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="rating-metar-text">13%</div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Tutor Course Segment End --> */}
          <br />
          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment">
            <h2 className="tutor-course-segment__title">
              Reviews <span className="count">(3)</span>
            </h2>

            <div className="tutor-course-segment__review-commnet">
              <ul className="comment-list-02">
                <li>
                  <div className="comment-item-02">
                    <div className="comment-item-02__header">
                      <div className="comment-item-02__author">
                        <img
                          src="assets/images/avatar/avatar-02.jpg"
                          alt="Avatar"
                          width="52"
                          height="52"
                        />
                      </div>
                      <div className="comment-item-02__info">
                        <h6 className="comment-item-02__name">
                          <a href="#">Chérif Akadiry</a>
                        </h6>
                        <p className="comment-item-02__date">2 weeks ago</p>
                      </div>
                    </div>
                    <div className="comment-item-02__body">
                      <div className="rating-star">
                        <div
                          className="rating-label"
                          style={{ width: '80%' }}
                        ></div>
                      </div>

                      <p>el mejor de la historia</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="comment-item-02">
                    <div className="comment-item-02__header">
                      <div className="comment-item-02__author">
                        <img
                          src="assets/images/avatar/avatar-03.jpg"
                          alt="Avatar"
                          width="52"
                          height="52"
                        />
                      </div>
                      <div className="comment-item-02__info">
                        <h6 className="comment-item-02__name">
                          <a href="#">Edumall Website</a>
                        </h6>
                        <p className="comment-item-02__date">2 weeks ago</p>
                      </div>
                    </div>
                    <div className="comment-item-02__body">
                      <div className="rating-star">
                        <div
                          className="rating-label"
                          style={{ width: '100%' }}
                        ></div>
                      </div>

                      <p>el mejor de la historia</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="comment-item-02">
                    <div className="comment-item-02__header">
                      <div className="comment-item-02__author">
                        <img
                          src="assets/images/avatar/avatar-04.jpg"
                          alt="Avatar"
                          width="52"
                          height="52"
                        />
                      </div>
                      <div className="comment-item-02__info">
                        <h6 className="comment-item-02__name">
                          <a href="#">Adeniyi David</a>
                        </h6>
                        <p className="comment-item-02__date">2 weeks ago</p>
                      </div>
                    </div>
                    <div className="comment-item-02__body">
                      <div className="rating-star">
                        <div
                          className="rating-label"
                          style={{ width: '100%' }}
                        ></div>
                      </div>

                      <p>el mejor de la historia</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Tutor Course Segment End --> */}
          <br />
          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment">
            <h2 className="tutor-course-segment__title">Write a review</h2>

            <div className="tutor-course-segment__reviews">
              <button
                className="tutor-course-segment__btn btn btn-primary btn-hover-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#collapseForm"
              >
                Write a review
              </button>

              <div className="collapse" id="collapseForm">
                {/* <!-- Comment Form Start --> */}
                <div className="comment-form">
                  <form action="#">
                    <div className="comment-form__rating">
                      <label className="label">Your rating: *</label>
                      <ul id="rating" className="rating">
                        <li className="star" title="Poor" data-value="1">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="star" title="Poor" data-value="2">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="star" title="Poor" data-value="3">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="star" title="Poor" data-value="4">
                          <i className="fas fa-star"></i>
                        </li>
                        <li className="star" title="Poor" data-value="5">
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <div className="comment-form__input">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name *"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="comment-form__input">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email *"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="comment-form__input">
                          <textarea
                            className="form-control"
                            placeholder="Your Comment"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="comment-form__input form-check">
                          <input type="checkbox" id="save" />
                          <label htmlFor="save">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="comment-form__input">
                          <button className="btn btn-primary btn-hover-secondary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- Comment Form End --> */}
              </div>
            </div>
          </div>
          {/* <!-- Tutor Course Segment End --> */}
        </div>
        {/* <!-- Tutor Course Main Segment End --> */}
      </div>
    </div>
  );
};

export default CourseAbout;
