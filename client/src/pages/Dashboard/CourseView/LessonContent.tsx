import LessonsSidebar from './LessonsSidebar';

const LessonContent = ({ course, courseModule, lesson }) => {
  const safeHtml = lesson.text
    ? lesson.text
        .replace(/%20/g, ' ') // Replace %20 with a space
        .replace(/&nbsp;/g, ' ') // Replace &nbsp; with a space
    : '';

  return (
    <div className="flex flex-wrap gap-3">
      {lesson ? (
        <div className="flex flex-col w-full bg-background border rounded-lg p-6 gap-4 shadow-lg">
          <div key={lesson._id} className="flex flex-col gap-4">
            <h2>{lesson.title}</h2>
            {/* //TODO: add sanitizing for lesson text */}
            <div
              className="ql-course-images break-words"
              dangerouslySetInnerHTML={{ __html: safeHtml }}
            />
          </div>
        </div>
      ) : (
        <p>Lesson not found</p>
      )}

      <LessonsSidebar course={course} courseModule={courseModule} />
    </div>
  );
};

export default LessonContent;
