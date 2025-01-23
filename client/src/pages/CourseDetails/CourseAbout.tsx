import React from 'react';
import { FaCheck, FaExclamationTriangle, FaStar, FaTags } from 'react-icons/fa';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const CourseAbout = ({ course }) => {
  return (
    <div>
      <div></div>
      <div className="w-8/12 mx-auto col-lg-8">
        {/* <!-- Tutor Course Main Segment Start --> */}
        <div className="tutor-course-main-segment">
          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment">
            {/* <h2 className="tutor-course-segment__title">
              Course Prerequisites
            </h2> */}

            {/* <!-- Tutor Course Segment Prerequisites Start --> */}
            <div className="tutor-course-segment__prerequisites">
              {/* <div className="flex gap-5 p-4 border-2 text-stone-400 bg-yellow-50 border-neutral-500 text-neutral-500">
                <FaExclamationTriangle size={20} />
                Please note that this course has the following prerequisites
                which must be completed before it can be accessed
              </div> */}
              {/* <ul className="tutor-course-segment__prerequisites-list">
                <li>
                  <br />
                  <a
                    className="flex p-4 border-2 rounded-lg prerequisites-item border-neutral-500 text-neutral-500"
                    href="#"
                  >
                    <div className="prerequisites-item__thumbnail">
                      <img
                        className="rounded-md"
                        src={course.image}
                        alt="Courses"
                        width="70"
                        height="47"
                      />
                    </div>
                    <div className="ml-4 prerequisites-item__title">
                      {course ? course.title : 'No course with this id found'}
                    </div>
                  </a>
                </li>
              </ul> */}
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
              <p>{course.description}</p>
            </div>
            {/* <!-- Tutor Course Segment Content Wrapper End --> */}
            <br />
            {/* <!-- Tutor Course Segment Tags Start --> */}
            <div className="flex tutor-course-segment__tags">
              <div className="flex items-center tutor-course-segment__tags-title">
                <FaTags />
              </div>
              <div className="ml-3 tutor-course-segment__tags-list">
                <a href="#"> {course.category} </a>
              </div>
            </div>
            {/* <!-- Tutor Course Segment Tags End --> */}
          </div>
          {/* <!-- Tutor Course Segment End --> */}
          <br />

          {/* <!-- Tutor Course Segment Start --> */}
          <div className="px-4 py-2 border-2 rounded-lg">
            <h2 className="tutor-course-segment__title">Learning Objectives</h2>
            {/* <!-- Tutor Course Segment Benefits Items Start --> */}
            <div className="flex flex-wrap gap-4 mt-3 tutor-course-segment__benefits-items">
              <div className="tutor-course-segment__benefit-item">
                <div className="flex gap-3 tutor-course-segment__benefit-content">
                  <FaCheck color="green" />
                  <span className="benefit-text">
                    Ready to begin working on real-world data modeling projects,
                  </span>
                </div>
              </div>
              <div className="tutor-course-segment__benefit-item">
                <div className="flex gap-3 tutor-course-segment__benefit-content">
                  <FaCheck color="green" />
                  <span className="benefit-text">
                    Expanded responsibilities as part of an existing role
                  </span>
                </div>
              </div>
              <div className="tutor-course-segment__benefit-item">
                <div className="flex gap-3 tutor-course-segment__benefit-content">
                  <FaCheck color="green" />
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
            <div className="tutor-course-segment__header">
              <h2 className="tutor-course-segment__title">Curriculum</h2>

              <div className="tutor-course-segment__lessons-duration">
                <span className="tutor-course-segment__lessons">4 Lessons</span>
                <span className="tutor-course-segment__duration">15h 15m</span>
              </div>
            </div>

            <div className="course-curriculum accordion">
              <Accordion type="single" collapsible>
                {/* first accordion */}

                <AccordionItem value="item-1">
                  <AccordionTrigger>IT background</AccordionTrigger>
                  <AccordionContent>
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
                  </AccordionContent>
                </AccordionItem>

                {/* second accordion */}

                <AccordionItem value="item-2">
                  <AccordionTrigger>Key concepts</AccordionTrigger>
                  <AccordionContent>
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* <!-- Tutor Course Segment End --> */}
          <br />
          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment">
            <h2 className="tutor-course-segment__title">Your Tutor(s)</h2>

            <div className="tutor-course-segment__instructor">
              <div className="tutor-instructor">
                <div className="flex">
                  <div className="flex items-center tutor-course-top-info__meta-instructor">
                    <div className="w-8 h-8 overflow-hidden rounded-full instructor-avatar">
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsm.askmen.com%2Ft%2Faskmen_in%2Farticle%2Ff%2Ffacebook-p%2Ffacebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg&f=1&nofb=1&ipt=3bb4f05da17a654779eaa91aa8a09590bec3c623406137e42bb9194dea51a769&ipo=images"
                        alt="tutor"
                      />
                    </div>
                  </div>
                  <p className="tutor-instructor__name">{course.tutor}</p>
                </div>
                <div className="tutor-instructor__instructor-info">
                  <div className="tutor-instructor__ratings">
                    <div className="rating-star">
                      <div
                        className="rating-label"
                        style={{ width: '90%' }}
                      ></div>
                    </div>
                    <br />
                    <div className="rating-average">
                      <span className="rating-average__average">
                        Tutor rating: {course.rating}
                      </span>
                      <span className="rating-average__total">/5</span>
                    </div>
                  </div>
                  <div className="tutor-instructor__meta">
                    <span>
                      <i className="fas fa-play-circle"></i> 6 Courses
                    </span>
                    <span>
                      <i className="fas fa-comment-alt"></i> 4 Reviews
                    </span>
                    <span>
                      <i className="fas fa-user"></i> 53 Students
                    </span>
                  </div>
                  <a className="tutor-instructor__link" href="#">
                    <i className="fas fa-plus"></i> <Link to="/">See more</Link>
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
                <div className="count">{course.rating}</div>
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
              </div>
            </div>
          </div>
          {/* <!-- Tutor Course Segment End --> */}
          <br />
          {/* <!-- Tutor Course Segment Start --> */}
          {/* <div className="tutor-course-segment">
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
          </div> */}
          {/* <!-- Tutor Course Segment End --> */}
          <br />
          {/* <!-- Tutor Course Segment Start --> */}
          <div className="tutor-course-segment">
            {/* <h2 className="tutor-course-segment__title">Write a review</h2> */}

            <div className="tutor-course-segment__reviews mb-6">
              {/* <button
                className="tutor-course-segment__btn btn btn-primary btn-hover-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#collapseForm"
              >
                Open review form
              </button> */}

              <div className="collapse" id="collapseForm">
                {/* <!-- Comment Form Start --> */}
                {/* <div className="comment-form">
                  <form action="#">
                    <div className="comment-form__rating">
                      <label className="label">Your rating: *</label>
                      <ul id="rating" className="rating">
                        <li className="star" title="Poor" data-value="1">
                          <FaStar className="text-yellow-500" />
                        </li>
                        <li className="star" title="Poor" data-value="2">
                          <FaStar className="text-yellow-500" />
                        </li>
                        <li className="star" title="Poor" data-value="3">
                          <FaStar className="text-yellow-500" />
                        </li>
                        <li className="star" title="Poor" data-value="4">
                          <FaStar className="text-yellow-500" />
                        </li>
                        <li className="star" title="Poor" data-value="5">
                          <FaStar className="text-yellow-500" />
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

                </div> */}
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
