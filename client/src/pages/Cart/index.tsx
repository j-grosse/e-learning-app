import React from 'react'
import { useCart } from '../../context/CartContext'

const index = () => {
  const selectedCourses = useCart();

  return (
    <div>
        { selectedCourses && selectedCourses.map((item, index) => (
            <p key={index}>{item.title} - By {item.tutor}</p>
        ))}
        <button className="flex items-center justify-center w-full gap-3 p-3 mb-4 text-white bg-blue-500 rounded-md hover:bg-orange-400 hover:text-black">Checkout</button>
    </div>
  )
}

export default index