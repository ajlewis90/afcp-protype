// src/components/home_tab_components/ProductDetailFour.jsx
import React from 'react';
import ShareButton from '../ShareButton';
import PriceDropToggle from './PriceDropToggle';
import './ProductDetailFour.css';

const ProductDetailFour = ({ onClose, onPriceDropToggle, priceDropSettings }) => {
  const shareText = "Check out the Fisher-Price Laugh & Learn Smart Stages Chair! A fun and educational toy for toddlers.";
  const shareTitle = "Fisher-Price Laugh & Learn Smart Stages Chair";
  const productImage = "https://assets.api.uizard.io/api/cdn/stream/510cfb6b-37eb-4d34-b364-a3f46741363e.png";

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
            alt="Fisher-Price Laugh & Learn Smart Stages Chair"
            className="product-image"
          />
          <h1 className="product-title">Fisher-Price Laugh & Learn Smart Stages Chair</h1>
          <p className="product-description">
            The Fisher-Price Laugh & Learn Smart Stages Chair is a fun and educational toy for toddlers, featuring interactive songs, phrases, and activities that grow with your child.
          </p>
          <div className="color-options">
            <div className="color-option">Yellow - $40</div>
            <div className="color-option">Blue - $40</div>
            <div className="color-option">Pink - $40</div>
            <div className="color-option">Green - $40</div>
            <div className="color-option">Red - $40</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Individual price:</div>
              <div className="price-value individual-price-text">$1000.00</div>
              <button className="buy-individual">Buy Now</button>
            </div>
          </div>
          
          <PriceDropToggle
            productName="Toys Product Two"
            originalPrice="$1000.00"
            isEnabled={priceDropSettings?.["Toys Product Two"] || false}
            onToggle={onPriceDropToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailFour;