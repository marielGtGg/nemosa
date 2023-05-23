import { useCart } from '../contexts/CartContext'
import ItemQtyHandler from './ItemQtyHandler'
import formatPrice from '../utilities/formatPrice'
import { Link } from 'react-router-dom'

export default function ProductCard({product, noTitle}) {
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
    <div id={id} className="product-card">
      <div className="card-img">
        <a href={'/boutique/' + id}>
          <img src={img} alt={name} />
        </a>
      </div>
      <div className="card-body">
        <div className="card-title">
          {noTitle ? '' :
          <span className="name">
            <Link to={'/boutique/' + id}>{name}</Link>
          </span>
          }
          <span className="price">{formatPrice(price, true)}</span>
        </div>
        <div><i className="fa-solid fa-leaf"></i>{woods}</div>
        <div><i className="fa-solid fa-brush"></i>{finish}</div>
        <div><i className="fa-solid fa-ruler"></i>{measurements}</div>
        <div className="description">{description}</div>
      </div>
      <div className={'card-actions ' + (quantity > 0 ? 'in-cart' : '')}>
          {quantity === 0 ? (
            <button className='add' onClick={() => increaseItemQuantity(id, price_id)}>Ajouter au panier</button>
          ) : (
            <ItemQtyHandler id={id} />
          )}
      </div>
    </div>
  )
}
