import React from 'react'
import { useCart } from '../contexts/CartContext'

export default function ItemQtyHandler({id}) {

  const {
    getItemQuantity, 
    increaseItemQuantity, 
    decreaseItemQuantity,
    removefromCart
  } = useCart()

  const quantity = getItemQuantity(id)

  return (
    <div className="item-qty-handler">
      {quantity === 0 ? (
        <button className='btn-outline' onClick={() => increaseItemQuantity(id)}>Ajouter au panier</button>
      ) : (
        <div className="qty-group">
          <div className="qty-handler">
            <button onClick={() => decreaseItemQuantity(id)}><i className="fa-solid fa-minus"></i></button>
            <div className="qty"><span>{quantity}</span></div>
            <button onClick={() => increaseItemQuantity(id)}><i className="fa-solid fa-plus"></i></button>
          </div>
          <button className="remove" onClick={() => removefromCart(id)}><i className="fa-solid fa-xmark"></i></button>
        </div>
      )}
    </div>
  )
}
