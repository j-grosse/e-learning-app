import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../context/Auth';
import { useNavigate } from 'react-router-dom';
import hero from '../assets/images/hero.png'

// import image01 from '../assets/image01.jpg';
// import image02 from '../assets/image02.png';
// import HeroVideo from '../assets/heroVideo.mp4';

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
      <section className="bg-white dark:bg-gray-900 shadow-lg">
        {/* Background image --- parent style: opacity 0.99 relative --- child: img opacity absolute z-index w h cover --- */}
        <div
          className="grid max-w-screen-xxl px-0 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 shadow-lg"
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
              opacity: 0.5,
              zIndex: -1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          <div className="backdrop-blur-lg rounded-2xl place-self-start lg:col-span-6 p-6">
            <h1 className="text-primary-800 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              You Learn, we earn
            </h1>
            <p className="max-w-2xl mb-6 font-bold text-primary-700 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
              lorem ipsem
              <br />
              lorem Upsem
            </p>

            {/* CTA button 1 */}
            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary-800 rounded-lg bg-primary-200 hover:bg-primary-300 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 shadow-2xl"
            >
              Search Courses
              {/* svg arrow right */}
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
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
