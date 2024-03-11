import { Button } from '@/components/ui/button';
import { columns } from '@/components/ui/columns';
import { DataTable } from '@/components/ui/data-table';
import { useToast } from '@/components/ui/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

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
        description: "Add some courses to your cart and then checkout",
        action: <Link to={'/'} ><Button>To Courses</Button></Link> 
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