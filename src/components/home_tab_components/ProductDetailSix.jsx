// src/components/home_tab_components/ProductDetailSix.jsx
import React from 'react';
import ShareButton from '../ShareButton';
import PriceDropToggle from './PriceDropToggle';
import './ProductDetailSix.css';

const ProductDetailSix = ({ onClose, onPriceDropToggle, priceDropSettings }) => {
  const shareText = "Check out the Ralph Lauren Men's Polo Shirt! Classic style with modern comfort for any occasion.";
  const shareTitle = "Ralph Lauren Men's Polo Shirt";
  const productImage = "https://assets.api.uizard.io/api/cdn/stream/2f3b0fff-5715-4d07-8c8a-a6ad268192a1.png";

  return (
    <div className="product-detail-overlay">
      <div className="product-detail-container">
        <div className="product-detail-header">
          <button className="back-button" onClick={onClose}>
            ←
          </button>
          <ShareButton
            shareText={shareText}
            shareTitle={shareTitle}
            productImage={productImage}
          />
        </div>
        <div className="product-detail-content">
          <img
            src={productImage}
            alt="Ralph Lauren Men's Polo Shirt"
            className="product-image"
          />
          <h1 className="product-title">Ralph Lauren Men's Polo Shirt</h1>
          <p className="product-description">
            The Ralph Lauren Men's Polo Shirt combines classic style with modern comfort, perfect for casual and semi-formal occasions.
          </p>
          <div className="color-options">
            <div className="color-option">Black</div>
            <div className="color-option">White</div>
            <div className="color-option">Blue</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Group price:</div>
              <div className="price-value">$40.00</div>
              <button className="join-group">Join Group</button>
            </div>
            <div className="group-timer">2 days left</div>
            <div className="group-condition">5 people want this, 5 more needed to complete the group</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Individual price:</div>
              <div className="price-value individual-price-text">$50.00</div>
              <button className="buy-individual">Buy Now</button>
            </div>
          </div>
          
          <PriceDropToggle
            productName="Apparel Product Two"
            originalPrice="$50.00"
            isEnabled={priceDropSettings?.["Apparel Product Two"] || false}
            onToggle={onPriceDropToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSix;