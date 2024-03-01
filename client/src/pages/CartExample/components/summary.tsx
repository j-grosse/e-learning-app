import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/useCart';
import { toast } from '@/components/ui/use-toast';

const Summary = () => {
  // const location = useLocation();
  // const items = useCart((state) => state.items);
  // const removeAll = useCart((state) => state.removeAll);

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);

  //   if (searchParams.get('success')) {
  //     toast({ title: 'Payment completed.' });
  //     removeAll();
  //   }

  //   if (searchParams.get('canceled')) {
  //     toast({ title: 'Something went wrong.' });
  //   }
  // }, [location.search, removeAll]);

  // const totalPrice = items.reduce((total, item) => {
  //   return total + Number(item.price);
  // }, 0);

  // const onCheckout = async () => {
  //   const response = await axios.post(
  //     `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
  //     {
  //       productIds: items.map((item) => item.id),
  //     }
  //   );

  //   window.location = response.data.url;
  // };

  return (
    <div className='px-4 py-6 mt-16 border rounded-lg sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <h2 className='text-lg font-medium'>Order summary</h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between pt-4 border-t border-gray-200'>
          <div className='text-base font-medium'>Order total</div>
          {/* <Currency value={totalPrice} /> */}
        </div>
      </div>
      {/* <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className='w-full mt-6'
      >
        Checkout
      </Button> */}
    </div>
  );
};

export default Summary;