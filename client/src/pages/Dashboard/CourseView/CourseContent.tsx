// import VideoPlaceholder from '../../../assets/images/VideoPlaceholder.png';

const CourseContent = ({ course, selectedLesson }) => {
  // Find the selected lesson
  const lesson = course.courseModules
    .flatMap((module) => module.lessons)
    .find((lesson) => lesson._id === selectedLesson);

  return (
    <>
      {lesson ? (
        <div key={lesson._id}>
          <h2>{lesson.title}</h2>
          <br />
          {/* {lesson.videoUrls !== '' ? (
            <iframe
            className="w-[100%]"
              width="560"
              height="315"
              src={lesson.videoUrls}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img src={VideoPlaceholder} alt="video placeholder" />
          )} */}
          <br />
          {/* //TODO: add satitizing for lesson text */}
          <div
            dangerouslySetInnerHTML={{ __html: lesson.text }}
            className="w-32"
          />
        </div>
      ) : (
        <p>Lesson not found</p>
      )}
    </>
  );
};

export default CourseContent;
