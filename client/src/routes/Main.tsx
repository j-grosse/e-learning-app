import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import Home from '../pages/Home';
import About from '@/pages/About';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Register from '../pages/Login/Register';

import ProtectedRoute from './ProtectedRoute';
import DashboardLayout from '../pages/Dashboard';
import EnrollmentsLayout from '@/pages/Dashboard/Enrollments';
import CourseLayout from '@/pages/Dashboard/CourseView';
import CourseDetails from '../pages/CourseDetails';
import CourseEditor from '../pages/Dashboard/CourseEditor';
import Cart from '../pages/Dashboard/Cart';
import Checkout from '../pages/Dashboard/Checkout';
import UserProfile from '../pages/Dashboard/UserProfile';

// import { Suspense } from 'react';
// import { Loader } from 'lucide-react';

// if url is one of the defined routes: load the corresponding component
const Main = () => {
  const location = useLocation();
  // const { user } = useContext(AuthContext);
  return (
    <AnimatedPage>
      <AnimatePresence mode="sync">
        <main className="grow">
          <Routes key={location.pathname} location={location}>
            {/* <Switch> */}

            {/* <Route
              path="/"
              element={user ? <Dashboard /> : <Home />}
            /> */}
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details/:id" element={<CourseDetails />} />

            <Route
              path="/dashboard/:item?"
              element={
                <DashboardLayout>
                  {/* <Suspense
                    fallback={<Loader size={32} color="#000000" />}
                  ></Suspense> */}
                  <ProtectedRoute />
                </DashboardLayout>
              }
            >
              <Route
                path="course/:id/:courseModuleId/:lessonId"
                element={<CourseLayout />}
              />
              <Route
                path="course/:id/:courseModuleId"
                element={<CourseLayout />}
              />
              <Route path="course/:id" element={<CourseLayout />} />
              <Route path="course" element={<EnrollmentsLayout />} />

              <Route path="editor" element={<CourseEditor />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="profile" element={<UserProfile />} />
            </Route>

            <Route path="*" element={<NotFound />} />
            {/* </Switch> */}
          </Routes>
        </main>
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default Main;
