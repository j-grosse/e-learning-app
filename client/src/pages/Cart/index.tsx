import { Button } from '@/components/ui/button';
import { columns } from '@/components/ui/columns';
import { DataTable } from '@/components/ui/data-table';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const index = () => {
  const selectedCourses = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard/checkout')
  }


  return (
    <div className='w-full'>
      <div className='mb-4'>
        { selectedCourses && <DataTable columns={columns} data={Array.from(selectedCourses)} />}
      </div>
      <Button onClick={handleClick}>Checkout</Button>
    </div>
  )
}

export default index