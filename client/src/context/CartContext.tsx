import { Course } from '@/components/ui/columns';
import React, { useContext, useState } from 'react'

const CartContext = React.createContext(new Set<Course>());
const AddToCartContext = React.createContext((obj) => {});
const RemoveFromCartContext = React.createContext((id:any) => {});

export const useCart = () => {
    return useContext(CartContext)
}

export const useAddToCart = () => {
    return useContext(AddToCartContext);
}

export const useRemoveFromCart = () => {
    return useContext(RemoveFromCartContext);
}

const CartProvider = ({ children }) => {
  const [selectedCourses, setSelectedCourses] = useState(new Set<Course>()) //change array to set to set unique courses
  const addToCart = (course) => {
    setSelectedCourses(selectedCourses.add(course))
  }

  const removeFromCart = (course) => {
    const newCourses = selectedCourses;
    newCourses.delete(course) && setSelectedCourses(newCourses)
  }
  
  return (
    <CartContext.Provider value={selectedCourses}>
        <AddToCartContext.Provider value={addToCart}>
            <RemoveFromCartContext.Provider value={removeFromCart}>
                { children }    
            </RemoveFromCartContext.Provider>
        </AddToCartContext.Provider>
    </CartContext.Provider>
  )
}

export default CartProvider