import React, { useContext, useState } from 'react'

const CartContext = React.createContext([]);
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
  const [selectedCourses, setSelectedCourses] = useState([])
  const addToCart = (course) => {
    setSelectedCourses([...selectedCourses, course])
  }

  const removeFromCart = (id) => {
    setSelectedCourses(selectedCourses.filter((course) => course.id !== id))
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