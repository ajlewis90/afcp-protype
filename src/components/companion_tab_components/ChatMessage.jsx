import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ isBot, text, avatar, products, onProductClick, onTryOnClick, showPriceComparison }) => {
  const handleViewItem = (product) => {
    if (onProductClick) {
      onProductClick(product);
    } else {
      console.log(`Viewing item:`, product);
    }
  };

  const handleTryOn = (product) => {
    if (onTryOnClick) {
      onTryOnClick(product);
    } else {
      console.log(`Try on:`, product);
    }
  };

  return (
    <div className={`chat-message ${isBot ? 'bot' : 'user'}`}>
      {isBot && avatar && <img src={avatar} alt="Daxedax Avatar" className="avatar" />}
      <div className="message-content">
        <div className="message-bubble">
          {text}
        </div>
        {isBot && products && products.length > 0 && (
          <div className="product-recommendations">
            <div className="product-carousel">
              {products.map((product, index) => (
                <div key={product.id || index} className="product-card">
                  <div className="product-image-container">
                    <img 
                      src={product.image || product.imageUrl} 
                      alt={product.name} 
                      className="product-image"
                      onError={(e) => {
                        console.log('Image failed to load:', product.image);
                        e.target.style.border = '2px solid red';
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully:', product.image);
                      }}
                    />
                    <button 
                      className="try-on-button"
                      onClick={() => handleTryOn(product)}
                      title="Try On Virtually"
                    >
                      📷
                    </button>
                  </div>
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                    {showPriceComparison && product.originalPrice ? (
                      <div className="product-price-comparison">
                        <span className="original-price">{product.originalPrice}</span>
                        <span className="discounted-price">{product.price}</span>
                      </div>
                    ) : (
                      <div className="product-price">{product.price}</div>
                    )}
                  </div>
                  <button className="view-item-button" onClick={() => handleViewItem(product)}>
                    View item
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;