import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { RxDividerVertical } from 'react-icons/rx';

const CourseHeader = ({ course }) => {
  return (
    <>
      <div className="w-full bg-gray-200 dark:bg-gray-800">
        <div className="p-2"></div>

        <div className="px-8 pb-4 mt-2 leading-10">
          <div>
            <span className="p-1 text-xs font-semibold text-yellow-100 bg-primary onsale">
              -39%
            </span>
            <Link to="#" className="ml-3 text-primary">
              {course.category}
            </Link>
          </div>
          <h1>{course ? course.title : 'No course with this id found'}</h1>

          <div className="flex flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 overflow-hidden rounded-full">
                <img
                  src="https://jaydatamusic.com/wp-content/uploads/2016/02/ebf-jay-data-feld-foto-1.jpg"
                  alt="tutor"
                />
              </div>
              <div className="ml-2 font-bold">{course.tutor}</div>
              <RxDividerVertical className="text-2xl text-gray-500" />
            </div>
            <div>Last Update December 1, {course.year}</div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="flex items-center">
              <strong>{course.rating}</strong> /5
              <div>
                <div className="flex ml-2 rating-label">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
              </div>
              <div className="ml-1 text-gray-500">(8)</div>
            </div>
            <div className="flex flex-wrap items-center ml-4 text-gray-500">
              <RxDividerVertical className="text-2xl text-gray-500" />
              <FaUserAlt className="ml-1 text-gray-500" />
              <div className="ml-4"> 121 already enrolled</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHeader;
