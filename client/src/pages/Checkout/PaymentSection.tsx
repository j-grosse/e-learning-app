import { Button } from '@/components/ui/button'
import React from 'react'
import { FaPaypal, FaStripe, FaMoneyBill, FaCreditCard  } from 'react-icons/fa'

const PaymentSection = () => {
    // When a link is clicked, the if the forms a filled then, pass the action to the parent to make the call to the relevant page.
  return (
    <div className='my-4 flex flex-wrap gap-x-4'>
        <h4 className="basis-full font-semibold  mb-2">Choose a payment option</h4>
        <Button variant='secondary'>
            <FaPaypal className='mr-2' /> Paypal
        </Button>
        <Button variant='secondary'>
            <FaCreditCard className='mr-2' /> Credit Card
        </Button>
        <Button variant='secondary'>
            <FaStripe className='mr-2' /> Stripe
        </Button>
        <Button variant='secondary'>
            <FaMoneyBill className='mr-2' /> Bank Transfer
        </Button>
    </div>
  )
}

export default PaymentSection