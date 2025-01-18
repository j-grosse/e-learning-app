import React, { useEffect, useState } from 'react';
import { FaGift } from 'react-icons/fa';
import * as countries from 'i18n-iso-countries';
import * as english from 'i18n-iso-countries/langs/en.json';
import CheckoutForm from './CheckoutForm';
import PaymentSection from './PaymentSection';
import CartDetails from './CartDetails';
import { Checkbox } from '@/components/ui/checkbox';

const Checkout = () => {
  const [secondAddress, setSecondAddress] = useState(false);
  const countryList = Object.values(countries.getNames('en'));

  const handleCheckboxChange = () => {
    setSecondAddress(!secondAddress);
  };

  useEffect(() => {
    countries.registerLocale(english);
  }, []);

  return (
    <div>
      <div className="checkout-form__info__returningCustomer hidden flex gap-4 mb-4 items-center">
        <p>Returning customer?</p>
        <button
          className="info-toggle text-white bg-blue-500 inline-flex items-center hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          Click here to login
        </button>
      </div>
      <CartDetails />

      {countryList && (
        <CheckoutForm countryList={countryList} formName={'Billing Details'} />
      )}

      <div className="my-4 flex items-center">
        <label htmlFor="shipping-address" className="mr-4 text-sm">
          Ship to a different address?
        </label>
        <Checkbox
          onCheckedChange={handleCheckboxChange}
          id="shipping-address"
        />
      </div>

      {countryList && secondAddress && (
        <CheckoutForm countryList={countryList} formName={'Shipping Details'} />
      )}

      <PaymentSection />
    </div>
  );
};

export default Checkout;
