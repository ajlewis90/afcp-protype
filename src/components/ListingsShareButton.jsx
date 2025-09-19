// src/components/ListingsShareButton.jsx
import React, { useState } from 'react';
import shareIcon from '../assets/share-icon.png';
import './ListingsShareButton.css';

const ListingsShareButton = ({ shareText, shareTitle, productImage }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const shareUrl = encodeURIComponent(window.location.href);
  const encodedShareText = encodeURIComponent(shareText);
  const encodedShareTitle = encodeURIComponent(shareTitle);

  // Social media share links
  const xShareUrl = `https://x.com/intent/tweet?text=${encodedShareText}&url=${shareUrl}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}"e=${encodedShareText}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodedShareText}%20${shareUrl}`;
  const emailShareUrl = `mailto:?subject=${encodedShareTitle}&body=${encodedShareText}%20${shareUrl}`;
  const instagramShareUrl = `https://www.instagram.com/share?url=${shareUrl}&text=${encodedShareText}`;

  return (
    <>
      <button className="share-button" onClick={() => setIsPopupOpen(true)}>
        <img src={shareIcon} alt="Share Icon" className="share-icon" />
      </button>

      {isPopupOpen && (
        <div className="share-popup-overlay">
          <div className="share-popup">
            <div className="popup-header">
              <h2 className="popup-header-title">Share to</h2>
              <button className="close-button" onClick={() => setIsPopupOpen(false)}>
                ×
              </button>
            </div>
            <div className="popup-content">
              <img src={productImage} alt={shareTitle} className="popup-product-image" />
              <h3 className="popup-product-title">{shareTitle}</h3>
              <div className="social-links">
                <a href={xShareUrl} target="_blank" rel="noopener noreferrer" className="social-button x">
                  X
                </a>
                <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="social-button facebook">
                  Facebook
                </a>
                <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" className="social-button whatsapp">
                  WhatsApp
                </a>
                <a href={emailShareUrl} target="_blank" rel="noopener noreferrer" className="social-button email">
                  Email
                </a>
                <a href={instagramShareUrl} target="_blank" rel="noopener noreferrer" className="social-button instagram">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListingsShareButton;