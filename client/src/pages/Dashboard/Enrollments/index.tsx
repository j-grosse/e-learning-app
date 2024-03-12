import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext.tsx';
import { EnrollmentsContext } from '../../../context/EnrollmentsContext.tsx';
// import CourseIndex from './CourseIndex.tsx';
// import CourseContent from './CourseContent.tsx';

const EnrollmentsLayout = () => {
  const enrollments = useContext(EnrollmentsContext);
  const context = useContext(AuthContext);
  // console.log('enrollments context:', enrollments);

  // const { id } = useParams();
  // const userIdNumber = parseInt(id);
  const userId = context.user._id;

  const myEnrollments =
    enrollments && enrollments.find((el) => el.userId === userId);
  console.log('myEnrollments:', myEnrollments);
  console.log('user:', context.user);
  console.log('user _id:', context.user._id);
  console.log('current enrollment progress:', myEnrollments.progress);

  return (
    <div className="flex w-full gap-8">
      <div className="w-3/12">
        {/* {myEnrollments && <CourseIndex user={context.user} myEnrollments={myEnrollments} />} */}
        {myEnrollments && <p>current enrollment progress: {myEnrollments.progress}</p>}
      </div>
      <div className="w-9/12">
        {/* list user's current enrollments */}
        {/* {myEnrollments ? (
          <CourseContent myEnrollments={myEnrollments} />
        ) : (
          <p>Select a lesson to view its content.</p>
        )} */}
      </div>
    </div>
  );
};

export default EnrollmentsLayout;
