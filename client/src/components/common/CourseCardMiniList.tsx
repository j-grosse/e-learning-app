const CourseCardMiniList = ({
  courses,
  handleCourseSelect,
  selectedCourse,
  title,
}) => {
  return (
    <div className="max-w-2xl p-3 mb-3">
      <h2 className="pb-3">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {courses
          ? courses.map((course) => (
              <div
                key={course._id}
                className={`flex h-20 min-w-[40%] bg-background text-sm overflow-hidden border rounded-lg cursor-pointer shadow-md transition-transform duration-200 transform hover:scale-105 ${
                  course === selectedCourse
                    ? 'bg-primary text-secondary'
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
            ))
          : ''}
      </div>
    </div>
  );
};

export default CourseCardMiniList;
