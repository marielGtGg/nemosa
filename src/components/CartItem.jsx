import formatPrice from '../utilities/formatPrice'
import ItemQtyHandler from '../utilities/ItemQtyHandler'
import { Link } from 'react-router-dom'

export default function CartItem({item, product}) {

  const {id, quantity} = item

  const {
    name,
    img,
    price
  } = product

  return (
    <div className="cart-item">
      <Link to={'/boutique/' + id}><img src={img} alt={name} /></Link>
      <div>
        <div>
          <Link to={'/boutique/' + id}>{name}</Link>
          <br/><span className="unit-price">{formatPrice(price, true)}</span>
        </div>
        <ItemQtyHandler id={id} />
      </div>
      <div>
        <div>{formatPrice(price * quantity, true)}</div>
      </div>
    </div>
  )
}
