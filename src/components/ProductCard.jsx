import { useCart } from '../contexts/CartContext'
import ItemQtyHandler from '../utilities/ItemQtyHandler'
import formatPrice from '../utilities/formatPrice'

export default function ProductCard({product}) {
  const { 
    id, 
    name, 
    img, 
    price_id,
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
          <span className="name">
            <a href={'/boutique/' + id}>{name}</a>
          </span>
          <span className="price">{formatPrice(price, true)}</span>
        </div>
        <div><i className="fa-solid fa-leaf"></i>{woods}</div>
        <div><i className="fa-solid fa-brush"></i>{finish}</div>
        <div><i className="fa-solid fa-ruler"></i>{measurements}</div>
        <div><i className="fa-solid fa-fire"></i>{description}</div>
      </div>
      <div className="card-actions">
          {quantity === 0 ? (
            <button className='add' onClick={() => increaseItemQuantity(id, price_id)}>Ajouter au panier</button>
          ) : (
            <ItemQtyHandler id={id} />
          )}
      </div>
    </div>
  )
}
