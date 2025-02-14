import React from 'react';
import {
  FaCheck,
  FaExclamationTriangle,
  FaStar,
  FaTags,
  FaPlayCircle,
  FaCommentAlt,
  FaUser,
  FaPlus,
  FaFileAlt,
  FaUnlockAlt,
  FaQuestionCircle,
} from 'react-icons/fa';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import ProgressDemo from '@/components/ProgressDemo';

const CourseAbout = ({ course }) => {
  return (
    <div className="w-full px-8">
      <div>
        {/* <div className="flex gap-5 p-4 border-2 text-stone-400 bg-yellow-50 border-neutral-500 text-neutral-500">
                <FaExclamationTriangle size={20} />
                Please note that this course has the following prerequisites
                which must be completed before it can be accessed
              </div> */}

        {/* <ul>
                <li>
                  <br />
                  <Link
                    className="flex p-4 border-2 rounded-lg prerequisites-item border-neutral-500 text-neutral-500"
                    to="#"
                  >
                    <div>
                      <img
                        className="rounded-lg"
                        src={course.image}
                        alt="Courses"
                        width="70"
                        height="47"
                      />
                    </div>
                    <div className="ml-4">
                      {course ? course.title : 'No course with this id found'}
                    </div>
                  </Link>
                </li>
              </ul> */}
        <div>
          <h2 className="my-4">About This Course</h2>
          <p>{course.description}</p>
          <div className="flex items-center gap-4 ml-2 my-4">
            <FaTags />
            <Link to="#"> {course.category} </Link>
          </div>
        </div>

        {/* Learning Objectives */}
        {/* <div className="px-4 py-2 border-2 rounded-lg">
          <h2>Learning Objectives</h2>
          <div className="flex flex-wrap gap-4 mt-3">
            <div className="flex gap-3 tutor-course-segment__benefit-content">
              <FaCheck color="green" />
              <span>
                Ready to begin working on real-world data modeling projects,
              </span>
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
        </div> */}

        <div>
          <h2>Curriculum</h2>
          <div className="flex gap-4">
            <span>4 Lessons</span>
            <span>{course.duration} h</span>
          </div>

          <div>
            {/* modules */}
            <ol className="ml-6 text-xl list-decimal">
              {course.courseModules.map((module) => (
                <li key={module._id}>
                  <Accordion key={module._id} type="single" collapsible>
                    <AccordionItem value={module._id}>
                      <AccordionTrigger>
                        <p className="text-left">{module.title}</p>
                      </AccordionTrigger>

                      {/* lessons */}
                      <AccordionContent data-state="open">
                        <ol className="ml-6 text-lg list-decimal">
                          {module.lessons &&
                            (module.lessons.length > 1 ? (
                              module.lessons.map((lesson) => (
                                <li key={lesson._id}>
                                  <p>{lesson.title}</p>
                                </li>
                              ))
                            ) : module.lessons[0] !== undefined ? (
                              <li key={module.lessons[0]._id}>
                                <p>{module.lessons[0].title}</p>
                              </li>
                            ) : (
                              ''
                            ))}
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <br />

        {/* Tutors */}
        <div>
          <h2>Your Tutor(s)</h2>
          <div>
            <div>
              <div className="flex items-center gap-2">
                <div className=" w-8 h-8 overflow-hidden rounded-full">
                  <img
                    src="https://jaydatamusic.com/wp-content/uploads/2016/02/ebf-jay-data-feld-foto-1.jpg"
                    alt="tutor"
                  />
                </div>
                <p>{course.tutor}</p>
              </div>
              <div>
                <div>
                  <br />
                  <div>
                    <span>Tutor rating: {course.rating}</span>
                    <span>/5</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span>
                    <FaPlayCircle className="inline-block" /> 6 Courses
                  </span>
                  <span>
                    <FaCommentAlt className="inline-block" /> 4 Reviews
                  </span>
                  <span>
                    <FaUser className="inline-block" /> 53 Students
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Tutor Course Segment End --> */}
        <br />
        {/* <!-- Tutor Course Segment Start --> */}
        <div>
          <h2>Student Feedback</h2>

          <div>
            <div>
              <div className="count">{course.rating}/5</div>
              <div className="mb-4">8 Ratings</div>
            </div>
            <div>
              <div className="flex gap-4 items-center">
                <div className="w-24">
                  <ProgressDemo value={75} />
                </div>
                <div className="rating-metar-text">Total 75%</div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-24">
                  <ProgressDemo value={13} />
                </div>
                <div className="rating-metar-text">13%</div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-24">
                  <ProgressDemo value={5} />
                </div>
                <div className="rating-metar-text">5%</div>
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
                          <Link to="#">Chérif Akadiry</Link>
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
                          <Link to="#">Edumall Website</Link>
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
                          <Link to="#">Adeniyi David</Link>
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
  );
};

export default CourseAbout;
