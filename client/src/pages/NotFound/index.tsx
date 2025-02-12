import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-2 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mt-6 mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <h1 className="mb-4 tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </h1>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page.
          </p>
          <Button variant="submitFull" className="w-1/2 mt-12"
            onClick={() => {
              navigate('/');
            }}
          >
            Back to Courses
          </Button>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </section>
  );
};

export default NotFound;