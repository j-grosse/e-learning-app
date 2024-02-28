import React from 'react'
import { FaPaypal, FaStripe, FaMoneyBill, FaCreditCard  } from 'react-icons/fa'

const PaymentSection = () => {
    // When a link is clicked, the if the forms a filled then, pass the action to the parent to make the call to the relevant page.
  return (
    <div className='my-4 flex flex-wrap gap-x-4'>
        <div className="basis-full  mb-2">Choose a payment option</div>
        <div className="hover:cursor-pointer hover:scale-105 transition transition-duration-400 self-center flex gap-4 justify-content items-center px-4 border border-black font-semibold h-12 rounded-md">
            <p>Paypal</p><FaPaypal/> 
        </div>
        <div className="hover:cursor-pointer hover:scale-105 transition transition-duration-400 self-center flex gap-4 justify-content items-center px-4 border border-black font-semibold h-12 rounded-md">
            <p>Credit Card</p><FaCreditCard/>
        </div>
        <div className="hover:cursor-pointer hover:scale-105 transition transition-duration-400 self-center flex gap-4 justify-content items-center px-4 border border-black font-semibold h-12 rounded-md">
            <p>Stripe</p><FaStripe size={'2rem'}/>
        </div>
        <div className="hover:cursor-pointer hover:scale-105 transition transition-duration-400 self-center flex gap-4 justify-content items-center px-4 border border-black font-semibold h-12 rounded-md">
            <p>Bank Transfer</p><FaMoneyBill />
        </div>
    </div>
  )
}

export default PaymentSection