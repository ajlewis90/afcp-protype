import React from 'react';
import './ProductDetailSheet.css';

const parseTagPrice = (tag) => {
  const match = tag.match(/\$(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[1]) : null;
};

const formatPrice = (num) => `$${num.toFixed(2)}`;

const ProductDetailSheet = ({ product, onClose, onAddToCart, onViewCart, cartCount }) => {
  const firstTag = (product?.tags || [])[0] || null;
  const [selectedTag, setSelectedTag] = React.useState(firstTag);
  const [added, setAdded] = React.useState(false);

  React.useEffect(() => {
    setSelectedTag((product?.tags || [])[0] || null);
    setAdded(false);
  }, [product]);

  if (!product) return null;

  const rating = product.rating || 4.7;
  const fullStars = Math.round(rating);

  const basePrice = parseFloat(String(product.price).replace(/[^0-9.]/g, '')) || 0;
  const selectedTagPrice = selectedTag ? parseTagPrice(selectedTag) : null;
  const displayPrice = selectedTagPrice !== null ? formatPrice(selectedTagPrice) : product.price;

  const handleAdd = () => {
    const cartProduct = {
      ...product,
      price: displayPrice,
      selectedOption: selectedTag || undefined,
    };
    onAddToCart(cartProduct);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="product-detail-sheet" onClick={e => e.stopPropagation()}>
        <div className="sheet-handle" />
        <div className="detail-hero">
          <img src={product.image} alt={product.name} className="detail-hero-img" />
          <button className="detail-close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="detail-body">
          {(product.tags || []).length > 0 && (
            <div className="detail-tags">
              {product.tags.map(t => (
                <button
                  key={t}
                  className={`detail-tag ${selectedTag === t ? 'detail-tag-selected' : ''}`}
                  onClick={() => setSelectedTag(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
          <h2 className="detail-name">{product.name}</h2>
          <div className="detail-business">by {product.business}</div>
          <div className="detail-rating-row">
            <span className="detail-stars">
              {'★'.repeat(fullStars)}{'☆'.repeat(5 - fullStars)}
            </span>
            <span className="detail-rating-val">{rating}</span>
            <span className="detail-reviews">({(product.reviews || 0).toLocaleString()} reviews)</span>
          </div>
          <div className="detail-price">{displayPrice}</div>
          <p className="detail-desc">
            {product.description || 'Premium quality product carefully selected for you.'}
          </p>
          <button
            className={`detail-add-btn ${added ? 'added' : ''}`}
            onClick={handleAdd}
          >
            {added ? '✓  Added to Cart!' : selectedTag ? `Add to Cart — ${displayPrice}` : 'Add to Cart'}
          </button>
          {cartCount > 0 && (
            <button className="detail-view-cart" onClick={onViewCart}>
              🛒 View Cart ({cartCount} item{cartCount !== 1 ? 's' : ''})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSheet;
