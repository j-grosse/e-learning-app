import { Button } from '@/components/ui/button';
import { columns } from '@/components/ui/columns';
import { DataTable } from '@/components/ui/data-table';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@radix-ui/react-toast';

const index = () => {
  const selectedCourses = useCart()
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleClick = () => {
    if(selectedCourses.size) {
      navigate('/dashboard/checkout')
    } else {
      toast({
        title:"Empty Cart!",
        description: "Add some courses to your cart and then checkout"
      })
    }
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