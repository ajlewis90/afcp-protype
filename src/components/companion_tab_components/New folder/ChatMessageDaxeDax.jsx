// src/components/companion_tab_components/ChatMessage.jsx (Daxedax version)
import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ isBot, text, avatar, products }) => {
  const handleViewItem = (productId) => {
    console.log(`Viewing item with ID: ${productId}`);
    // You can replace this with actual navigation or modal logic later, e.g., opening a product details page
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
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`product-row ${index === 0 ? 'product-row-one' : index === 1 ? 'product-row-two' : index === 2 ? 'product-row-three' : 'product-row-four'}`}
              >
                <img src={product.image} alt={product.name} className="product-image" />
                <div className={`product-column ${index === 0 ? 'product-column-one' : index === 1 ? 'product-column-two' : index === 2 ? 'product-column-three' : 'product-column-four'}`}>
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">{product.price}</div>
                </div>
                <button className="view-item-button" onClick={() => handleViewItem(product.id)}>
                  View item
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;