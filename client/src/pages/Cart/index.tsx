import React from 'react'
import { useCart, useRemoveFromCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';
import { FaCross, FaWindowClose } from 'react-icons/fa';

const index = () => {
  const selectedCourses = useCart();
  const removeFromCart = useRemoveFromCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard/checkout')
  }


  return (
    <div>
        { selectedCourses && selectedCourses.map((item, index) => (
            <div key={index} className='flex gap-4'>
              <span>{index + 1}. {item.title} - By {item.tutor}</span>
              <FaWindowClose onClick={() => removeFromCart(item.id)} color='red'/>
          </div>
        ))}
        <button onClick={handleClick} className="flex items-center justify-center w-full gap-3 p-3 mb-4 text-white bg-blue-500 rounded-md hover:bg-orange-400 hover:text-black">Checkout</button>
    </div>
  )
}

export default index