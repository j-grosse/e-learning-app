const CourseCardHorizontal = ({
  course,
  selectedCourse,
  handleCourseSelect,
}) => {
  return (
    <div
      key={course._id}
      className={`flex h-20 min-w-[40%] bg-background text-sm overflow-hidden border rounded-lg cursor-pointer shadow-md transition-transform duration-200 transform hover:scale-105 hover:shadow-xl ${
        course === selectedCourse
          ? 'bg-primary text-secondary shadow-xl scale-105'
          : 'hover:bg-secondary'
      }`}
      onClick={() => handleCourseSelect(course)}
    >
      <div className="w-20 h-20 flex-shrink-0">
        <img
          className="h-full w-full object-cover rounded-l-md mx-auto"
          src={course.image}
          alt="course image"
        />
      </div>
      <p className="w-32 p-2 pl-3">{course.title}</p>
    </div>
  );
};
export default CourseCardHorizontal;
