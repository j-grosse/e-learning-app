import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-2 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h1 className="text-center mt-6 mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            iCreate Courses
          </h1>
          <p className="mb-4 text-center text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Full-Stack Web App Project
          </p>
          <p className="mb-4 text-center text-lg font-light text-gray-500 dark:text-gray-400">
            E-Learning Portal made with the following technologies
          </p>

          <div className="flex flex-wrap gap-8">
            <div>
              <h2>Frontend</h2>
              <ul>
                <li>React</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
              </ul>
              <br />
              <h2>Backend</h2>
              <ul>
                <li>Node.js</li>
                <li>MongoDB Atlas</li>
              </ul>
            </div>
            <br />

            <div>
              <h2>External Libraries</h2>
              <ul>
                <li>draft.js rich-text editor</li>
                <li>React draft WYSIWYG</li>
              </ul>
              <br />
              <h2>Node.js Middleware</h2>
              <ul>
                <li>Express</li>
                <li>mongoose</li>
                <li>brypt</li>
                <li>jwt</li>
                <li>cors</li>
                <li>dotenv</li>
              </ul>
            </div>
          </div>

          <Button
            variant="submitFull"
            className="w-1/2 mt-12"
            onClick={() => {
              navigate('/');
            }}
          >
            Back to Homepage
          </Button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default About;
