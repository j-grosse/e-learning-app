import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext.tsx';
import { CoursesContext } from '@/context/CoursesContext.tsx';
import { EnrollmentsContext } from '@/context/EnrollmentsContext.tsx';
// import CourseCardList from '@/pages/Home/CourseCardList.tsx';
import CourseCardMiniList from '@/components/common/CourseCardMiniList.tsx';
import { Button } from '@/components/ui/button';
// import CourseIndex from './CourseIndex.tsx';
// import CourseContent from './CourseContent.tsx';

const EnrollmentsLayout: React.FC = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const { courses, loading: coursesLoading } = useContext(CoursesContext);
  const { enrollments, loading: enrollmentsLoading } =
    useContext(EnrollmentsContext);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [myCourses, setMyCourses] = useState<typeof courses>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !coursesLoading && !enrollmentsLoading) {
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

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    navigate(`/dashboard/course/${course.id}`);
  };

  if (authLoading || coursesLoading || enrollmentsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {myCourses.length > 0 ? (
        <CourseCardMiniList
          courses={myCourses}
          handleCourseSelect={handleCourseSelect}
          selectedCourse={selectedCourse}
          title="My Enrollments"
        />
      ) : (
        // <CourseCardList courses={myCourses} />
        <div>
          <p className="mt-8 text-center">
            You are not enrolled in any courses.
          </p>
          <NavLink to="/">
            <Button>Buy a course</Button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default EnrollmentsLayout;
