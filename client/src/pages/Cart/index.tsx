import React from 'react'
import { useCart, useRemoveFromCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';
import { FaCross, FaWindowClose } from 'react-icons/fa';
import { Course, columns } from '@/components/ui/columns';
import { DataTable } from '@/components/ui/data-table';

const index = () => {
  const selectedCourses = useCart();
  const removeFromCart = useRemoveFromCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard/checkout')
  }


  return (
    <div>
      <div>
        { selectedCourses && <DataTable columns={columns} data={Array.from(selectedCourses)} />}
      </div>
        <button onClick={handleClick} className="flex items-center justify-center gap-3 p-3 my-4 text-white bg-blue-500 rounded-md hover:bg-orange-400 hover:text-black">Checkout</button>
    </div>
  )
}

export default index