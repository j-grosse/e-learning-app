import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext.tsx';
import { CoursesContext } from '@/context/CoursesContext.tsx';
import { EnrollmentsContext } from '@/context/EnrollmentsContext.tsx';
// import CourseCardList from '@/pages/Home/CourseCardList.tsx';
import CourseCardMiniList from '@/components/common/CourseCardMiniList.tsx';
import { Button } from '@/components/ui/button';
import CourseCardHorizontal from '@/components/common/CourseCardHorizontal';
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

    // console.log(
    //   'User: ',
    //   user,
    //   'Courses: ',
    //   courses,
    //   'Enrollments: ',
    //   enrollments
    // );
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
    navigate(`/dashboard/course/${course._id}`);
  };

  if (authLoading || coursesLoading || enrollmentsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="max-w-2xl p-3 mb-3">
        <h2 className="pb-3">Continue</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          <CourseCardHorizontal
            course={courses[0]}
            selectedCourse={selectedCourse}
            handleCourseSelect={handleCourseSelect}
          />
        </div>

        <div>
          <h2 className="pb-3">My Courses</h2>
          {myCourses.length > 0 ? (
            <CourseCardMiniList
              courses={myCourses}
              handleCourseSelect={handleCourseSelect}
              selectedCourse={selectedCourse}
            />
          ) : (
            // <CourseCardList courses={myCourses} />
            <div className="text-center">
              <p className="my-4">You are not enrolled in any courses.</p>
              <NavLink to="/">
                <Button variant="submitFull">Buy a course</Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollmentsLayout;
