import SwiperCarousel from './SwiperCarousel';

const CourseCardList = ({ courses }) => {
  return (
      <div className="w-full">

        <SwiperCarousel courses={courses}></SwiperCarousel>
        {/* {courses &&
          courses.map((course) => {
            return (
              <div key={course._id}>
                <CourseCard course={course} />
              </div>
            );
          })} */}

      </div>
  );
};

export default CourseCardList;
