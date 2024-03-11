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
  const [selectedCourses, setSelectedCourses] = useState(new Set<Course>()) 
  const addToCart = (course) => {
    const updatedSet = new Set(selectedCourses)
    updatedSet.add(course)
    setSelectedCourses(updatedSet)

  }

  const removeFromCart = (course) => {
    const updatedSet = new Set(selectedCourses)
    if(updatedSet.delete(course)){
      setSelectedCourses(updatedSet)
    }
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