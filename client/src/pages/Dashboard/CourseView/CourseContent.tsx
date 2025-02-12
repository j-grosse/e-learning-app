// import VideoPlaceholder from '../../../assets/images/VideoPlaceholder.png';

const CourseContent = ({ course, selectedLesson }) => {
  // Find the selected lesson
  const lesson = course.courseModules
    .flatMap((module) => module.lessons)
    .find((lesson) => lesson._id === selectedLesson);

  return (
    <>
      {lesson ? (
        <div key={lesson._id} className="flex flex-col gap-4">
          <h2>{lesson.title}</h2>
          {/* //TODO: add sanitizing for lesson text */}
          <div
            dangerouslySetInnerHTML={{ __html: lesson.text }}
          />
        </div>
      ) : (
        <p>Lesson not found</p>
      )}
    </>
  );
};

export default CourseContent;
