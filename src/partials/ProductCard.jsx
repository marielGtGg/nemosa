import Price from '../components/Price'

export default function ProductCard({product}) {

  return (
    <div className="product-card">
      <a href={'/produits/' + product.url}>
        <div className="img">
          <img src={'/img/products/' + product.img} alt={product.name} />
        </div>
      </a>
      <div className="product-detail">
        <a href={'/produits/' + product.url}>
          <p className="hover-highlight">{product.name}</p>
          <p className="price hover-highlight"><Price value={product.price} /></p>
        </a>
      </div>
    </div>
  )
}
