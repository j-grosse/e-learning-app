import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProgressDemo from '@/components/ProgressDemo';
import { Progress } from '@/components/ui/progress';

// Test page for testing for shadcn components
const UIComponents = () => {
  return (
    <div>
      <h2 className='mb-8'>UIComponents</h2>

      <Button variant="outline" asChild>
        <Link to="/#">Button</Link>
      </Button>

      <Progress value={33} />

      <ProgressDemo />
    </div>
  );
};

export default UIComponents;
