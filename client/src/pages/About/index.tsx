const About = () => {
  return (
      <div className="bg-background dark:bg-background py-2 px-4 mx-auto lg:py-8 lg:px-6">
        <div className="mx-auto">
          <h1 className="text-center mt-6 mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            iCreate Courses
          </h1>
          <h1 className="mb-4 text-center tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Full-Stack E-Learning Web App
          </h1>
          <p className="m-8 text-center text-xl  text-gray-500 dark:text-gray-400">
            Coded by Jakob Grosse using the following technologies:
          </p>

          <div className="flex flex-wrap gap-8 justify-center">
            <div>
              <h2>Frontend</h2>
              <ul className="list-disc list-inside">
                <li>React</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
                <li>shadcn/ui</li>
              </ul>
              <br />
              <h2>Backend</h2>
              <ul className="list-disc list-inside">
                <li>Node.js</li>
                <li>MongoDB Atlas</li>
              </ul>
            </div>
            <br />

            <div>
              <h2>External Libraries</h2>
              <ul className="list-disc list-inside">
                <li>react-quill3 rich-text editor</li>
              </ul>
              <br />
              <h2>Node.js Middleware</h2>
              <ul className="list-disc list-inside">
                <li>Express</li>
                <li>mongoose</li>
                <li>brypt</li>
                <li>jwt</li>
                <li>cors</li>
                <li>dotenv</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
  );
};

export default About;
