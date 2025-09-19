// src/components/home_tab_components/ProductDetailEight.jsx
import React from 'react';
import ShareButton from '../ShareButton';
import PriceDropToggle from './PriceDropToggle';
import './ProductDetailEight.css';

const ProductDetailEight = ({ onClose, onPriceDropToggle, priceDropSettings }) => {
  const shareText = "Check out the Adidas Ultraboost 5.0 Sneaker! Unparalleled comfort and performance with a responsive Boost midsole.";
  const shareTitle = "Adidas Ultraboost 5.0 Sneaker";
  const productImage = "https://assets.api.uizard.io/api/cdn/stream/027eb941-5abd-4ad4-8438-8237473aaa99.png";

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
            alt="Adidas Ultraboost 5.0 Sneaker"
            className="product-image"
          />
          <h1 className="product-title">Adidas Ultraboost 5.0 Sneaker</h1>
          <p className="product-description">
            The Adidas Ultraboost 5.0 Sneaker offers unparalleled comfort and performance with its responsive Boost midsole and breathable Primeknit upper, ideal for running and casual wear.
          </p>
          <div className="color-options">
            <div className="color-option">US 7</div>
            <div className="color-option">US 8</div>
            <div className="color-option">US 9</div>
            <div className="color-option">US 10</div>
            <div className="color-option">US 11</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Group price:</div>
              <div className="price-value">$120.00</div>
              <button className="join-group">Join Group</button>
            </div>
            <div className="group-timer">2 days left</div>
            <div className="group-condition">3 people want this, 2 more needed to complete the group</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Individual price:</div>
              <div className="price-value individual-price-text">$150.00</div>
              <button className="buy-individual">Buy Now</button>
            </div>
          </div>
          
          <PriceDropToggle
            productName="Shoes Product Two"
            originalPrice="$150.00"
            isEnabled={priceDropSettings?.["Shoes Product Two"] || false}
            onToggle={onPriceDropToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailEight;