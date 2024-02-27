import React, { useEffect } from 'react';
import { FaPaypal } from 'react-icons/fa';
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
      <div className="checkout-form__info__returningCustomer">
        <p>
          Returning customer?{' '}
          <button
            className="info-toggle text-white bg-blue-500 inline-flex items-center hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Click here to login
          </button>
        </p>
      </div>
      <div className="checkout-form__info__coupon">
        <p>
          Have a coupon?{' '}
          <button
            className="info-toggle text-blue-500 border border-blue-500 inline-flex items-center hover:text-white hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
          >
            Click here to enter your code
          </button>
        </p>
        {/* <div className="collapse" id="collapseExample"> */}
          <div className="checkout-form__item">
            <input
              type="text"
              className="form-control"
              placeholder="Coupon code"
            />
            <button className="coupon-btn text-blue-500 border border-blue-500 inline-flex items-center hover:text-white hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg">
              <i className="fas fa-gift"></i>
            </button>
          {/* </div> */}
        </div>
      </div>
      {countryList && <CheckoutForm countryList={countryList}/>}

    </div>




  );
};

export default Checkout;
