import React, { useEffect } from 'react';
import { FaGift } from 'react-icons/fa';
import * as countries from 'i18n-iso-countries';
import * as english from 'i18n-iso-countries/langs/en.json'
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
  // const countryList = cou
  const countryList = Object.values(countries.getNames("en"))

  useEffect(() => {
    countries.registerLocale(english)
  }, [])

  return (
    <div>
      <div className="checkout-form__info__returningCustomer flex gap-4 mb-4 items-center">
        <p>Returning customer?{' '}</p>
        <button
          className="info-toggle text-white bg-blue-500 inline-flex items-center hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          Click here to login
        </button>
      </div>

      {countryList && <CheckoutForm countryList={countryList}/>}

    </div>




  );
};

export default Checkout;
