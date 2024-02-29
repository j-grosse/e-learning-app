import React from 'react'
import { useCart } from '../../context/CartContext';

const CartDetails = () => {
  const selectedCourses = useCart();
  
  return (
    <div className='mb-4'>
        <h3 className='font-semibold text-xl'>Cart Items</h3>
          { selectedCourses && selectedCourses.map((item, index) => (
            <p key={index}>{index + 1}. {item.title} - By {item.tutor}</p>
        ))}
    </div>
  )
}

export default CartDetails