import { createContext, useState } from "react";
import Swal from 'sweetalert2'


export const CartContext = createContext()

export const CartProvider = ({children}) =>{

  
  const [cart, setCart] = useState([])

  const addToCart = (item) =>{
    setCart([...cart, item])
  }

  const removeItem = (id) => {
    setCart (cart.filter((item) => item.id !== id))
  }

  const isInCart = (id) =>{
    return cart.some((item) => item.id === id)
  }

  const cartQuantity = () =>{
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  const cartTotal = () =>{
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
  }

  const emptyCart = () => {
    setCart([])
  } 

  const terminarCompra = ( id) => {
    Swal.fire({
      title: 'Compra exitosa! 🛵',
      text: `Muchas gracias, tu número de orden es: ${id} `,
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Genial! 😆'
    })
    setCart([])
  }




  return(
    <CartContext.Provider value={{cart, addToCart, isInCart, cartQuantity, cartTotal, emptyCart, removeItem, terminarCompra}}>

      {children}

    </CartContext.Provider>
  )

}