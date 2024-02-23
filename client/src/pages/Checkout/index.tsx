import React from 'react';
import { FaPaypal } from 'react-icons/fa';

const Checkout = () => {
  return (
    <div>
      <div className="checkout-section section-padding-01">
        <div className="container custom-container">
          <div className="row gy-8">
            <div className="col-lg-7">
              {/* <!-- Checkout Form Start --> */}
              <div className="checkout-form">
                {/* <!-- Checkout Form Info Start --> */}
                <div className="checkout-form__info">
                  <p>
                    Returning customer?{' '}
                    <button
                      className="info-toggle"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                    >
                      Click here to login
                    </button>
                  </p>
                </div>
                {/* <!-- Checkout Form Info End --> */}

                {/* <!-- Checkout Form Info Start --> */}
                <div className="checkout-form__info">
                  <p>
                    Have a coupon?{' '}
                    <button
                      className="info-toggle"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                    >
                      Click here to enter your code
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="checkout-form__item">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Coupon code"
                      />
                      <button className="coupon-btn">
                        <i className="fas fa-gift"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- Checkout Form Info End --> */}

                {/* <!-- Checkout Form Start --> */}
                <div className="checkout-form__details">
                  <h4 className="checkout-form__title">Billing details</h4>

                  <div className="row gy-4">
                    <div className="col-md-6">
                      {/* <!-- Checkout Form Input Start --> */}
                      <div className="checkout-form__input">
                        <label className="form-label">First name *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      {/* <!-- Checkout Form Input End --> */}
                    </div>
                    <div className="col-md-6">
                      {/* <!-- Checkout Form Input Start --> */}
                      <div className="checkout-form__input">
                        <label className="form-label">Last name *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                        />
                      </div>
                      {/* <!-- Checkout Form Input End --> */}
                    </div>
                    <div className="col-md-12">
                      {/* <!-- Checkout Form Input Start --> */}
                      <div className="checkout-form__input">
                        <label className="form-label">Company name *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Company name"
                        />
                      </div>
                      {/* <!-- Checkout Form Input End --> */}
                    </div>
                    <div className="col-md-12">
                      {/* <!-- Checkout Form Input Start --> */}
                      <div className="checkout-form__input">
                        <label className="form-label">Country / Region*</label>
                        <select
                          className="select2 select2-hidden-accessible"
                          data-select2-id="select2-data-1-cm2g"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option value="01">option 01</option>
                          <option value="01">option 01</option>
                          <option value="01">option 01</option>
                          <option value="01">option 01</option>
                          <option value="01">option 01</option>
                          <option value="01">option 01</option>
                          <option value="01">option 01</option>
                          <option value="01">option 01</option>
                          <option value="01">option 01</option>
                          <option value="01">option 01</option>
                          <option value="01">option 01</option>
                          <option value="01">option 01</option>
                          <option
                            value="01"
                            data-select2-id="select2-data-3-0bbz"
                          >
                            option 01
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-2-gzn0"
                          style={{width: "84.6px"}}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="0"
                              aria-disabled="false"
                              aria-labelledby="select2-bsat-container"
                              aria-controls="select2-bsat-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-bsat-container"
                                role="textbox"
                                aria-readonly="true"
                                title="option 01"
                              >
                                option 01
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                      {/* <!-- Checkout Form Input End --> */}
                    </div>
                    <div className="col-md-8">
                      {/* <!-- Checkout Form Input Start --> */}
                      <div className="checkout-form__input">
                        <label className="form-label">Street address *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      {/* <!-- Checkout Form Input End --> */}
                    </div>
                    <div className="col-md-4">
                      {/* <!-- Checkout Form Input Start --> */}
                      <div className="checkout-form__input">
                        <label className="form-label">
                          Apartment, suite, unit, etc. *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment, suite, unit, etc."
                        />
                      </div>
                      {/* <!-- Checkout Form Input End --> */}
                    </div>
                    <div className="col-md-4 col-sm-4">
                      {/* <!-- Checkout Form Input Start --> */}
                      <div className="checkout-form__input">
                        <label className="form-label">Town / City *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Town / City"
                        />
                      </div>
                      {/* <!-- Checkout Form Input End --> */}
                    </div>
                    <div className="col-md-4 col-sm-4">
                      {/* <!-- Checkout Form Input Start --> */}
                      <div className="checkout-form__input">
                        <label className="form-label">State *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="State"
                        />
                      </div>
                      {/* <!-- Checkout Form Input End --> */}
                    </div>
                    <div className="col-md-4 col-sm-4">
                      {/* <!-- Checkout Form Input Start --> */}
                      <div className="checkout-form__input">
                        <label className="form-label">Zip *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Zip"
                        />
                      </div>
                      {/* <!-- Checkout Form Input End --> */}
                    </div>
                    <div className="col-md-6">
                      {/* <!-- Checkout Form Input Start --> */}
                      <div className="checkout-form__input">
                        <label className="form-label">Phone *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                      {/* <!-- Checkout Form Input End --> */}
                    </div>
                    <div className="col-md-6">
                      {/* <!-- Checkout Form Input Start --> */}
                      <div className="checkout-form__input">
                        <label className="form-label">Email address *</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email address"
                        />
                      </div>
                      {/* <!-- Checkout Form Input End --> */}
                    </div>
                  </div>

                  {/* <!-- Checkout Form Input Start --> */}
                  <div className="mt-4 checkout-form__input form-check">
                    <input type="checkbox" id="account" />
                    <label for="account">Create an account?</label>
                  </div>
                  {/* <!-- Checkout Form Input End --> */}

                  {/* <!-- Checkout Form Account Start --> */}
                  <div className="mt-4 checkout-form__account">
                    {/* <!-- Checkout Form Input Start --> */}
                    <div className="checkout-form__input">
                      <label className="form-label">
                        Create account password *
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                      />
                    </div>
                    {/* <!-- Checkout Form Input End --> */}
                  </div>
                  {/* <!-- Checkout Form Account End --> */}

                  {/* <!-- Checkout Form Input Start --> */}
                  <div className="mt-4 checkout-form__input form-check">
                    <input type="checkbox" id="shipping" />
                    <label for="shipping"> Ship to a different address?</label>
                  </div>
                  {/* <!-- Checkout Form Input End --> */}

                  {/* <!-- Checkout Form Shipping Start --> */}
                  <div className="mt-4 checkout-form__shipping">
                    <div className="row gy-4">
                      <div className="col-md-6">
                        {/* <!-- Checkout Form Input Start --> */}
                        <div className="checkout-form__input">
                          <label className="form-label">First name *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                        {/* <!-- Checkout Form Input End --> */}
                      </div>
                      <div className="col-md-6">
                        {/* <!-- Checkout Form Input Start --> */}
                        <div className="checkout-form__input">
                          <label className="form-label">Last name *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                          />
                        </div>
                        {/* <!-- Checkout Form Input End --> */}
                      </div>
                      <div className="col-md-12">
                        {/* <!-- Checkout Form Input Start --> */}
                        <div className="checkout-form__input">
                          <label className="form-label">Company name *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company name"
                          />
                        </div>
                        {/* <!-- Checkout Form Input End --> */}
                      </div>
                      <div className="col-md-12">
                        {/* <!-- Checkout Form Input Start --> */}
                        <div className="checkout-form__input">
                          <label className="form-label">
                            Country / Region*
                          </label>
                          <select
                            className="select2 select2-hidden-accessible"
                            data-select2-id="select2-data-4-p2xc"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="01">option 01</option>
                            <option value="01">option 01</option>
                            <option value="01">option 01</option>
                            <option value="01">option 01</option>
                            <option value="01">option 01</option>
                            <option value="01">option 01</option>
                            <option value="01">option 01</option>
                            <option value="01">option 01</option>
                            <option value="01">option 01</option>
                            <option value="01">option 01</option>
                            <option value="01">option 01</option>
                            <option value="01">option 01</option>
                            <option
                              value="01"
                              data-select2-id="select2-data-6-7gwr"
                            >
                              option 01
                            </option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="select2-data-5-0ss2"
                            style={{width: "auto"}}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-disabled="false"
                                aria-labelledby="select2-pbru-container"
                                aria-controls="select2-pbru-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-pbru-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="option 01"
                                >
                                  option 01
                                </span>
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation"></b>
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                        {/* <!-- Checkout Form Input End --> */}
                      </div>
                      <div className="col-md-8">
                        {/* <!-- Checkout Form Input Start --> */}
                        <div className="checkout-form__input">
                          <label className="form-label">Street address *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                        {/* <!-- Checkout Form Input End --> */}
                      </div>
                      <div className="col-md-4">
                        {/* <!-- Checkout Form Input Start --> */}
                        <div className="checkout-form__input">
                          <label className="form-label">
                            Apartment, suite, unit, etc. *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Apartment, suite, unit, etc."
                          />
                        </div>
                        {/* <!-- Checkout Form Input End --> */}
                      </div>
                      <div className="col-md-4 col-sm-4">
                        {/* <!-- Checkout Form Input Start --> */}
                        <div className="checkout-form__input">
                          <label className="form-label">Town / City *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Town / City"
                          />
                        </div>
                        {/* <!-- Checkout Form Input End --> */}
                      </div>
                      <div className="col-md-4 col-sm-4">
                        {/* <!-- Checkout Form Input Start --> */}
                        <div className="checkout-form__input">
                          <label className="form-label">State *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="State"
                          />
                        </div>
                        {/* <!-- Checkout Form Input End --> */}
                      </div>
                      <div className="col-md-4 col-sm-4">
                        {/* <!-- Checkout Form Input Start --> */}
                        <div className="checkout-form__input">
                          <label className="form-label">Zip *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Zip"
                          />
                        </div>
                        {/* <!-- Checkout Form Input End --> */}
                      </div>
                      <div className="col-md-6">
                        {/* <!-- Checkout Form Input Start --> */}
                        <div className="checkout-form__input">
                          <label className="form-label">Phone *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                          />
                        </div>
                        {/* <!-- Checkout Form Input End --> */}
                      </div>
                      <div className="col-md-6">
                        {/* <!-- Checkout Form Input Start --> */}
                        <div className="checkout-form__input">
                          <label className="form-label">Email address *</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email address"
                          />
                        </div>
                        {/* <!-- Checkout Form Input End --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Checkout Form Shipping End --> */}

                  {/* <!-- Checkout Form Input Start --> */}
                  <div className="mt-4 checkout-form__input">
                    <label className="form-label">Order notes </label>
                    <textarea
                      className="form-control"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                    ></textarea>
                  </div>
                  {/* <!-- Checkout Form Input End --> */}
                </div>
                {/* <!-- Checkout Form End --> */}

                {/* <!-- Checkout Payment Method End --> */}
                <div className="checkout-form__payment">
                  <h4 className="checkout-form__title">Payment information</h4>

                  <ul className="checkout-form__payment-methods">
                    <li className="checkout-form__payment-method">
                      <input
                        className="payment-method"
                        type="radio"
                        id="cash"
                        checked=""
                        name="payment-method"
                      />
                      <label
                        className="checkout-form__payment-title"
                        for="cash"
                      >
                        <span className="payment-icon">
                          <FaPaypal />
                        </span>
                        <span className="payment-name">Cash on delivery</span>
                      </label>

                      <div className="payment-details" style={{display: "block"}}>
                        <p>Pay with cash upon delivery.</p>
                      </div>
                    </li>
                    <li className="checkout-form__payment-method">
                      <input
                        className="payment-method"
                        type="radio"
                        id="bank"
                        name="payment-method"
                      />
                      <label
                        className="checkout-form__payment-title"
                        for="bank"
                      >
                        <span className="payment-icon"></span>
                        <span className="payment-name">
                          Direct bank transfer
                        </span>
                      </label>

                      <div className="payment-details">
                        <p>
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      </div>
                    </li>
                    <li className="checkout-form__payment-method">
                      <input
                        className="payment-method"
                        type="radio"
                        id="check"
                        name="payment-method"
                      />
                      <label
                        className="checkout-form__payment-title"
                        for="check"
                      >
                        <span className="payment-icon"></span>
                        <span className="payment-name">Check payments</span>
                      </label>

                      <div className="payment-details">
                        <p>
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                    </li>
                    <li className="checkout-form__payment-method">
                      <input
                        className="payment-method"
                        type="radio"
                        id="paypal"
                        name="payment-method"
                      />
                      <label
                        className="checkout-form__payment-title"
                        for="paypal"
                      >
                        <span className="payment-icon"></span>
                        <span className="payment-name">Cash on delivery</span>
                      </label>

                      <div className="payment-details">
                        <p>
                          Pay via PayPal; you can pay with your credit card if
                          you don’t have a PayPal account.
                        </p>
                      </div>
                    </li>
                    <li className="checkout-form__payment-method">
                      <input
                        className="payment-method"
                        type="radio"
                        id="card"
                        name="payment-method"
                      />
                      <label
                        className="checkout-form__payment-title"
                        for="card"
                      >
                        <span className="payment-icon"></span>
                        <span className="payment-name">Cash on delivery</span>
                      </label>

                      <div className="payment-details">
                        <p>
                          Pay with your credit card via Stripe. TEST MODE
                          ENABLED. In test mode, you can use the card number
                          4242424242424242 with any CVC and a valid expiration
                          date or check the Testing Stripe documentation for
                          more card numbers.
                        </p>

                        <ul className="payment-option">
                          <li>
                            <div className="form-check">
                              <input
                                className="card-option"
                                type="radio"
                                id="payment1"
                                checked=""
                                name="payment-option"
                              />
                              <label for="payment1">
                                Visa ending in 4242 (expires 04/24)
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                className="card-option"
                                type="radio"
                                id="payment2"
                                name="payment-option"
                              />
                              <label for="payment2">
                                Use a new payment method
                              </label>
                            </div>
                          </li>
                        </ul>
                        <div className="checkout-form__payment-card">
                          {/* <!-- Checkout Form Input Start --> */}
                          <div className="checkout-form__input">
                            <label className="form-label">
                              Credit or debit card
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Credit or debit card"
                            />
                          </div>
                          {/* <!-- Checkout Form Input End --> */}
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="checkout-form__place-order">
                    {/* <!-- Checkout Form Input Start --> */}
                    <div className="checkout-form__input form-check">
                      <input type="checkbox" id="conditions" />
                      <label for="conditions">
                        I have read and agree to the website terms and
                        conditions *
                      </label>
                    </div>
                    {/* <!-- Checkout Form Input End --> */}
                    <button className="btn btn-primary btn-hover-secondary">
                      Place order
                    </button>
                  </div>
                </div>
                {/* <!-- Checkout Payment Method End --> */}
              </div>
              {/* <!-- Checkout Form End --> */}
            </div>
            <div className="col-lg-5">
              {/* <!-- Checkout Form Start --> */}
              <div className="checkout-order">
                <h4 className="checkout-order__title">Order summary</h4>

                <div className="checkout-order__details table-responsive">
                  <table className="table">
                    <tbody>
                      <tr className="checkout-order__cart-item">
                        <td className="checkout-order__info">
                          <div className="checkout-order__product">
                            <div className="checkout-order__product-thumbnail">
                              <img
                                src="assets/images/product/product-1.png"
                                alt="Product"
                                width="80"
                                height="80"
                              />
                            </div>
                            <div className="checkout-order__product-caption">
                              <h3 className="checkout-order__name">
                                Attached <span className="quantity">x1</span>
                              </h3>
                            </div>
                          </div>
                        </td>
                        <td className="checkout-order__total">
                          <span className="sale-price">
                            $72<span className="separator">.00</span>
                          </span>
                        </td>
                      </tr>
                      <tr className="checkout-order__cart-item">
                        <td className="checkout-order__info">
                          <div className="checkout-order__product">
                            <div className="checkout-order__product-thumbnail">
                              <img
                                src="assets/images/product/product-2.png"
                                alt="Product"
                                width="80"
                                height="80"
                              />
                            </div>
                            <div className="checkout-order__product-caption">
                              <h3 className="checkout-order__name">
                                Awesome for Websites{' '}
                                <span className="quantity">x1</span>
                              </h3>
                            </div>
                          </div>
                        </td>
                        <td className="checkout-order__total">
                          <span className="sale-price">
                            $78<span className="separator">.00</span>
                          </span>
                        </td>
                      </tr>
                      <tr className="checkout-order__cart-item">
                        <td className="checkout-order__info">
                          <div className="checkout-order__product">
                            <div className="checkout-order__product-thumbnail">
                              <img
                                src="assets/images/product/product-3.png"
                                alt="Product"
                                width="80"
                                height="80"
                              />
                            </div>
                            <div className="checkout-order__product-caption">
                              <h3 className="checkout-order__name">
                                Business Administration{' '}
                                <span className="quantity">x1</span>
                              </h3>
                            </div>
                          </div>
                        </td>
                        <td className="checkout-order__total">
                          <span className="sale-price">
                            $89<span className="separator">.00</span>
                          </span>
                        </td>
                      </tr>
                      <tr className="checkout-order__cart-item">
                        <td className="checkout-order__info">
                          <div className="checkout-order__product">
                            <div className="checkout-order__product-thumbnail">
                              <img
                                src="assets/images/courses/courses-7.jpg"
                                alt="Product"
                                width="80"
                                height="80"
                              />
                            </div>
                            <div className="checkout-order__product-caption">
                              <h3 className="checkout-order__name">
                                Mechanical Engineering and Electrical
                                Engineering Explained
                                <span className="quantity">x1</span>
                              </h3>
                            </div>
                          </div>
                        </td>
                        <td className="checkout-order__total">
                          <span className="sale-price">
                            $84<span className="separator">.00</span>
                          </span>
                        </td>
                      </tr>
                      <tr className="checkout-order__cart-item">
                        <td className="checkout-order__info">
                          <div className="checkout-order__product">
                            <div className="checkout-order__product-thumbnail">
                              <img
                                src="assets/images/courses/courses-28.jpg"
                                alt="Product"
                                width="80"
                                height="80"
                              />
                            </div>
                            <div className="checkout-order__product-caption">
                              <h3 className="checkout-order__name">
                                Digital Advertising &amp; Marketing 101: Take
                                The Complete Guide
                                <span className="quantity">x1</span>
                              </h3>
                            </div>
                          </div>
                        </td>
                        <td className="checkout-order__total">
                          <span className="sale-price">
                            $79<span className="separator">.00</span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td>
                          <span className="subtotal-price">
                            $131<span className="separator">.00</span>
                          </span>
                        </td>
                      </tr>
                      <tr className="cart-shipping">
                        <th>Shipping</th>
                        <td>
                          Free shipping{' '}
                          <span className="shipping-fee">
                            $5<span className="separator">.00</span>
                          </span>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td>
                          <span className="total-price">
                            $136<span className="separator">.00</span>
                          </span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              {/* <!-- Checkout Form End --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
