const CourseCardMiniList = ({ courses, handleCourseSelect, selectedCourse, title}) => {
        return (
        <div className="max-w-2xl p-6 mb-3 border rounded-lg">
          <h2 className="pb-3">{title}</h2>
          <div className="flex flex-wrap gap-4">
            {courses
              ? courses.map((course) => (
                  <div
                    key={course._id}
                    className={`p-1 w-24 text-sm overflow-hidden border rounded-lg mt-2 cursor-pointer shadow-md transition-transform duration-200 transform hover:scale-105 ${
                      course === selectedCourse
                        ? 'bg-primary text-secondary'
                        : 'hover:bg-secondary'
                    }`}
                    onClick={() => handleCourseSelect(course)}
                  >
                    <img
                      className="h-20 object-cover rounded-md mx-auto pt-1"
                      src={course.image}
                      width="100"
                      alt="courseImage"
                    />
                    <p className="p-1">{course.title}</p>
                  </div>
                ))
              : ''}
          </div>
        </div>
        )}

        export default CourseCardMiniList