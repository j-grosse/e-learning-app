import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg bg-background hover:bg-gray-50 dark:hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105">
      <Link to={`/details/${course._id}`}>
        <div className="w-36 md:w-44 border-2 rounded-lg">
          {/* Card-header */}
          <div className="relative w-full h-24">
            <img
              className="object-cover w-full h-full rounded-t-md"
              src={course.image}
              alt="image"
            />
            {/* badge: NEW */}
            {course.year == new Date().getFullYear() && (
              <span className="absolute top-0 left-0 bg-green-500 rounded-sm text-xs sm:text-sm px-2 py-0.5 m-3">
                NEW
              </span>
            )}
          </div>
          {/* Card body */}
          <div className="px-4 py-4">
            {/* <p className="bg-green-100 text-green-500 px-2 py-0.5 mb-4">
              All Levels
            </p> */}
            <p className="font-light text-xs sm:text-sm text-blue-400">{course.category}</p>
            <div className="mb-2 text-md font-bold">{course.title}</div>
            <p className="overflow-hidden font-light text-xs sm:text-sm min-h-40">
              {course.description}
            </p>
            <p className="mt-3 text-xs sm:text-sm font-bold">{course.price} </p>
          </div>
          <div className="flex items-center mb-4 tutor-course-rating">
            <div className="rating-star">
              <div className="flex ml-4 rating-label">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
            <div className="ml-1 text-gray-500 rating-count">
              ({course.rating})
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
