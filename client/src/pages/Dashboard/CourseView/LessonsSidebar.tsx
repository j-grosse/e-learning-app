import { Link } from 'react-router-dom';

const LessonsSidebar = ({ course, courseModule }) => {
  return (
    <div className="flex flex-col h-full bg-background border rounded-lg p-6 gap-4 shadow-lg">
          {/* <h2>{courseModule.title}</h2> */}
      
      <ol className="ml-6 list-decimal">
        {courseModule.lessons.map((lesson) => (
          <Link
            to={`/dashboard/course/${course._id}/${courseModule._id}/${lesson._id}`}
            key={lesson._id}
            // onClick={() => handleLessonSelect(lesson._id)}
          >
            <li>{lesson.title}</li>
          </Link>
        ))}
      </ol>
    </div>
  );
};

export default LessonsSidebar;
