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
import { useAddToCart } from '../../context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
// import thumbnail from '../../assets/images/thumb.png';

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
          <Link to="/login">
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
          <Link to="/dashboard/cart">
            <Button onClick={() => window.scrollTo(0, 0)}>View Cart</Button>
          </Link>
        ),
      });
    }
  };

  return (
    <div className="flex sticky-parent p-8 mx-auto">
      <div className="mb-5 sticky top-0 z-50 sidebar-sticky">
        <div className="mb-4 border-2 rounded-lg">
          <div>
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
          <div className="flex justify-between gap-4 mx-8 my-5">
            <div className="flex">
              <h2 className="font-bold text-primary">{course.price}</h2>
              <span className=" ml-4 line-through text-thin"></span>
            </div>
            <div className="px-4 py-1 text-sm font-thin text-center text-primary border-2 rounded-sm">
              39% OFF
            </div>
          </div>
          <div className="">
            <ul className="flex flex-col gap-3 mx-8 font-thin">
              <li className="flex justify-between gap-8">
                <div className="flex items-center gap-4">
                  <FaSlidersH />
                  Level
                </div>
                <div>Beginner</div>
              </li>
              <hr />

              <li className="flex justify-between gap-8">
                <div className="flex items-center gap-4">
                  <FaClock /> Duration
                </div>
                <div>{course.duration || '2'} h</div>
              </li>
              <hr />

              <li className="flex justify-between gap-8">
                <div className="flex items-center gap-4">
                  <FaPlayCircle /> Lectures
                </div>
                <div>{course.courseModules.length}</div>
              </li>
              <hr />

              <li className="flex justify-between gap-8">
                <div className="flex items-center gap-4">
                  <FaTag /> Subject
                </div>
                <div>
                  <div className="text-right">{course.category}</div>
                </div>
              </li>
              <hr />

              <li className="flex justify-between">
                <div className="flex items-center gap-4">
                  <FaGlobe /> Language
                </div>
                <div>English</div>
              </li>
              <hr />
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
            <Button variant="submitFull" className="" onClick={handleAddToCart}>
              <FaShoppingBasket /> Add to cart
            </Button>
            {/* <Button variant="submitFull" className="bg-gray-100">Add to wishlist</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
