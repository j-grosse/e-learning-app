// from https://medium.com/@amavictor/crafting-stunning-layouts-and-dashboards-in-react-a-comprehensive-guide-f0761c2caefc

import React, { Suspense } from 'react';
import { Loader } from 'lucide-react';
import { Route } from 'react-router-dom';
import DashboardLayout from '.';
import UserProfile from '../../components/UserProfile';
import { useLocation } from 'react-router-dom';
// const Profile = lazy( () =>  import('../pages/Profile'));
// const MyCourses = lazy( () =>  import('../pages/MyCourses'));

const PrivateRoutes = () => {
  // define custom type via interface
  interface RouteConfig {
    path: string;
    element: any;
  }

  const privateRoutes: RouteConfig[] = [
    {
      path: '/dashboard',
      element: <p>Dashboard page 1</p>,
      // element: <MyCourses />
    },
    {
      path: '/dashboard/profile',
      element: <UserProfile />,
      // element: <div>My Profile</div>,
    },
    // lesson routes
    {
      path: 'dashboard/lessons',
      element: <div>My Lessons</div>,
      // element: <Profile />
    },
  ];

  return (
    <>
      {/* <Routes> */}

      {privateRoutes.map((route: RouteConfig, index: number) => (
        <Route
          key={index}
          path={route.path}
          element={
            <DashboardLayout>
              {/* if current = path of a route in privateRoutes array, render the element of that route */}
              <Suspense fallback={<Loader size={32} color="#000000" />}>
                {route.element}
              </Suspense>
            </DashboardLayout>
          }
        />
      ))}
      {/* </Routes> */}
    </>
  );
};

export default PrivateRoutes;
