// src/components/home_tab_components/ProductDetailFive.jsx
import React from 'react';
import ShareButton from '../ShareButton';
import PriceDropToggle from './PriceDropToggle';
import './ProductDetailFive.css';

const ProductDetailFive = ({ onClose, onPriceDropToggle, priceDropSettings }) => {
  const shareText = "Check out Levi's 501 Original Fit Jeans! A timeless classic with a comfortable fit and iconic style.";
  const shareTitle = "Levi's 501 Original Fit Jeans";
  const productImage = "https://assets.api.uizard.io/api/cdn/stream/d59d7261-5ecd-4484-9551-44dc1d93fe45.png";

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
            alt="Levi's 501 Original Fit Jeans"
            className="product-image"
          />
          <h1 className="product-title">Levi's 501 Original Fit Jeans</h1>
          <p className="product-description">
            The Levi's 501 Original Fit Jeans are a timeless classic, offering a comfortable fit and iconic style for everyday wear.
          </p>
          <div className="color-options">
            <div className="color-option">S</div>
            <div className="color-option">M</div>
            <div className="color-option">L</div>
          </div>
          <div className="group-info">
            <div className="price-section">
              <div className="price-label">Individual price:</div>
              <div className="price-value individual-price-text">$70.00</div>
              <button className="buy-individual">Buy Now</button>
            </div>
          </div>
          
          <PriceDropToggle
            productName="Apparel Product One"
            originalPrice="$70.00"
            isEnabled={priceDropSettings?.["Apparel Product One"] || false}
            onToggle={onPriceDropToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailFive;