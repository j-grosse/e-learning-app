import { useState, useEffect } from 'react';
import { IProduct } from '@/common/type';
import { toast } from '@/components/ui/use-toast';

/**
 * This custom hook manages the state of the cart items.
 * It reads the cart-items from localStorage, parses it, and sets the items state with the parsed value.
 */

interface CartStore {
  items: IProduct[];
  addItem: (data: IProduct) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = (): CartStore => {
  const [items, setItems] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cart-items') || '[]');
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(items));
  }, [items]);

  const addItem = (data: IProduct) => {
    const existingItem = items.find((item) => item.id === data.id);

    if (existingItem) {
      toast({ title: 'Item already in cart.' });
      return;
    }

    setItems((prevItems) => [...prevItems, data]);
    toast({ title: 'Item added to cart.' });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast({ title: 'Item removed from cart.' });
  };

  const removeAll = () => {
    setItems([]);
  };

  return {
    items,
    addItem,
    removeItem,
    removeAll,
  };
};

export default useCart;