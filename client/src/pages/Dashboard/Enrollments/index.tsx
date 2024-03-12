import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext.tsx';
import { CoursesContext } from '@/context/CoursesContext.tsx';
import { EnrollmentsContext } from '../../../context/EnrollmentsContext.tsx';
import CourseCardList from '@/pages/Home/CourseCardList.tsx';
// import CourseIndex from './CourseIndex.tsx';
// import CourseContent from './CourseContent.tsx';

const EnrollmentsLayout = () => {
  const context = useContext(AuthContext);
  const courses = useContext(CoursesContext);
  const enrollments = useContext(EnrollmentsContext);
  // console.log('enrollments context:', enrollments);

  // const { id } = useParams();
  // const userIdNumber = parseInt(id);
  const userId = context.user._id;

  const myEnrollments =
    enrollments && enrollments.filter((el) => el.userId === userId);

  const myCourses = myEnrollments.map((enrollment) => {
    const courseId = enrollment.courseId;
    return courses.find((course) => course.id === courseId);
  });
  // console.log('myEnrollments:', myEnrollments);
  // console.log('myCourses:', myCourses);
  // console.log('user:', context.user);
  // console.log('user _id:', context.user._id);
  // console.log('current enrollment progress:', myEnrollments.progress);

  return (
    <div className="flex w-full gap-8">
      <div className="">
        <CourseCardList courses={myCourses} />

        </div>
    </div>
  );
};

export default EnrollmentsLayout;
