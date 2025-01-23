import CourseCard from './CourseCard';

const CourseCardList = ({ courses }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-around w-full h-full py-10 gap-4">
        {courses &&
          courses.map((course) => {
            return (
              <div key={course.id}>
                <CourseCard course={course} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CourseCardList;
