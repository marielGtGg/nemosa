import React from 'react'
import { useCart } from '../contexts/CartContext'

export default function ItemQtyHandler({id}) {

  const {
    getItemQuantity, 
    increaseItemQuantity, 
    decreaseItemQuantity
  } = useCart()

  const quantity = getItemQuantity(id)

  return (
    <div className="item-qty-handler">
      <div className="qty-group">
        <button onClick={() => decreaseItemQuantity(id)}><i className="fa-solid fa-minus"></i></button>
        <div className="qty"><span>{quantity}</span></div>
        <button onClick={() => increaseItemQuantity(id)}><i className="fa-solid fa-plus"></i></button>
      </div>
    </div>
  )
}
