import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
// import Comments from '../pages/Comments';
// import NewOrder from '../pages/NewOrder';
// import OrderDetails from '../pages/OrderDetails';
// import UpdateOrder from '../pages/UpdateOrder';
import LoginForm from '../components/LoginForm';
import Register from '../components/Register';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import CourseDetails from '../pages/CourseDetails';
import UserProfile from '../pages/Dashboard/UserProfile';
import Home from '../pages/Home';
import ProtectedRoute from './ProtectedRoute';
// import Cart from '../pages/CartExample';
import CourseLayout from '@/pages/Dashboard/CourseView';
import UIComponents from '@/pages/Dashboard/UIComponents';
import DashboardLayout from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
// import DashboardCom from './DashboardCom';
// import Contact from '../pages/Contact';
// import NavbarSide from './NavbarSide';
// import Ordertoclaim from './Ordertoclaim';
// import FormContact from './blocks/FormContact';

// if url is one of the defined routes: load the corresponding component
const Main = () => {
  const location = useLocation();
  // const { user } = useContext(AuthContext);
  return (
    <AnimatedPage>
      <AnimatePresence mode="sync">
        <main>
          {/* <NavbarSide /> */}

          <Routes key={location.pathname} location={location}>
            {/* <Switch> */}

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
              path="/dashboard/:item?"
              element={
                <DashboardLayout>
                  <ProtectedRoute />
                </DashboardLayout>
              }
            >
              <Route path="course/:id" element={<CourseLayout />} />
              <Route path="components" element={<UIComponents />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="profile" element={<UserProfile />} />
            </Route>

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
            {/* </Switch> */}
          </Routes>
        </main>
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default Main;
