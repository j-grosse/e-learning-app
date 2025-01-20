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
      <Button variant="submitFull" className="w-1/4" onClick={handleClick}>
        Checkout
      </Button>
    </div>
  );
};

export default index;
