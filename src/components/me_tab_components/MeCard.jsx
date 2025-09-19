// src/components/me_tab_components/MeCard.jsx
import React, { useEffect } from 'react';
import ForMeTextTitle from './ForMeTextTitle';
import OffersForMeIcon from './OffersForMeIcon';
import MyReviewsIcon from './MyReviewsIcon';
import GetRewardsIcon from './GetRewardsIcon';
import GiftsSurprisesIcon from './GiftsSurprisesIcon';
import OffersForMeText from './OffersForMeText';
import MyReviewsText from './MyReviewsText';
import GetRewardsText from './GetRewardsText';
import GiftsSurprisesText from './GiftsSurprisesText';
import OffersProductImageOne from './OffersProductImageOne';
import OffersProductTextOne from './OffersProductTextOne';
import OffersProductOriginalPriceTextOne from './OffersProductOriginalPriceTextOne';
import OffersProductDiscountedPriceTextOne from './OffersProductDiscountedPriceTextOne';
import AddToCartButtonOne from './AddToCartButtonOne';
import OffersProductImageTwo from './OffersProductImageTwo';
import OffersProductTextTwo from './OffersProductTextTwo';
import OffersProductOriginalPriceTextTwo from './OffersProductOriginalPriceTextTwo';
import OffersProductDiscountedPriceTextTwo from './OffersProductDiscountedPriceTextTwo';
import AddToCartButtonTwo from './AddToCartButtonTwo';
import OffersProductImageThree from './OffersProductImageThree';
import OffersProductTextThree from './OffersProductTextThree';
import OffersProductOriginalPriceTextThree from './OffersProductOriginalPriceTextThree';
import OffersProductDiscountedPriceTextThree from './OffersProductDiscountedPriceTextThree';
import AddToCartButtonThree from './AddToCartButtonThree';
import ReviewImageOne from './ReviewImageOne';
import ReviewProductTextOne from './ReviewProductTextOne';
import ReviewTagTextOne from './ReviewTagTextOne';
import ReviewPriceTextOne from './ReviewPriceTextOne';
import ReviewerTextOne from './ReviewerTextOne';
import ReviewDateTextOne from './ReviewDateTextOne';
import ReviewRatingOne from './ReviewRatingOne';
import ReviewTextOne from './ReviewTextOne';
import ReviewLikesOne from './ReviewLikesOne';
import ReviewDislikesOne from './ReviewDislikesOne';
import ReviewImageTwo from './ReviewImageTwo';
import ReviewProductTextTwo from './ReviewProductTextTwo';
import ReviewTagTextTwo from './ReviewTagTextTwo';
import ReviewPriceTextTwo from './ReviewPriceTextTwo';
import ReviewerTextTwo from './ReviewerTextTwo';
import ReviewDateTextTwo from './ReviewDateTextTwo';
import ReviewRatingTwo from './ReviewRatingTwo';
import ReviewTextTwo from './ReviewTextTwo';
import ReviewLikesTwo from './ReviewLikesTwo';
import ReviewDislikesTwo from './ReviewDislikesTwo';
import ReviewImageThree from './ReviewImageThree';
import ReviewProductTextThree from './ReviewProductTextThree';
import ReviewTagTextThree from './ReviewTagTextThree';
import ReviewPriceTextThree from './ReviewPriceTextThree';
import ReviewerTextThree from './ReviewerTextThree';
import ReviewDateTextThree from './ReviewDateTextThree';
import ReviewRatingThree from './ReviewRatingThree';
import ReviewTextThree from './ReviewTextThree';
import ReviewLikesThree from './ReviewLikesThree';
import ReviewDislikesThree from './ReviewDislikesThree';
import ReviewImageFour from './ReviewImageFour';
import ReviewProductTextFour from './ReviewProductTextFour';
import ReviewTagTextFour from './ReviewTagTextFour';
import ReviewPriceTextFour from './ReviewPriceTextFour';
import ReviewerTextFour from './ReviewerTextFour';
import ReviewDateTextFour from './ReviewDateTextFour';
import ReviewRatingFour from './ReviewRatingFour';
import ReviewTextFour from './ReviewTextFour';
import ReviewLikesFour from './ReviewLikesFour';
import ReviewDislikesFour from './ReviewDislikesFour';

