import React from 'react';
import CourseCard from './CourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import './swiperCarousel.css';

const SwiperCarousel = ({ courses }) => {
  // const swiper = new Swiper('.swiper', {
  //   slidesPerView: 4,
  //   spaceBetween: 10,
  //   slidesPerGroup: 2,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   // navigation: {
  //   //   nextEl: '.swiper-button-next',
  //   //   prevEl: '.swiper-button-prev',
  //   // },
  //   // Responsive breakpoints
  //   breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     // when window width is >= 480px
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     // when window width is >= 640px
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 40,
  //     },
  //   },
  // });

  return (
    <div className="courses-slider">
      <div className="swiper">
        <div className="swiper-wrapper" key="1">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {courses &&
              courses.map((course) => (
                <SwiperSlide key={course._id}>
                  <div
                    style={{
                      height: '150px',
                      width: '100px',
                      overflow: 'hidden',
                    }}
                  >
                    <CourseCard course={course} />
                    {/* <img
                      src={course.image}
                      alt={course.title}
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    /> */}
                  </div>
                </SwiperSlide>
              ))}
            {/* 
            {courses &&
              courses.map((course, index) => (
                <div className="swiper-slide" key={course.id}>
                  <CourseCard
                    course={course}
                  />
                </div>
              ))} */}
            {/* <!-- Add Pagination --> */}
            {/* <!-- <div className="swiper-pagination"></div> --> */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperCarousel;
