import { useEffect, useRef } from 'react';
// import hero from '../../assets/images/hero.jpg';
import HeroVideo from '../../assets/images/heroVideo.mp4';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <>
      <section className="bg-foreground shadow-lg dark:bg-gray-900">
        {/* Background image --- parent style: opacity 0.99 relative --- child: img opacity absolute z-index w h cover --- */}
        <div
          className="grid px-0 py-8 mx-auto shadow-lg max-w-screen-xxl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
          style={{ opacity: 0.99, position: 'relative' }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              opacity: 0.8,
              zIndex: -1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            ref={videoRef}
          >
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* <img
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
          /> */}

          <div className="p-6 rounded-2xl place-self-start lg:col-span-6 animate-in zoom-in duration-700">
            <p className="max-w-2xl mb-6 font-bold text-background lg:mb-8 md:text-lg lg:text-2xl dark:text-foreground">
            </p>
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold leading-none tracking-tight text-primary md:text-5xl xl:text-6xl">
              Electronic Music Creation and Performance
            </h1>
            <p className="max-w-2xl mb-6 text-background lg:mb-8 text-md md:text-lg lg:text-2xl dark:text-foreground">
              Online Courses by Cologne's Underground Veterans
            </p>
            {/* CTA button 1 */}

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
