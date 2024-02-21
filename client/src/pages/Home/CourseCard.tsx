import React from 'react';

const CourseCard = ({ id, image, title, text }) => {
  return (
    <div className="flex flex-wrap bg-gray-200 shadow-lg">
      <div className="w-60">
        <div className="">
          className="w-full object-cover h-24 aspect-w-1 aspect-h-1 p-2"
          <a href={`/details/${id}`}>
            <img
              className="w-full object-cover h-24 aspect-w-1 aspect-h-1 p-2"
              src={image}
              alt="image"
            />
          </a>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="min-h-40 overflow-hidden text-gray-700 text-base">
            {text}
          </p>
        </div>
        <div className="flex justify-end  px-6 pt-4 pb-2">
          <button className="bg-gray-100 rounded-md border-1 px-3 py-1 text-blue-500 hover:text-blue-300">
            <a href={`/details/${id}`}>details</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

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