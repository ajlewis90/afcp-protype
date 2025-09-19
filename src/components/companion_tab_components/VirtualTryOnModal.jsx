import React, { useState, useRef } from 'react';
import './VirtualTryOnModal.css';

const VirtualTryOnModal = ({ product, onClose, onAddToCart }) => {
  const [modalState, setModalState] = useState('upload'); // 'upload' | 'processing' | 'results'
  const [tryOnResults, setTryOnResults] = useState([]);
  const [currentResultIndex, setCurrentResultIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const fileInputRef = useRef(null);
  const [uploadedUserImage, setUploadedUserImage] = useState(null);

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    setModalState('processing');

    // Store the uploaded user image as base64
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedUserImage(e.target.result);
    };
    reader.readAsDataURL(file);

    // Simulate processing time (2 seconds) without backend
    setTimeout(() => {
      // Generate demo try-on results based on product category
      const getDemoResults = () => {
        const productName = product.name.toLowerCase();
        console.log(productName);
        
        if (productName.includes('dress')) {
          return [
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80',
            'https://images.unsplash.com/photo-1566479179817-c4c0dedd4cec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'
          ];
        } else if (productName.includes('shirt') || productName.includes('blouse')) {
          return [
            'https://images.unsplash.com/photo-1556821840-3a9c6dcdb815?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80',
            'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'
          ];
        } else if (productName.includes('jeans') || productName.includes('pants') || productName.includes('trousers')) {
          return [
            'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80',
            'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'
          ];
        } else if (productName.includes('tank') || productName.includes('sleeveless')) {
          return [
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80',
            'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'
          ];
        } else if (productName.includes('suit') || productName.includes('blazer') || productName.includes('business') || productName.includes('executive')) {
          // Enhanced gender detection for business suits
          const isWomensSuit = productName.includes('women') || productName.includes('woman') || 
                              productName.includes('ladies') || productName.includes('female') ||
                              productName.includes('professional blazer set') ||
                              productName.includes('executive pantsuit') || productName.includes('skirt');
          
          const isMensSuit = productName.includes('men') || productName.includes('man') || 
                            productName.includes('male') || productName.includes('gentleman') ||
                            productName.includes('business') ||
                            (productName.includes('navy') || productName.includes('black') || productName.includes('charcoal')) && !isWomensSuit;
          
          if (isMensSuit) {
            // Men's suits - show first 3 images
            return [
              '/src/assets/business-suits/men-try-out/men-suit-1/man-in-grey-suit-straight.png',
              '/src/assets/business-suits/men-try-out/men-suit-1/man-in-grey-suit-back.png',
              '/src/assets/business-suits/men-try-out/men-suit-1/man-in-grey-suit-side-front-look.png',
              '/src/assets/business-suits/men-try-out/men-suit-1/man-in-grey-suit-sideways.png'
            ];
          } else {
            // Women's suits - show last 2 images
            return [
              '/src/assets/business-suits/women-try-out/women-suit-1/women-suit-standing.png',
              '/src/assets/business-suits/women-try-out/women-suit-1/women-suit-chair.png',
              '/src/assets/business-suits/women-try-out/women-suit-1/young asian lady in business attire 2 standing.png',
              '/src/assets/business-suits/women-try-out/women-suit-1/young asian lady in party attire standing.png'
            ];
          }
        } else if (productName.includes('sofa') || productName.includes('yellow sofa') || productName.includes('red sofa') || productName.includes('3-seater') || productName.includes('2-seater')) {
          // Enhanced gender detection for business suits
          const isRedSofa = productName.includes('red') || productName.includes('red sofa') || 
                              productName.includes('red 2-seater sofa') || productName.includes('modern') ||
                              productName.includes('red 3-seater sofa') ||
                              productName.includes('modern red 2-seater');
          
          const isYellowSofa = productName.includes('yellow') || productName.includes('yellow sofa') || 
                            productName.includes('yellow 2-seater sofa') || productName.includes('yellow 3-seater sofa') ||
                            productName.includes('modern yellow 2-seater') && !isRedSofa;
          
          if (isRedSofa) {
            // Red sofas
            return [
              '/src/assets/sofas/red-sofa-try-out/red sofa 2 in room.png',
              '/src/assets/sofas/red-sofa-try-out/red sofa in room.jpg'
            ];
          } else {
            // Yellow sofas 
            return [
              '/src/assets/sofas/yellow-sofa-try-out/yellow sofa in room.png',
              '/src/assets/sofas/yellow-sofa-try-out/yellow sofa in room with table.png'
            ];
          }
        }
        
        // Default demo results
        return [
          'https://images.unsplash.com/photo-1566479179817-c4c0dedd4cec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600',
          'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600',
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600'
        ];
      };

      setTryOnResults(getDemoResults());
      setModalState('results');
    }, 2000);
  };

  const handleTryAgain = () => {
    setModalState('upload');
    setTryOnResults([]);
    setCurrentResultIndex(0);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
    onClose();
  };

  const nextResult = () => {
    setCurrentResultIndex((prev) => 
      prev < tryOnResults.length ? prev + 1 : 0
    );
  };

  const prevResult = () => {
    setCurrentResultIndex((prev) => 
      prev > 0 ? prev - 1 : tryOnResults.length
    );
  };

  // Touch handlers for swipe navigation
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextResult();
    } else if (isRightSwipe) {
      prevResult();
    }
  };

  return (
    <div className="try-on-modal-overlay" onClick={onClose}>
      <div className="try-on-modal" onClick={(e) => e.stopPropagation()}>
        <div className="try-on-modal-header">
          <h2>Virtual Try-On</h2>
          <button className="try-on-close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="try-on-modal-content">
          {modalState === 'upload' && (
            <div className="upload-section">
              <div className="product-preview">
                <img src={product.image || product.imageUrl} alt={product.name} />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                </div>
              </div>
              
              <div className="upload-area">
                <div className="upload-icon">📷</div>
                <p>Upload your photo to try on this item</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  style={{ display: 'none' }}
                />
                <button 
                  className="upload-button"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Choose Photo
                </button>
              </div>
            </div>
          )}

          {modalState === 'processing' && (
            <div className="processing-section">
              <div className="processing-spinner"></div>
              <h3>Creating your virtual try-on...</h3>
              <p>This may take a few moments</p>
            </div>
          )}

          {modalState === 'results' && (
            <div className="results-section">
              <div className="results-header">
                <h3>Your Virtual Try-On Results</h3>
                <div className="result-counter">
                  {currentResultIndex === 0 ? "Comparison" : `${currentResultIndex} of ${tryOnResults.length}`}
                </div>
              </div>
              
              <div className="result-image-container"
                   onTouchStart={handleTouchStart}
                   onTouchMove={handleTouchMove}
                   onTouchEnd={handleTouchEnd}>
                {currentResultIndex === 0 ? (
                  <div className="comparison-view">
                    <div className="comparison-item">
                      <img src={product.image || product.imageUrl} alt="Product" className="comparison-image" />
                      <p className="comparison-label">Product</p>
                    </div>
                    <div className="comparison-item">
                      <img src={uploadedUserImage || "/api/placeholder/200/300"} alt="Your Photo" className="comparison-image" />
                      <p className="comparison-label">Your Photo</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={tryOnResults[currentResultIndex - 1]}
                    alt="Try-on result"
                    className="result-image"
                  />
                )}
                
                {(tryOnResults.length + 1) > 1 && (
                  <>
                    <button className="nav-button prev" onClick={prevResult}>
                      ‹
                    </button>
                    <button className="nav-button next" onClick={nextResult}>
                      ›
                    </button>
                  </>
                )}
              </div>

              <div className="results-actions">
                <button className="try-again-button" onClick={handleTryAgain}>
                  🔄 Try Again
                </button>
                {currentResultIndex > 0 && (
                  <button className="add-to-cart-button" onClick={handleAddToCart}>
                    🛒 Add to Cart
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOnModal;