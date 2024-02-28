import React from 'react'

const CheckoutForm = ({countryList, formName}) => {
  return (
    <div className="checkout-form__details my-4">
    <h4 className="checkout-form__title text-lg font-semibold">{formName}</h4>

    {/* Form for billing */}
    <div className="row gy-4">
      {/* First and Last Name */}
      <div className="md:flex gap-4 mb-4">
        <div className="checkout-form__input__firstName flex-auto">
          <label
            htmlFor="Userame"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
          First name *
          </label>
          <input
            placeholder="Your First Name"
            // value=""
            type="text"
            name="Userame"
            id="Userame"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
            defaultValue=""
          />
        </div>
        <div className="checkout-form__input__lastName flex-auto">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name *
          </label>
          <input
            placeholder="Your Last Name"
            // value=""
            type="text"
            name="lastName"
            id="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
            defaultValue=""
          />
        </div>
      </div>
      {/* Company Name  */}
      <div className="checkout-form__input_company mb-4">
        <label
          htmlFor="companyName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Company Name *
        </label>
        <input
          placeholder="Your Company Name"
          // value=""
          type="text"
          name="companyName"
          id="companyName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          required
          defaultValue=""
        />
      </div>
      {/* Country */}
      <div className="checkout-form__input__country mb-4">
        <label className="form-label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Country / Region*
        </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            data-select2-id="select2-data-1-cm2g"
            // tabindex="-1"
            aria-hidden="true"
          >
            {countryList && countryList.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
      </div>
      {/* Street and Suite Number  */}
      <div className="md:flex gap-4 mb-4">
        <div className="checkout-form__input__street flex-auto">
          <label className="form-label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Street address *
          </label>
          <input
            type="text"
            className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="e.g. Hofer Str."
          />
        </div>
        <div className="checkout-form__input__apartment">
          <label className="form-label block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Apartment, suite, unit, etc. *
          </label>
          <input
            type="text"
            className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Apartment, suite, unit, etc."
          />
        </div>  
      </div>
      {/* City, State, Zip */}
      <div className="md:flex gap-4 mb-4">
        <div className="checkout-form__input__city flex-auto">
          <label className="form-label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Town / City *</label>
          <input
            type="text"
            className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Town / City"
          />
        </div>
        <div className="checkout-form__input__state flex-auto">
          <label className="form-label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >State *</label>
          <input
            type="text"
            className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="State"
          />
        </div>
        <div className="checkout-form__input__zip flex-auto">
          <label className="form-label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Zip *</label>
          <input
            type="text"
            className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Zip"
          />
        </div>
      </div>
      <div className="checkout-form__input__phone mb-4">
        <label className="form-label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Phone *</label>
        <input
          type="text"
          className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Phone"
        />
      </div>
      <div className="checkout-form__input__email">
        <label className="form-label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email address *</label>
        <input
          type="email"
          className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Email address"
        />
      </div>
    </div>

    <div className='hidden'>
        <div className="mt-4 checkout-form__input form-check">
        <input type="checkbox" id="shipping" />
        <label htmlFor="shipping"> Ship to a different address?</label>
        </div>

        <div className="mt-4 checkout-form__input_orderNotes">
        <label className="form-label">Order notes </label>
        <textarea
            className="form-control"
            placeholder="Notes about your order, e.g. special notes for delivery."
        ></textarea>
        </div>
    </div>
    </div>
  )
}

export default CheckoutForm