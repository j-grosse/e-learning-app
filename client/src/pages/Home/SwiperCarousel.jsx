import React from 'react';
import CourseCard from './CourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import './swiperCarousel.css';

const SwiperCarousel = ({ courses }) => {

  return (
    <div className="courses-slider">
      <div className="swiper">
        <div className="swiper-wrapper" key="1">
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{ 640: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 5 } }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            mousewheel={true}
            keyboard={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {courses &&
              courses.map((course) => (
                
                <SwiperSlide key={course._id}>
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

                </SwiperSlide>
              ))}
            {/* 
            {courses &&
              courses.map((course, index) => (
                <div className="swiper-slide" key={course._id}>
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
