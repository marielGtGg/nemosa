import { useCart } from '../contexts/CartContext'
import formatPrice from '../utilities/formatPrice'

export default function ProductCard({product}) {
  const { 
    id, 
    name, 
    img, 
    price,
    woods,
    finish,
    measurements, 
    description
  } = product

  const {
    getItemQuantity, 
    increaseItemQuantity, 
    decreaseItemQuantity,
    removefromCart
  } = useCart()

  const quantity = getItemQuantity(id)

  return (
    <div className="product-card">
      <div className="card-img">
        <a href={'/produits/' + id}>
          <img src={img} alt={name} />
        </a>
      </div>
      <div className="card-body">
        <div className="card-title">
          <span className="hover-highlight">
            <a href={'/produits/' + id}>{name}</a>
          </span>
          <span className="price hover-highlight">{formatPrice(price, true)}</span>
        </div>
        <div>{woods}</div>
        <div>{finish}</div>
        <div>{measurements}</div>
        <div>{description}</div>
        <div className="card-actions">
          {quantity === 0 ? (
            <button className='button-89' onClick={() => increaseItemQuantity(id)}>Ajouter au panier</button>
          ) : (
            <div className="qty-group">
              <div className="qty-handler">
                <button onClick={() => decreaseItemQuantity(id)}>-</button>
                <div className="qty">{quantity}</div>
                <button onClick={() => increaseItemQuantity(id)}>+</button>
              </div>
              <button onClick={() => removefromCart(id)}>Retirer</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