const MeCard = ({ onMeTabChange }) => {
  const [activeMeTab, setActiveMeTab] = React.useState('Offers for me');

  // Reset to "Offers for me" whenever the Me tab is activated
  useEffect(() => {
    setActiveMeTab('Offers for me');
  }, [onMeTabChange]);

  const handleMeTabClick = (tab) => {
    setActiveMeTab(tab);
  };

  const handleAddToCartClick = (productName) => (e) => {
    e.stopPropagation();
    console.log(`Added ${productName} to cart`);
  };

  return (
    <div className="me-card">
      <div className="me-card-content">
        <ForMeTextTitle />
        <div className="me-card-icons">
          <div
            className={`icon-text-pair ${activeMeTab === 'Offers for me' ? 'active' : ''}`}
            onClick={() => handleMeTabClick('Offers for me')}
          >
            <OffersForMeIcon />
            <OffersForMeText />
          </div>
          <div
            className={`icon-text-pair ${activeMeTab === 'My Reviews' ? 'active' : ''}`}
            onClick={() => handleMeTabClick('My Reviews')}
          >
            <MyReviewsIcon />
            <MyReviewsText />
          </div>
          <div
            className={`icon-text-pair ${activeMeTab === 'Get Rewards' ? 'active' : ''}`}
            onClick={() => handleMeTabClick('Get Rewards')}
          >
            <GetRewardsIcon />
            <GetRewardsText />
          </div>
          <div
            className={`icon-text-pair ${activeMeTab === 'Gifts & Surprises' ? 'active' : ''}`}
            onClick={() => handleMeTabClick('Gifts & Surprises')}
          >
            <GiftsSurprisesIcon />
            <GiftsSurprisesText />
          </div>
        </div>
        {activeMeTab === 'Offers for me' && (
          <div className="me-tab-content">
            <div className="product-group">
              <OffersProductImageOne />
              <OffersProductTextOne />
              <OffersProductOriginalPriceTextOne />
              <div className="price-and-button-row">
                <OffersProductDiscountedPriceTextOne />
                <div className="spacer" />
                <div onClick={handleAddToCartClick('Retro Sneakers')}>
                  <AddToCartButtonOne />
                </div>
              </div>
            </div>
            <div className="product-group">
              <OffersProductImageTwo />
              <OffersProductTextTwo />
              <OffersProductOriginalPriceTextTwo />
              <div className="price-and-button-row">
                <OffersProductDiscountedPriceTextTwo />
                <div className="spacer" />
                <div onClick={handleAddToCartClick('Cute Stuffed Bear')}>
                  <AddToCartButtonTwo />
                </div>
              </div>
            </div>
            <div className="product-group">
              <OffersProductImageThree />
              <OffersProductTextThree />
              <OffersProductOriginalPriceTextThree />
              <div className="price-and-button-row">
                <OffersProductDiscountedPriceTextThree />
                <div className="spacer" />
                <div onClick={handleAddToCartClick('Coffee Machine')}>
                  <AddToCartButtonThree />
                </div>
              </div>
            </div>
          </div>
        )}
        {activeMeTab === 'My Reviews' && (
          <div className="me-tab-content">
            <div className="product-group">
              <ReviewImageOne />
              <ReviewProductTextOne />
              <ReviewTagTextOne />
              <ReviewPriceTextOne />
              <div className="reviewer-date-row">
                <ReviewerTextOne />
                <ReviewDateTextOne />
              </div>
              <ReviewRatingOne />
              <ReviewTextOne />
              <div className="likes-dislikes-row">
                <ReviewLikesOne />
                <ReviewDislikesOne />
              </div>
            </div>
            <div className="product-group">
              <ReviewImageTwo />
              <ReviewProductTextTwo />
              <ReviewTagTextTwo />
              <ReviewPriceTextTwo />
              <div className="reviewer-date-row">
                <ReviewerTextTwo />
                <ReviewDateTextTwo />
              </div>
              <ReviewRatingTwo />
              <ReviewTextTwo />
              <div className="likes-dislikes-row">
                <ReviewLikesTwo />
                <ReviewDislikesTwo />
              </div>
            </div>
            <div className="product-group">
              <ReviewImageThree />
              <ReviewProductTextThree />
              <ReviewTagTextThree />
              <ReviewPriceTextThree />
              <div className="reviewer-date-row">
                <ReviewerTextThree />
                <ReviewDateTextThree />
              </div>
              <ReviewRatingThree />
              <ReviewTextThree />
              <div className="likes-dislikes-row">
                <ReviewLikesThree />
                <ReviewDislikesThree />
              </div>
            </div>
            <div className="product-group">
              <ReviewImageFour />
              <ReviewProductTextFour />
              <ReviewTagTextFour />
              <ReviewPriceTextFour />
              <div className="reviewer-date-row">
                <ReviewerTextFour />
                <ReviewDateTextFour />
              </div>
              <ReviewRatingFour />
              <ReviewTextFour />
              <div className="likes-dislikes-row">
                <ReviewLikesFour />
                <ReviewDislikesFour />
              </div>
            </div>
          </div>
        )}
        {activeMeTab === 'Get Rewards' && (
          <div className="me-tab-content">
            <p>Get Rewards content goes here.</p>
          </div>
        )}
        {activeMeTab === 'Gifts & Surprises' && (
          <div className="me-tab-content">
            <p>Gifts & Surprises content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeCard;