import React from 'react'
import { FaPaypal, FaStripe, FaMoneyBill, FaCreditCard  } from 'react-icons/fa'

const PaymentSection = () => {
    // When a link is clicked, the if the forms a filled then, pass the action to the parent to make the call to the relevant page.
  return (
    <div className='my-4 flex flex-wrap gap-x-4'>
        <div className="basis-full  mb-2">Choose a payment option</div>
        <div className="hover:cursor-pointer border border-blue-500 hover:scale-105 flex items-center justify-center gap-3 h-12 p-3 mb-4 text-blue-500 transition duration-300 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
            <p>Paypal</p><FaPaypal/> 
        </div>
        <div className="hover:cursor-pointer hover:scale-105 border border-blue-500 flex items-center justify-center gap-3 h-12 p-3 mb-4 text-blue-500 transition duration-300 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
            <p>Credit Card</p><FaCreditCard/>
        </div>
        <div className="hover:cursor-pointer hover:scale-105 border border-blue-500 flex items-center justify-center gap-3 h-12 p-3 mb-4 text-blue-500 transition duration-300 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
            <p>Stripe</p><FaStripe size={'2rem'}/>
        </div>
        <div className="hover:cursor-pointer hover:scale-105 border border-blue-500 flex items-center justify-center gap-3 h-12 p-3 mb-4 text-blue-500 transition duration-300 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
            <p>Bank Transfer</p><FaMoneyBill />
        </div>
    </div>
  )
}

export default PaymentSection