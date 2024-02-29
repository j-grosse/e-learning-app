import React from 'react'
import { useCart, useRemoveFromCart } from '../../context/CartContext';
import { FaCross, FaWindowClose } from 'react-icons/fa';

const CartDetails = () => {
  const selectedCourses = useCart();
  const removeFromCart = useRemoveFromCart();
  
  return (
    <div className='mb-4'>
        <h3 className='font-semibold text-xl'>Cart Items</h3>
          { selectedCourses && selectedCourses.map((item, index) => (
            <div key={index} className='flex gap-4'>
            <span>{index + 1}. {item.title} - By {item.tutor}</span>
            <FaWindowClose onClick={() => removeFromCart(item.id)} color='red'/>
        </div>
        ))}
    </div>
  )
}

export default CartDetails