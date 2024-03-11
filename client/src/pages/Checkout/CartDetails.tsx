import { columns } from '@/components/ui/columns';
import { DataTable } from '@/components/ui/data-table';
import { useCart } from '../../context/CartContext';

const CartDetails = () => {
  const selectedCourses = useCart();
  
  return (
    <div className='mb-4'>
        <h3 className='font-semibold text-xl'>Cart Items</h3>
        { selectedCourses && <DataTable columns={columns} data={Array.from(selectedCourses)} />}
    </div>
  )
}

export default CartDetails