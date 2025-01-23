import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CourseHeader from './CourseHeader';
import CourseAbout from './CourseAbout';
import CourseSidebar from './CourseSidebar';
// import data from '../../assets/courseData';
import { CoursesContext } from '../../context/CoursesContext';
import ScrollToTop from '@/components/ui/scroll-to-top';

const CourseDetails = () => {
  const { courses, loading } = useContext(CoursesContext);
  console.log('courses context:', courses);

  const { id } = useParams();
  const idNumber = parseInt(id);
  const course = courses && courses.find((el) => el.id === idNumber);
  // console.log('course:', course);

  if (loading) return <p>Loading...</p>;
  
  return (
    <div className="bg-gray-50 dark:bg-black">
      <ScrollToTop />
      <CourseHeader course={course} />
      <div className="flex flex-col md:flex-row mt-4">
        <CourseAbout course={course} />
        <CourseSidebar course={course} />
      </div>
    </div>
  );
};

export default CourseDetails;
