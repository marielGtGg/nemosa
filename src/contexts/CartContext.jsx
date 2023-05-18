import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const CartContext = createContext({})

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage('cartItems',[])

  const cartQuantity = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  )

  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseItemQuantity(id, price_id) {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, { id, price_id, quantity: 1 }]
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseItemQuantity(id) {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id)?.quantity === 1) {
        return currentItems.filter(item => item.id !== id)
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removefromCart(id) {
    setCartItems(currentItems => {
      return currentItems.filter(item => item.id !== id)
    })
  }

  function emptyCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider 
      value={{ 
        cartItems,
        cartQuantity,
        getItemQuantity, 
        increaseItemQuantity, 
        decreaseItemQuantity,
        removefromCart,
        emptyCart 
      }}
    >
      {children}
    </CartContext.Provider>
  )
}