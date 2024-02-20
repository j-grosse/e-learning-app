import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
// import Comments from '../pages/Comments';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedPage from '../AnimatedPage';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
// import NewOrder from '../pages/NewOrder';
// import OrderDetails from '../pages/OrderDetails';
// import UpdateOrder from '../pages/UpdateOrder';
import LoginForm from '../LoginForm';
import Register from '../Register';
import ProtectedRoute from './ProtectedRoute';
import Home from '../../pages/Home';
import CourseDetails from '../../pages/CourseDetails';
import DashboardLayout from '../../pages/Dashboard';
// import DashboardCom from './DashboardCom';
// import Contact from '../pages/Contact';
import NotFound from '../../pages/NotFound';
// import NavbarSide from './NavbarSide';
// import Ordertoclaim from './Ordertoclaim';
import UserProfile from '../UserProfile';
import PrivateRoutes from '../../pages/Dashboard/PrivateRoutes';
// import FormContact from './blocks/FormContact';

// if url is one of the defined routes: load the corresponding component
const Main = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  return (
    <AnimatedPage>
      <AnimatePresence mode="sync">
        <main>
          {/* <NavbarSide /> */}

          <Routes key={location.pathname} location={location}>
            {/* <Route
              path="/"
              element={user ? <Dashboard /> : <Home />}
            /> */}

            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<CourseDetails />} />

            {/* <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <PrivateRoutes />
                </ProtectedRoute>
              }
            > */}
            <Route
              path="/dashboard"
              element={
                <DashboardLayout>
                  <ProtectedRoute>
                    <PrivateRoutes />
                  </ProtectedRoute>
                </DashboardLayout>
              }
            />
            {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}

            {/* <Route path="/" element={<Home />} /> */}

            {/* <Route path="/orders/new" element={<NewOrder />} /> */}
            {/* <Route path="/orders/incoming" element={<Ordertoclaim />} />

              <Route path="/orders/:id" element={<OrderDetails />} />
              <Route path="/orders/:id/update" element={<UpdateOrder />} />

              <Route path="/support" element={<FormContact />} /> */}

            {/* <Route path="/orders/:id/comments" element={<Comments />} /> */}

            {/* <Route path="/checkout" element={<Checkout />} /> */}
            {/* <Route path="/payment" element={<Payment />} /> */}
            {/* <Route path="/comments" element={<Comments />} /> */}
            {/* </Route> */}

            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default Main;
