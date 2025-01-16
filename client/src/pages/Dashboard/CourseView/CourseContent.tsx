import VideoPlaceholder from '../../../assets/images/VideoPlaceholder.png';

const CourseContent = ({ course, selectedLesson }) => {
  return (
    <>
      {course.courseModules.map((module) =>
        module.lessons.map((lesson) => {
          if (lesson.id === selectedLesson) {
            return (
              <div key={lesson.id}>
                <h2>{lesson.title}</h2>
                <br />
                <p>{lesson.description}</p>
                <br />
                <img src={lesson.image} alt={lesson.title} />
              </div>
            );
          }
          return null;
        })
      )}
    </>
  );
};

export default CourseContent;
