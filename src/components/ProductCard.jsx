import { useCart } from '../contexts/CartContext'
import formatPrice from '../utilities/formatPrice'

export default function ProductCard({product}) {
  const {
    getItemQuantity, 
    increaseItemQuantity, 
    decreaseItemQuantity,
    removefromCart
  } = useCart()

  const quantity = getItemQuantity(product.id)

  return (
    <div className="product-card">
      <div className="card-img">
        <a href={'/produits/' + product.id}>
          <img src={product.img} alt={product.name} />
        </a>
      </div>
      <div className="card-body">
        <div className="card-title">
          <a href={'/produits/' + product.id}>
            <span className="hover-highlight">{product.name}</span>
            <span className="price hover-highlight">{formatPrice(product.price, true)}</span>
          </a>
        </div>
        <div className="card-actions">
          {quantity === 0 ? (
            <button onClick={() => increaseItemQuantity(product.id)}>Ajouter au panier</button>
          ) : (
            <div className="qty-group">
              <div className="qty-handler">
                <button onClick={() => decreaseItemQuantity(product.id)}>-</button>
                <div className="number">{quantity}</div>
                <button onClick={() => increaseItemQuantity(product.id)}>+</button>
              </div>
              <button onClick={() => removefromCart(product.id)}>Retirer</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
