import { Button } from '@/components/ui/button';
import { FaCreditCard, FaPaypal, FaStripe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PaymentSection = ({ handleEnrollments }) => {
  // When a link is clicked, the if the forms a filled then, pass the action to the parent to make the call to the relevant page.
  return (
    <>
      <p className="my-2">Choose a payment option</p>
      <div className="my-4 flex flex-wrap gap-4">
        <Link to="https://paypal.me" target="_blank" rel="noopener noreferrer">
          <Button variant="payment" onClick={handleEnrollments}>
            <FaPaypal className="mr-2" /> Paypal
          </Button>
        </Link>

        <Link
          to="https://dashboard.stripe.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="payment" onClick={handleEnrollments}>
            <FaStripe size={40} className="mr-2" /> Stripe
          </Button>
        </Link>

        <Link
          to="https://mts.mastercard.ca/login.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="payment" onClick={handleEnrollments}>
            <FaCreditCard className="mr-2" /> Credit Card
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PaymentSection;
