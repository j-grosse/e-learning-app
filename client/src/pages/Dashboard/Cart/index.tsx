import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import CartDetails from '../Checkout/CartDetails';

const Cart = () => {
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
          <Link to="/">
            <Button>To Courses</Button>
          </Link>
        ),
      });
    }
  };

  return (
    <div>
      <CartDetails />
      <div className='p-3'>
        <Button variant="submitFull" onClick={handleClick}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
