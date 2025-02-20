import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CoursesContext } from '../../context/CoursesContext';
import CourseHeader from './CourseHeader';
import CourseAbout from './CourseAbout';
import CourseSidebar from './CourseSidebar';
import ScrollToTop from '@/components/ui/scroll-to-top';
// import data from '../../assets/courseData';

const CourseDetails = () => {
  const { courses, loading } = useContext(CoursesContext);
  const { id } = useParams();
  const course = courses && courses.find((el) => el._id === id);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <ScrollToTop />
      <CourseHeader course={course} />
      <div className="flex flex-col md:flex-row place-content-between">
        <CourseAbout course={course} />
        <CourseSidebar course={course} />
      </div>
    </>
  );
};

export default CourseDetails;
