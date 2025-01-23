import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext.tsx';
import { CoursesContext } from '@/context/CoursesContext.tsx';
import { EnrollmentsContext } from '../../../context/EnrollmentsContext.tsx';
import CourseCardList from '@/pages/Home/CourseCardList.tsx';
// import CourseIndex from './CourseIndex.tsx';
// import CourseContent from './CourseContent.tsx';

const EnrollmentsLayout: React.FC = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const { courses, loading: coursesLoading } = useContext(CoursesContext);
  const { enrollments, loading: enrollmentsLoading } =
    useContext(EnrollmentsContext);

  const [myCourses, setMyCourses] = useState<typeof courses>([]);

  useEffect(() => {
    if (
      !authLoading &&
      !coursesLoading &&
      !enrollmentsLoading
    ) {
      const userId = user._id;

      const myEnrollments = enrollments.filter((el) => el.userId === userId);

      const enrolledCourses = myEnrollments
        .map((enrollment) => {
          const courseId = enrollment.courseId;
          return courses.find((course) => course.id === courseId);
        })
        .filter(
          (course): course is (typeof courses)[0] => course !== undefined
        );

      setMyCourses(enrolledCourses);
    }
    console.log(
      'User: ',
      user,
      'Courses: ',
      courses,
      'Enrollments: ',
      enrollments
    );
  }, [
    authLoading,
    coursesLoading,
    enrollmentsLoading,
    user,
    courses,
    enrollments,
  ]);

  if (authLoading || coursesLoading || enrollmentsLoading) {
    return <p>Loading...</p>;
  }
  // console.log('myEnrollments:', myEnrollments);
  // console.log('myCourses:', myCourses);
  // console.log('user:', context.user);
  // console.log('user _id:', context.user._id);
  // console.log('current enrollment progress:', myEnrollments.progress);

  return (
    <div className="flex w-full">
      {myCourses.length > 0 ? (
        <CourseCardList courses={myCourses} />
      ) : (
        <h2>You are not enrolled in any courses.</h2>
      )}
    </div>
  );
};

export default EnrollmentsLayout;
