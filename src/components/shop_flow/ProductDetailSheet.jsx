import React from 'react';
import './ProductDetailSheet.css';

const parseNum = (p) =>
  parseFloat(String(p).replace(/[^0-9.]/g, '')) || 0;

const fmt = (n) => `$${n.toFixed(2)}`;

const parseTagPrice = (tag) => {
  const m = tag.match(/\$(\d+(?:\.\d+)?)/);
  return m ? parseFloat(m[1]) : null;
};

// ─── Offer helpers ────────────────────────────────────────────────────────────
const applyOffer = (basePrice, offer) => {
  if (!offer) return { final: basePrice, original: null };
  if (offer.type === 'percent_off') {
    const orig = basePrice;
    const final = fmt(parseNum(basePrice) * (1 - offer.pct / 100));
    return { final, original: orig };
  }
  return { final: basePrice, original: null };
};

const ProductDetailSheet = ({ product, onClose, onAddToCart, onViewCart, cartCount }) => {
  const firstTag = (product?.tags || [])[0] || null;
  const [selectedTag, setSelectedTag] = React.useState(firstTag);
  const [added, setAdded]             = React.useState(false);

  React.useEffect(() => {
    setSelectedTag((product?.tags || [])[0] || null);
    setAdded(false);
  }, [product]);

  if (!product) return null;

  const offer    = product.offer || null;
  const rating   = product.rating || 4.7;
  const fullStars = Math.round(rating);

  // Base price from tag selection or product price
  const selectedTagPrice = selectedTag ? parseTagPrice(selectedTag) : null;
  const rawBase = selectedTagPrice !== null ? fmt(selectedTagPrice) : product.price;

  // Apply offer on top of the (possibly tag-adjusted) base
  const { final: displayPrice, original: originalPrice } = applyOffer(rawBase, offer);

  const handleAdd = () => {
    const cartProduct = {
      ...product,
      // Always store the post-offer price so cart + checkout are correct
      price: displayPrice,
      originalPrice: originalPrice || undefined,
      selectedOption: selectedTag || undefined,
      // Pass offer so CartSheet can apply BOGO logic
      offer: offer || undefined,
    };
    onAddToCart(cartProduct);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  // ── BOGO label for the Add button ─────────────────────────────────────────
  const addBtnLabel = (() => {
    if (added) return '✓  Added to Cart!';
    if (offer?.type === 'bogo') return `Add to Cart — ${displayPrice} (Buy 2 Get 1 Free)`;
    if (selectedTag) return `Add to Cart — ${displayPrice}`;
    return 'Add to Cart';
  })();

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="product-detail-sheet" onClick={e => e.stopPropagation()}>
        <div className="sheet-handle" />

        {/* Hero image */}
        <div className="detail-hero">
          <img src={product.image} alt={product.name} className="detail-hero-img" />
          <button className="detail-close-btn" onClick={onClose}>✕</button>

          {/* Offer badge on the hero */}
          {offer && offer.type !== 'urgency' && (
            <div className={`detail-offer-hero-badge ${offer.type === 'bogo' ? 'badge-bogo' : 'badge-pct'}`}>
              {offer.label}
            </div>
          )}
        </div>

        <div className="detail-body">
          {/* Urgency / BOGO banner */}
          {offer?.type === 'urgency' && (
            <div className="detail-offer-banner detail-offer-urgency">
              ⏳ Only a few left — grab yours before it's gone!
            </div>
          )}
          {offer?.type === 'bogo' && (
            <div className="detail-offer-banner detail-offer-bogo">
              🎁 Buy 2, Get 1 Free — add 3 to your cart and the cheapest is free at checkout!
            </div>
          )}

          {/* Size / colour tags */}
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

          {/* Price — with original struck-through for % off */}
          <div className="detail-price-row">
            {originalPrice && (
              <span className="detail-price-original">{originalPrice}</span>
            )}
            <span className={`detail-price ${originalPrice ? 'detail-price-sale' : ''}`}>
              {displayPrice}
            </span>
            {offer?.type === 'percent_off' && (
              <span className="detail-save-badge">Save {offer.pct}%</span>
            )}
          </div>

          <p className="detail-desc">
            {product.description || 'Premium quality product carefully selected for you.'}
          </p>

          <button
            className={`detail-add-btn ${added ? 'added' : ''}`}
            onClick={handleAdd}
          >
            {addBtnLabel}
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
