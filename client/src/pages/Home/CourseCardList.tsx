import CourseCard from './CourseCard';
import SwiperCarousel from './SwiperCarousel';

const CourseCardList = ({ courses }) => {
  return (
      <div className="w-[100vw] h-[100%]">

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
