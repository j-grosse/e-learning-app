import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CheckoutForm = ({ countryList, formName }) => {
  return (
    <div className="checkout-form__details my-4">
      <h4 className="checkout-form__title text-lg font-semibold">{formName}</h4>

      {/* Form for billing */}
      <div className="row gy-4">
        {/* First and Last Name */}
        <div className="md:flex gap-4 mb-4">
          <div className="checkout-form__input__firstName flex-auto">
            <Label htmlFor="firstName">First Name</Label>
            <Input type="text" id="firstName" placeholder="John" />
          </div>
          <div className="checkout-form__input__lastName flex-auto">
            <Label htmlFor="firstName">Last Name</Label>
            <Input type="text" id="lastName" placeholder="Doe" />
          </div>
        </div>
        {/* Company Name  */}
        <div className="checkout-form__input_company mb-4">
          <Label htmlFor="companyName">Company Name</Label>
          <Input type="text" id="companyName" placeholder="Google" />
        </div>
        {/* Country */}
        <div className="checkout-form__input__country mb-4">
          <Label htmlFor="companyName">Country</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {countryList &&
                  countryList.map((country, index) => (
                    <SelectItem key={index} value={country}>
                      {country}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            data-select2-id="select2-data-1-cm2g"
            // tabindex="-1"
            aria-hidden="true"
          >
            {countryList && countryList.map((country, index) => (
              <SelectItem key={index} value={country}>{country}</SelectItem>
            ))}
          </select> */}
        </div>
        {/* Street and Suite Number  */}
        <div className="md:flex gap-4 mb-4">
          <div className="checkout-form__input__street flex-auto">
            <Label htmlFor="strAddress">Street Address *</Label>
            <Input type="text" id="strAddress" placeholder="Hofer Str" />
          </div>
          <div className="checkout-form__input__apartment">
            <Label htmlFor="apartment">Apartment, Suite, Unit *</Label>
            <Input type="text" id="apartment" placeholder="7B" />
          </div>
        </div>
        {/* City, State, Zip */}
        <div className="md:flex gap-4 mb-4">
          <div className="checkout-form__input__city flex-auto">
            <Label htmlFor="town">Town / City *</Label>
            <Input type="text" id="town" placeholder="Berlin" />
          </div>
          <div className="checkout-form__input__state flex-auto">
            <Label htmlFor="state">State *</Label>
            <Input type="text" id="state" placeholder="Berlin" />
          </div>
          <div className="checkout-form__input__zip flex-auto">
            <Label htmlFor="strAddress">Zip *</Label>
            <Input type="text" id="zip" placeholder="408765" />
          </div>
        </div>
        <div className="checkout-form__input__phone mb-4">
          <Label htmlFor="phone">Phone *</Label>
          <Input type="tel" id="phone" placeholder="000000000" />
        </div>
        <div className="checkout-form__input__email">
          <Label htmlFor="email">Email *</Label>
          <Input type="text" id="email" placeholder="johndoe@gmail.com" />
        </div>
      </div>

      <div className="hidden">
        <div className="mt-4 checkout-form__input form-check">
          <Checkbox id="shipping" />
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
  );
};

export default CheckoutForm;
