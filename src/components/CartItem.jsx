import formatPrice from '../utilities/formatPrice'
import ItemQtyHandler from '../utilities/ItemQtyHandler'

export default function CartItem({cartItemWithProduct}) {

  const {id, quantity, product} = cartItemWithProduct

  const {
    name,
    img,
    price
  } = product

  return (
    <div className="cart-item">
      <img src={img} alt={name} />
      <div>
        <div>
          {name}
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
