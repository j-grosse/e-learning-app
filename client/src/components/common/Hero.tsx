import { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import hero from '../../assets/images/hero.png';

// import image01 from '../../assets/image01.jpg';
// import image02 from '../../assets/image02.png';
// import HeroVideo from '../../assets/heroVideo.mp4';

const Hero = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (context.user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <>
      <section className="bg-white shadow-lg dark:bg-gray-900">
        {/* Background image --- parent style: opacity 0.99 relative --- child: img opacity absolute z-index w h cover --- */}
        <div
          className="grid px-0 py-8 mx-auto shadow-lg max-w-screen-xxl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
          style={{ opacity: 0.99, position: 'relative' }}
        >
          {/* <video
            autoPlay
            loop
            muted
            style={{
              opacity: 0.5,
              zIndex: -1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            ref={videoRef}
          >
            <source src={HeroVideo} type="video/mp4"/>
            Your browser does not support the video tag.
          </video> */}

          <img
            src={hero}
            alt="Transparent Image"
            style={{
              opacity: 0.6,
              zIndex: -1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          <div className="p-6 rounded-2xl place-self-start lg:col-span-6">
            <p className="max-w-2xl mb-6 font-bold text-primary-700 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
              Your path to success
            </p>
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold leading-none tracking-tight text-primary md:text-5xl xl:text-6xl">
              Access To 4000+ Courses from 500+ Instructors & Institutions
            </h1>
            <p className="max-w-2xl mb-6 text-primary-700 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
              Take your career to the next level.
            </p>
            {/* CTA button 1 */}
            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center px-5 py-3 ml-6 mr-3 font-medium text-center rounded-lg shadow-2xl text-primary-800 bg-primary-200 hover:bg-secondary-500 focus:ring-4 focus:ring-primary-300"
            >
              Search Courses
            </button>
            {/* <img
              src={image02}
              alt="image02"
              style={{ position: 'absolute', bottom: -17, right: 0 }}
            /> */}
          </div>
          {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {/* <img src={image02} alt="image02" />
            <div
              style={{
                borderRadius: '10%',
                overflow: 'hidden',
                display: 'inline-block',
                border: '4px solid black',
                zIndex: -1,
              }}
            >
              <img
                src={image01}
                alt="image01"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div> 
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
