import { columns } from '@/components/ui/columns';
import { DataTable } from '@/components/ui/data-table';
import { useCart } from '../../../context/CartContext';

const CartDetails = () => {
  const selectedCourses = useCart();

  return (
    <div className="max-w-2xl p-3 mb-3">
      <h2 className="mb-6">Cart Items</h2>
        {selectedCourses && (
          <DataTable columns={columns} data={Array.from(selectedCourses)} />
        )}
    </div>
  );
};

export default CartDetails;