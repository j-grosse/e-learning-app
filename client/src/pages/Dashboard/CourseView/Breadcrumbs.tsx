import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ course, courseModule, lesson }) => {
  return (
    <nav className='overflow-x-hidden'>
      <ul className="flex flex-wrap breadcrumbs gap-1 text-xs">
        <li className="flex">
          <Link to={`/dashboard/course`}>
            <FaHome />
          </Link>
        </li>
        {course && (
          <li>
            <Link
              to={`/dashboard/course/${course._id}`}
              key={course._id}
              className="truncate"
            >
              {course.title}
            </Link>
          </li>
        )}
        {courseModule && (
          <li>
            <Link
              to={`/dashboard/course/${course._id}/${courseModule._id}`}
              key={courseModule._id}
              className="truncate"
            >
              {courseModule.title}
            </Link>
          </li>
        )}
        {lesson && (
          <li>
            <Link
              to={`/dashboard/course/${course._id}/${courseModule._id}/${lesson._id}`}
              key={lesson._id}
              className="truncate"
            >
              {lesson.title}
            </Link>
          </li>
        )}
        {/* {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join('/')}`;
          return (
            <li key={to}>
              <Link to={to}>{path}</Link>
            </li>
          );
        })} */}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
