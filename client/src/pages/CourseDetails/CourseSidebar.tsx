import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import {
  FaCheck,
  FaClock,
  FaGlobe,
  FaPlayCircle,
  FaShoppingBasket,
  FaSlidersH,
  FaTag,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import thumbnail from '../../assets/images/thumb.png';
import { useAddToCart } from '../../context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const CourseSidebar = ({ course }) => {
  const { user } = useContext(AuthContext);
  const addToCart = useAddToCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!user) {
      toast({
        title: 'Login Required',
        description: 'Please login to add courses to your cart',
        action: (
          <Link to={'/login'}>
            <Button onClick={() => window.scrollTo(0, 0)}>Login</Button>
          </Link>
        ),
      });
    } else {
      addToCart(course);
      toast({
        title: 'Course Added',
        description: `You added ${course.title} by ${course.tutor} to your cart!`,
        action: (
          <Link to={'/dashboard/cart'}>
            <Button onClick={() => window.scrollTo(0, 0)}>View Cart</Button>
          </Link>
        ),
      });
    }
  };

  return (
    <div className="flex sticky-parent mt-8">
      {/* <!-- Tutor Course Sidebar Start --> */}
      <div className="mx-auto">
        <div className="mb-5 sticky top-0 z-50 sidebar-sticky">
          {/* <!-- Tutor Course Sidebar Frames Start --> */}
          <div className="">
            {/*  */}
            {/* <!-- Tutor Course Price Preview Start --> */}
            <div className="mb-4 border-2 rounded-lg">
              {/* Video Preview Window */}
              <div className="">
                <div className="">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-48 w-full object-cover rounded-t-lg"
                  />
                  {/* <iframe
                    className="mx-auto w-full"
                    src="https://www.youtube.com/embed/qKWnFRnjkA0"
                    title="What Is Data Modeling?"
                    allow="web-share"
                    allowFullScreen
                  ></iframe> */}
                </div>
              </div>
              <div className="flex justify-between gap-4 mx-8 my-5">
                <div className="flex">
                  <h2 className="font-bold text-primary sale-price">
                    {course.price}
                  </h2>
                  <span className=" ml-4 line-through text-thin"></span>
                </div>
                <div className="px-4 py-1 text-sm font-thin text-center text-primary border-2 rounded-sm">
                  39% OFF
                </div>
              </div>
              <div className="">
                <ul className="flex flex-col gap-3 mx-8 font-thin">
                  <li className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <FaSlidersH />
                      Level
                    </div>
                    <div className="value">Beginner</div>
                  </li>
                  <hr className="{ruler}" />

                  <li className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <FaClock /> Duration
                    </div>
                    <div className="value">{course.duration || 2} hours</div>
                  </li>
                  <hr className="{ruler}" />

                  <li className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <FaPlayCircle /> Lectures
                    </div>
                    <div className="value">{course.courseModules.length}</div>
                  </li>
                  <hr className="{ruler}" />

                  <li className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <FaTag /> Subject
                    </div>
                    <div className="value">
                      <Link to="#">{course.category}</Link>
                    </div>
                  </li>
                  <hr className="{ruler}" />

                  <li className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <FaGlobe /> Language
                    </div>
                    <div className="value">English</div>
                  </li>
                  <hr className="{ruler}" />
                </ul>
              </div>
              <div className="mx-8">
                <h2 className="my-4 text-lg">Material Includes</h2>

                <ul className="mb-4 font-thin">
                  <li className="flex items-center gap-3">
                    <FaCheck />
                    <p>Videos</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheck />
                    <p>Booklets</p>
                  </li>
                </ul>
              </div>
              <div className="m-8">
                <Button
                  variant="submitFull"
                  className=""
                  onClick={handleAddToCart}
                >
                  <FaShoppingBasket /> Add to cart
                </Button>
                {/* <Button variant="submitFull" className="bg-gray-100">Add to wishlist</Button> */}
              </div>
            </div>
            {/* <!-- Tutor Course Price Preview End --> */}
          </div>
          {/* <!-- Tutor Course Sidebar End --> */}
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
