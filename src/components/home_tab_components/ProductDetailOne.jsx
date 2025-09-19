// src/components/home_tab_components/ProductDetailOne.jsx
import React from 'react';
import ShareButton from '../ShareButton';
import PriceDropToggle from './PriceDropToggle';
import './ProductDetailOne.css';

const ProductDetailOne = ({ onClose, onPriceDropToggle, priceDropSettings }) => {
  const shareText = "Check out La Mer The Moisturizing Soft Cream! Luxurious, lightweight cream with healing energies of Miracle Broth.";
  const shareTitle = "La Mer The Moisturizing Soft Cream";
  const productImage = "https://assets.api.uizard.io/api/cdn/stream/fbe819f5-01ef-4c42-b37c-0ebcb7c3fda5.png";

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
            alt="La Mer The Moisturizing Soft Cream"
            className="product-image"
          />
          <h1 className="product-title">La Mer The Moisturizing Soft Cream</h1>
          <p className="product-description">
            Luxurious, lightweight cream delivers the same radiance and renewal that made the original Crème de la Mer a legend. It infuses skin with the healing energies of Miracle Broth, the heart of La Mer’s profound powers of transformation.
          </p>
          <div className="color-options">
            <div className="color-option">15ml - $100</div>
            <div className="color-option">30ml - $200</div>
            <div className="color-option">45ml - $300</div>
            <div className="color-option">60ml - $400</div>
            <div className="color-option">75ml - $500</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Group price:</div>
              <div className="price-value">$80.00</div>
              <button className="join-group">Join Group</button>
            </div>
            <div className="group-timer">2 days left</div>
            <div className="group-condition">4 people want this, 1 more needed to complete the group</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Individual price:</div>
              <div className="price-value">$100.00</div>
              <button className="buy-individual">Buy Now</button>
            </div>
          </div>
          
          <PriceDropToggle
            productName="Beauty Product One"
            originalPrice="$100.00"
            isEnabled={priceDropSettings?.["Beauty Product One"] || false}
            onToggle={onPriceDropToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailOne;