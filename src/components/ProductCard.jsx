import { useCart } from '../contexts/CartContext'
import ItemQtyHandler from '../utilities/ItemQtyHandler'
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
  } = useCart()

  const quantity = getItemQuantity(id)

  return (
    <div className="product-card">
      <div className="card-img">
        <a href={'/boutique/' + id}>
          <img src={img} alt={name} />
        </a>
      </div>
      <div className="card-body">
        <div className="card-title">
          <span className="hover-highlight">
            <a href={'/boutique/' + id}>{name}</a>
          </span>
          <span className="price hover-highlight">{formatPrice(price, true)}</span>
        </div>
        <div>{woods}</div>
        <div>{finish}</div>
        <div>{measurements}</div>
        <div>{description}</div>
      </div>
      <div className="card-actions">
          {quantity === 0 ? (
              <button className='btn-outline add' onClick={() => increaseItemQuantity(id)}>Ajouter au panier</button>
          ) : (
            <ItemQtyHandler id={id} />
          )}
      </div>
    </div>
  )
}
