import { Button } from '@/components/ui/button';
import * as Navigation from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

// import Hero from '../components/home/Hero';
import Courses from '../components/Courses';
import Userprofile from '../components/Userprofile';
import Header from '../components/home/Header';
import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';
// import SectionTeam from './blocks/SectionTeam';
// import SectionFeature from './blocks/SectionFeature';
// import SectionTestimonials from './blocks/SectionTestimonials';

const Home = () => {
  return (
    <>
      {/* <Userprofile /> */}
      {/* <Hero /> */}
      <div className="bg-red-500 dark:bg-green-500">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link to="/doc">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link to="/dox">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Button>Click me</Button>

      <Courses />
      {/* <SectionFeature />
      <SectionTestimonials />
      <SectionTeam /> */}
    </>
  );
};

export default Home;
