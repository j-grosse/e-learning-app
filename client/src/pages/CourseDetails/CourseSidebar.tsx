import {
  FaCheck,
  FaClock,
  FaFacebookF,
  FaGlobe,
  FaLinkedinIn,
  FaPlayCircle,
  FaShoppingBasket,
  FaSlidersH,
  FaTag,
  FaTumblr,
  FaTwitter
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import thumbnail from '../../assets/images/thumb.png';
import { useAddToCart } from '../../context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';


const CourseSidebar = ( {course} ) => {
  const addToCart = useAddToCart();
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart(course);
    toast({
      title: "Course Added",
      description: `You added ${course.title} by ${course.tutor} to your cart!`,
      action: <Link to={'/dashboard/cart'} ><Button>View Cart</Button></Link> 
    })

  }

  return (
    <div className="flex sticky-parent">
      {/* <!-- Tutor Course Sidebar Start --> */}
      <div className="lg:col-span-4">
        <div className="sticky top-0 z-50 sidebar-sticky">
          {/* <!-- Tutor Course Sidebar Frames Start --> */}
          <div className="">
            {/*  */}
            {/* <!-- Tutor Course Price Preview Start --> */}
            <div className="mb-4 border-2">
              {/* Video Preview Window */}
              <div className="x">
                <div className="ratio ratio-16x9">
                  <img src={thumbnail} />
                  {/* <iframe
                          width="1280"
                          height="720"
                          src="https://www.youtube.com/embed/qKWnFRnjkA0"
                          title="What Is Data Modeling? 2 Minute erwin Expert Explanation"
                          frameBorder="1"
                          allow="web-share"
                          allowFullScreen
                        ></iframe> */}
                </div>
              </div>
              <div className="flex justify-between gap-4 mx-8 my-5">
                <div className="flex">
                  <h2 className="font-bold text-red-600 sale-price">{course.price}</h2>
                  <span className="self-end ml-4 line-through text-thin">
                    €79.00
                  </span>
                </div>
                <div className="self-end px-3 text-sm font-thin text-center text-blue-600 border-2 rounded-sm">
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
                    <div className="value">15.3 hours</div>
                  </li>
                  <hr className="{ruler}" />

                  <li className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <FaPlayCircle /> Lectures
                    </div>
                    <div className="value">4 lectures</div>
                  </li>
                  <hr className="{ruler}" />

                  <li className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <FaTag /> Subject
                    </div>
                    <div className="value">
                      <Link to="#">{course.title}</Link>
                    </div>
                  </li>
                  <hr className="{ruler}" />

                  <li className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <FaGlobe /> Language
                    </div>
                    <div className="value">Russian</div>
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
              <div className="mx-8">
                <button onClick={handleAddToCart} className="flex items-center justify-center w-full gap-3 p-3 mb-4 text-white bg-blue-500 rounded-md hover:bg-orange-400 hover:text-black ">
                  <FaShoppingBasket /> Add to cart
                </button>
                <button className="flex items-center justify-center w-full gap-3 p-3 mb-4 text-blue-500 transition duration-300 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                  Add to wishlist
                </button>
              </div>
              <div className="flex justify-center gap-4 m-8">
                <Link to="#">
                  <FaFacebookF color="gray" />
                </Link>
                <Link to="#">
                  <FaTwitter color="gray" />
                </Link>
                <Link to="#">
                  <FaLinkedinIn color="gray" />
                </Link>
                <Link to="#">
                  <FaTumblr color="gray" />
                </Link>
              </div>
            </div>
            {/* <!-- Tutor Course Price Preview End --> */}

            {/* <!-- Sidebar Widget Start --> */}
            <div className="p-4 border-2">
              <h2 className="">Course categories</h2>

              <ul className="">
                <li>
                  <Link to="#">Art &amp; Design</Link>
                </li>
                <li>
                  <Link to="#">Business</Link>
                </li>
                <li>
                  <Link to="#">Data Science</Link>
                </li>
                <li>
                  <Link to="#">Development</Link>
                </li>
                <li>
                  <Link to="#">Finance</Link>
                </li>
                <li>
                  <Link to="#">Health &amp; Fitness</Link>
                </li>
                <li>
                  <Link to="#">Lifestyle</Link>
                </li>
                <li>
                  <Link to="#">Marketing</Link>
                </li>
                <li>
                  <Link to="#">Music</Link>
                </li>
                <li>
                  <Link to="#">Personal Development</Link>
                </li>
                <li>
                  <Link to="#">Photography</Link>
                </li>
                <li>
                  <Link to="#">Teaching &amp; Academics</Link>
                </li>
              </ul>
            </div>
            {/* <!-- Sidebar Widget End --> */}

            {/* <!-- Sidebar Widget Start --> */}
            <div className="p-4 mt-4 border-2">
              <h2 className="">Related Courses</h2>

              <div className="">
                <div className="">
                  <div className="">
                    <Link to="#">
                      <img
                        src={thumbnail}
                        alt="Courses"
                        width="120"
                        height="72"
                      />
                    </Link>
                  </div>
                  <div className="">
                    <h2 className="">
                      <Link to="#">
                        Artificial Intelligence: Reinforcement Learning in
                        Python
                      </Link>
                    </h2>
                    <div>
                      <span className="">
                        $46<span className="">.00</span>
                      </span>
                      <span className="">
                        $76<span className="">.00</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <Link to="#">
                      <img
                        src={thumbnail}
                        alt="Courses"
                        width="120"
                        height="72"
                      />
                    </Link>
                  </div>
                  <div className="">
                    <h2 className="">
                      <Link to="#">
                        Statistics for Data Science and Business Analysis
                      </Link>
                    </h2>
                    <div className="">
                      <span className="">
                        $25<span className="">.00</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <Link to="#">
                      <img
                        src={thumbnail}
                        alt="Courses"
                        width="120"
                        height="72"
                      />
                    </Link>
                    <div className="">
                      <span className="">-38%</span>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="">
                      <Link to="#">
                        Artificial Intelligence: Reinforcement Learning in
                        Python
                      </Link>
                    </h2>
                    <div className="flex">
                      <span className="">
                        €20<span className="">.00</span>
                      </span>
                      <span className="">
                        €35<span className="">.00</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Sidebar Widget End --> */}
          </div>
          {/* <!-- Tutor Course Sidebar End --> */}
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
