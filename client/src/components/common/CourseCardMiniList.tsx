import CourseCardHorizontal from './CourseCardHorizontal';

const CourseCardMiniList = ({
  courses,
  handleCourseSelect,
  selectedCourse,
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {courses
        ? courses.map((course) => (
          <div key={course._id}>
            <CourseCardHorizontal
              course={course}
              selectedCourse={selectedCourse}
              handleCourseSelect={handleCourseSelect}
            />
            </div>
          ))
        : ''}
    </div>
  );
};

export default CourseCardMiniList;
