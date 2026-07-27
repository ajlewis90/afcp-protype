import React, { useEffect, useState } from 'react';
import './SuggestionsSheet.css';

const parseNum = (p) => parseFloat(String(p).replace(/[^0-9.]/g, '')) || 0;
const fmt = (n) => `$${n.toFixed(2)}`;

const SUGGESTIONS = [
  {
    product: {
      id: 1,
      name: 'La Mer The Moisturizing Soft Cream',
      business: 'La Mer',
      price: '$100.00',
      rating: 4.9,
      reviews: 3800,
      description: "Luxurious, lightweight cream delivers the same radiance and renewal that made the original Crème de la Mer a legend. It infuses skin with the healing energies of Miracle Broth, the heart of La Mer's profound powers of transformation.",
      tags: ['15ml – $100', '30ml – $200', '45ml – $300'],
      image: 'https://assets.api.uizard.io/api/cdn/stream/fbe819f5-01ef-4c42-b37c-0ebcb7c3fda5.png',
      // Offer that lives through to cart + checkout
      offer: { type: 'percent_off', pct: 40, label: '40% OFF' },
    },
    offerType: 'discount',
    offerLabel: '40% OFF',
    offerSub: 'Limited time beauty deal — today only',
    badgeColor: '#c0392b',
  },
  {
    product: {
      id: 2,
      name: 'Dior Dway Slide Sandal in Embroidered Cotton',
      business: 'Dior',
      price: '$1,100.00',
      rating: 4.7,
      reviews: 950,
      description: 'Elegant slide sandal featuring embroidered cotton, offering a luxurious and comfortable design perfect for any occasion. Crafted with premium materials for style and durability.',
      tags: ['Black', 'White', 'Red', 'Blue'],
      image: 'https://assets.api.uizard.io/api/cdn/stream/6e6aee90-d251-49d2-b465-498a99659f3a.png',
      // Urgency only — no price change
      offer: { type: 'urgency', label: 'Only 3 left' },
    },
    offerType: 'clearance',
    offerLabel: 'Only 3 left',
    offerSub: 'Clearing fast · Embroidered Cotton edition',
    badgeColor: '#e67e22',
  },
  {
    product: {
      id: 5,
      name: "Levi's 501 Original Fit Jeans",
      business: "Levi's",
      price: '$70.00',
      rating: 4.8,
      reviews: 12400,
      description: "The Levi's 501 Original Fit Jeans are a timeless classic, offering a comfortable fit and iconic style for everyday wear.",
      tags: ['S', 'M', 'L', 'XL'],
      image: 'https://assets.api.uizard.io/api/cdn/stream/d59d7261-5ecd-4484-9551-44dc1d93fe45.png',
      // BOGO: buy 2, get 1 free — every 3rd item is free at checkout
      offer: { type: 'bogo', buy: 2, get: 1, label: 'Buy 2 Get 1 Free' },
    },
    offerType: 'special',
    offerLabel: 'Buy 2 Get 1 Free',
    offerSub: 'Mix any sizes — offer ends Sunday',
    badgeColor: '#4B0082',
  },
  {
    product: {
      id: 6,
      name: "Ralph Lauren Men's Polo Shirt",
      business: 'Ralph Lauren',
      price: '$50.00',
      rating: 4.7,
      reviews: 8900,
      description: "The Ralph Lauren Men's Polo Shirt combines classic style with modern comfort, perfect for casual and semi-formal occasions.",
      tags: ['Black', 'White', 'Navy'],
      image: 'https://assets.api.uizard.io/api/cdn/stream/2f3b0fff-5715-4d07-8c8a-a6ad268192a1.png',
      offer: { type: 'percent_off', pct: 15, label: '15% OFF' },
    },
    offerType: 'liked',
    offerLabel: '15% OFF',
    offerSub: 'Bestseller · You might love this',
    badgeColor: '#27ae60',
  },
];

const OFFER_ICONS = {
  discount:  '🔥',
  clearance: '⏳',
  special:   '🎁',
  liked:     '⭐',
};

const SuggestionsSheet = ({ onClose, onProductClick }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div
      className={`suggestions-backdrop ${show ? 'suggestions-visible' : ''}`}
      onClick={onClose}
    >
      <div className="suggestions-sheet" onClick={e => e.stopPropagation()}>
        <div className="sheet-handle" />

        <div className="suggestions-header">
          <h2 className="suggestions-title">✨ Suggestions For You</h2>
          <button className="suggestions-close-btn" onClick={onClose}>✕</button>
        </div>

        <p className="suggestions-subtitle">
          Hand-picked deals, offers &amp; products we think you'll love.
        </p>

        <div className="suggestions-list">
          {SUGGESTIONS.map((item) => (
            <button
              key={item.product.id}
              className="suggestion-item"
              onClick={() => onProductClick && onProductClick(item.product)}
            >
              {/* Product image + offer badge */}
              <div className="suggestion-img-wrap">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="suggestion-img"
                />
                <span
                  className="suggestion-offer-badge"
                  style={{ background: item.badgeColor }}
                >
                  {OFFER_ICONS[item.offerType]} {item.offerLabel}
                </span>
              </div>

              {/* Info */}
              <div className="suggestion-info">
                <span className="suggestion-brand">{item.product.business}</span>
                <span className="suggestion-name">{item.product.name}</span>
                <span className="suggestion-offer-sub">{item.offerSub}</span>
                {/* Price — show struck-through original + sale price for percent_off */}
                <div className="suggestion-price-row">
                  {item.product.offer?.type === 'percent_off' ? (
                    <>
                      <span className="suggestion-price-original">{item.product.price}</span>
                      <span className="suggestion-price suggestion-price-sale">
                        {fmt(parseNum(item.product.price) * (1 - item.product.offer.pct / 100))}
                      </span>
                    </>
                  ) : (
                    <span className="suggestion-price">{item.product.price}</span>
                  )}
                </div>
              </div>

            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestionsSheet;
