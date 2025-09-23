// src/components/home_tab_components/ProductDetailTwo.jsx
import React from 'react';
import ShareButton from '../ShareButton';
import PriceDropToggle from './PriceDropToggle';
import './ProductDetailTwo.css';

const ProductDetailTwo = ({ onClose, onPriceDropToggle, priceDropSettings }) => {
  const shareText = "Check out Dior Dway Slide Sandal in Embroidered Cotton! Elegant slide sandal featuring embroidered cotton.";
  const shareTitle = "Dior Dway Slide Sandal in Embroidered Cotton";
  const productImage = "https://assets.api.uizard.io/api/cdn/stream/6e6aee90-d251-49d2-b465-498a99659f3a.png";

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
            alt="Dior Dway Slide Sandal in Embroidered Cotton"
            className="product-image"
          />
          <h1 className="product-title">Dior Dway Slide Sandal in Embroidered Cotton</h1>
          <p className="product-description">
            Elegant slide sandal featuring embroidered cotton, offering a luxurious and comfortable design perfect for any occasion. Crafted with premium materials for style and durability.
          </p>
          <div className="color-options">
            <div className="color-option">Black</div>
            <div className="color-option">White</div>
            <div className="color-option">Red</div>
            <div className="color-option">Blue</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Individual price:</div>
              <div className="price-value">$1100.00</div>
              <button className="buy-individual">Buy Now</button>
            </div>
          </div>
          
          <PriceDropToggle
            productName="Beauty Product Two"
            originalPrice="$1100.00"
            isEnabled={priceDropSettings?.["Beauty Product Two"] || false}
            onToggle={onPriceDropToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTwo;