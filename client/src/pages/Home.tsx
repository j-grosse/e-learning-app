import Hero from '../components/home/Hero';
import Courses from '../components/Courses';
import Userprofile from '../components/Userprofile';
import Header from '../components/home/Header';
import CourseCard from '../components/CourseCard';
// import SectionTeam from './blocks/SectionTeam';
// import SectionFeature from './blocks/SectionFeature';
// import SectionTestimonials from './blocks/SectionTestimonials';

const Home = () => {
  return (
    <>
      {/* <Userprofile /> */}
      <Hero />
      <Courses />
      {/* <SectionFeature />
      <SectionTestimonials />
      <SectionTeam /> */}
    </>
  );
};

export default Home;
