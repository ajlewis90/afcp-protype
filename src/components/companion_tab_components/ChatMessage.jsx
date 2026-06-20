import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({
  isBot,
  text,
  avatar,
  products,
  onProductClick,
  onAddToCart,
  showPriceComparison,
}) => {
  const [addedStates, setAddedStates] = React.useState({});

  const handleViewItem = (product) => {
    if (onProductClick) onProductClick(product);
  };

  const handleAddToCart = (product) => {
    if (onAddToCart) {
      onAddToCart(product);
      const key = product.id || product.name;
      setAddedStates(prev => ({ ...prev, [key]: 'added' }));
      setTimeout(() => {
        setAddedStates(prev => ({ ...prev, [key]: 'add-more' }));
      }, 2000);
    }
  };

  const getCartLabel = (product) => {
    const state = addedStates[product.id || product.name];
    if (state === 'added') return '✓ Added';
    if (state === 'add-more') return 'Add more';
    return 'Add to Cart';
  };

  return (
    <div className={`chat-message ${isBot ? 'bot' : 'user'}`}>
      {isBot && avatar && (
        <img src={avatar} alt="Agent Avatar" className="avatar" />
      )}
      <div className={`message-content ${isBot && products && products.length > 0 ? 'has-products' : ''}`}>
        {text && <div className="message-bubble">{text}</div>}

        {isBot && products && products.length > 0 && (
          <div className="product-grid">
            {products.slice(0, 3).map((product, index) => (
              <div key={product.id || index} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image || product.imageUrl}
                    alt={product.name}
                    className="product-image"
                    onError={e => { e.target.style.background = '#eee'; }}
                  />
                </div>
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  {product.business && (
                    <div className="product-business">{product.business}</div>
                  )}
                  {product.rating && (
                    <div className="product-rating">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={i < Math.round(product.rating) ? 'star filled' : 'star'}>★</span>
                      ))}
                      <span className="rating-value">{product.rating}</span>
                      {product.reviews && <span className="rating-reviews">({product.reviews.toLocaleString()})</span>}
                    </div>
                  )}
                  {showPriceComparison && product.originalPrice ? (
                    <div className="product-price-comparison">
                      <span className="original-price">{product.originalPrice}</span>
                      <span className="discounted-price">{product.price}</span>
                    </div>
                  ) : (
                    <div className="product-price">{product.price}</div>
                  )}
                </div>
                <div className="product-card-actions">
                  <button className="view-item-button" onClick={() => handleViewItem(product)}>
                    View
                  </button>
                  <button
                    className={`add-to-cart-btn-chat ${addedStates[product.id || product.name] === 'added' ? 'added' : ''}`}
                    onClick={() => handleAddToCart(product)}
                  >
                    {getCartLabel(product)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
