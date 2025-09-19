// src/components/home_tab_components/ApparelCard.jsx
import React from 'react';
import ApparelAllIcon from './ApparelAllIcon';
import MenIcon from './MenIcon';
import WomenIcon from './WomenIcon';
import KidsIcon from './KidsIcon';
import AccessoriesIcon from './AccessoriesIcon';
import ApparelAllText from './ApparelAllText';
import MenText from './MenText';
import WomenText from './WomenText';
import KidsText from './KidsText';
import AccessoriesText from './AccessoriesText';
import ApparelProductImageOne from './ApparelProductImageOne';
import ApparelProductTextOne from './ApparelProductTextOne';
import ApparelProductOneIndividualPriceText from './ApparelProductOneIndividualPriceText';
import ApparelProductOneSizesText from './ApparelProductOneSizesText';
import JoinGroupButtonFive from './JoinGroupButtonFive';
import GroupBuyIconFive from './GroupBuyIconFive';
import PriceDropdownButton from './PriceDropdownButton';
import ApparelProductOneGroupCondition from './ApparelProductOneGroupCondition';
import ApparelProductImageTwo from './ApparelProductImageTwo';
import ApparelProductTextTwo from './ApparelProductTextTwo';
import ApparelProductTwoIndividualPriceText from './ApparelProductTwoIndividualPriceText';
import ApparelProductTwoColorsText from './ApparelProductTwoColorsText';
import JoinGroupButtonSix from './JoinGroupButtonSix';
import GroupBuyIconSix from './GroupBuyIconSix';
import ApparelProductTwoGroupCondition from './ApparelProductTwoGroupCondition';
import ProductDetailFive from './ProductDetailFive';
import ProductDetailSix from './ProductDetailSix';
import './ApparelCard.css';

const ApparelCard = ({ 
  activeFilter, 
  onFilterClick, 
  onPriceDropdownClick, 
  priceDropdownProduct,
  onProductFiveClick,
  onProductSixClick,
  onPriceDropToggle,
  priceDropSettings
}) => {

  const handleProductFiveClick = () => {
    if (onProductFiveClick) {
      onProductFiveClick();
    }
  };

  const handleProductSixClick = () => {
    if (onProductSixClick) {
      onProductSixClick();
    }
  };

  const handleJoinGroupClick = (e) => {
    e.stopPropagation();
    console.log('Join Group clicked');
  };

  return (
    <div className="apparel-card">
      <div className="apparel-card-content">
        <div className="apparel-card-icons">
          <div
            className={`icon-text-pair ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => onFilterClick('All')}
          >
            <ApparelAllIcon />
            <ApparelAllText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Men' ? 'active' : ''}`}
            onClick={() => onFilterClick('Men')}
          >
            <MenIcon />
            <MenText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Women' ? 'active' : ''}`}
            onClick={() => onFilterClick('Women')}
          >
            <WomenIcon />
            <WomenText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Kids' ? 'active' : ''}`}
            onClick={() => onFilterClick('Kids')}
          >
            <KidsIcon />
            <KidsText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Accessories' ? 'active' : ''}`}
            onClick={() => onFilterClick('Accessories')}
          >
            <AccessoriesIcon />
            <AccessoriesText />
          </div>
        </div>
        {activeFilter === 'All' && (
          <>
            <div className="product-group" onClick={handleProductFiveClick}>
              <ApparelProductImageOne />
              <ApparelProductTextOne />
              <ApparelProductOneIndividualPriceText />
              <div className="product-details-row">
                <ApparelProductOneSizesText />
                <div className="spacer" />
                <div onClick={handleJoinGroupClick}>
                  <JoinGroupButtonFive />
                </div>
              </div>
              <div className="group-buy-row">
                <GroupBuyIconFive />
                <ApparelProductOneGroupCondition />
              </div>
            </div>
            <div className="product-group" onClick={handleProductSixClick}>
              <ApparelProductImageTwo />
              <ApparelProductTextTwo />
              <ApparelProductTwoIndividualPriceText />
              <div className="product-details-row-two">
                <ApparelProductTwoColorsText />
                <div className="spacer" />
                <div onClick={handleJoinGroupClick}>
                  <JoinGroupButtonSix />
                </div>
              </div>
              <div className="group-buy-row-two">
                <GroupBuyIconSix />
                <ApparelProductTwoGroupCondition />
              </div>
            </div>
          </>
        )}
      </div>

    </div>
  );
};

export default ApparelCard;