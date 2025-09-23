// src/components/home_tab_components/ProductDetailSeven.jsx
import React from 'react';
import ShareButton from '../ShareButton';
import PriceDropToggle from './PriceDropToggle';
import './ProductDetailSeven.css';

const ProductDetailSeven = ({ onClose, onPriceDropToggle, priceDropSettings }) => {
  const shareText = "Check out the Nike Air Force 1 '07 Sneaker! Timeless style and comfort with its iconic design.";
  const shareTitle = "Nike Air Force 1 '07 Sneaker";
  const productImage = "https://assets.api.uizard.io/api/cdn/stream/0fd8e547-6f14-4dfc-8c01-42f39be7636c.png";

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
            alt="Nike Air Force 1 '07 Sneaker"
            className="product-image"
          />
          <h1 className="product-title">Nike Air Force 1 '07 Sneaker</h1>
          <p className="product-description">
            The Nike Air Force 1 '07 Sneaker in White/White offers timeless style and comfort with its iconic design and cushioned sole, perfect for everyday wear.
          </p>
          <div className="size-options">
            <div className="size-option">US 6</div>
            <div className="size-option">US 7</div>
            <div className="size-option">US 8</div>
            <div className="size-option">US 9</div>
            <div className="size-option">US 10</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Individual price:</div>
              <div className="price-value individual-price-text">$335.00</div>
              <button className="buy-individual">Buy Now</button>
            </div>
          </div>
          
          <PriceDropToggle
            productName="Shoes Product One"
            originalPrice="$335.00"
            isEnabled={priceDropSettings?.["Shoes Product One"] || false}
            onToggle={onPriceDropToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSeven;