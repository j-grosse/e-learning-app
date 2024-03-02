import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Test page for testing for shadcn components
const UIComponents = () => {
  return (
    <div className="space-y-4">
      <h2 className="animate-in  zoom-in duration-500 mb-8">UIComponents</h2>

      <Button variant="outline" asChild>
        <Link to="/#">Button</Link>
      </Button>

    </div>
  );
};

export default UIComponents;
