import { Button } from '@/components/ui/button';
import { columns } from '@/components/ui/columns';
import { DataTable } from '@/components/ui/data-table';
import { useToast } from '@/components/ui/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartDetails from '../Checkout/CartDetails';

const index = () => {
  const selectedCourses = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleClick = () => {
    if (selectedCourses.size) {
      navigate('/dashboard/checkout');
    } else {
      toast({
        title: 'Empty Cart!',
        description: 'Add some courses to your cart and then checkout',
        action: (
          <Link to={'/'}>
            <Button>To Courses</Button>
          </Link>
        ),
      });
    }
  };

  return (
    <div className="row w-full max-w-2xl">
      <CartDetails />
      <Button
        variant="secondary"
        onClick={handleClick}
        className="text-primary hover:text-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-primary dark:bg-secondary dark:hover:bg-primary dark:focus:ring-primary-800 shadow-lg"
      >
        Checkout
      </Button>
    </div>
  );
};

export default index;
