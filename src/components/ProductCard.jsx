export default function ProductCard({ product, wide = false }) {
  return (
    <div className={`product-card${wide ? " product-card--wide" : ""}`}>
      <img className="product-card__photo" src={product.image} alt="" />
      <p className="product-card__name">{product.name}</p>
      {product.badge && <p className="product-card__meta">{product.badge}</p>}
      {product.rating && <p className="product-card__meta">{product.rating}</p>}
      {product.detail && <p className="product-card__meta">{product.detail}</p>}
      <p className="price">{product.price ?? product.cta}</p>
    </div>
  );
}
