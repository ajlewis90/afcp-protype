// src/components/home_tab_components/ToysCard.jsx
import React from 'react';
import ToysAllIcon from './ToysAllIcon';
import RemoteControlIcon from './RemoteControlIcon';
import BlocksIcon from './BlocksIcon';
import ActionIcon from './ActionIcon';
import DollsIcon from './DollsIcon';
import ToysAllText from './ToysAllText';
import RemoteControlText from './RemoteControlText';
import BlocksText from './BlocksText';
import ActionText from './ActionText';
import DollsText from './DollsText';
import ToysProductImageOne from './ToysProductImageOne';
import ToysProductTextOne from './ToysProductTextOne';
import ToysProductOneIndividualPriceText from './ToysProductOneIndividualPriceText';
import ToysProductOneAgeRangeText from './ToysProductOneAgeRangeText';
import ViewProductButton from './ViewProductButton';
import PriceDropdownButton from './PriceDropdownButton';
import ToysProductImageTwo from './ToysProductImageTwo';
import ToysProductTextTwo from './ToysProductTextTwo';
import ToysProductTwoIndividualPriceText from './ToysProductTwoIndividualPriceText';
import ToysProductTwoAgeRangeText from './ToysProductTwoAgeRangeText';
import ProductDetailThree from './ProductDetailThree';
import ProductDetailFour from './ProductDetailFour';
import './ToysCard.css';

const ToysCard = ({ 
  activeFilter, 
  onFilterClick, 
  onPriceDropdownClick, 
  priceDropdownProduct,
  onProductThreeClick,
  onProductFourClick,
  onPriceDropToggle,
  priceDropSettings
}) => {

  const handleProductThreeClick = () => {
    if (onProductThreeClick) {
      onProductThreeClick();
    }
  };

  const handleProductFourClick = () => {
    if (onProductFourClick) {
      onProductFourClick();
    }
  };

  const handleJoinGroupClick = (e) => {
    e.stopPropagation();
    console.log('Join Group clicked');
  };

  return (
    <div className="toys-card">
      <div className="toys-card-content">
        <div className="toys-card-icons">
          <div
            className={`icon-text-pair ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => onFilterClick('All')}
          >
            <ToysAllIcon />
            <ToysAllText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Remote Control' ? 'active' : ''}`}
            onClick={() => onFilterClick('Remote Control')}
          >
            <RemoteControlIcon />
            <RemoteControlText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Blocks' ? 'active' : ''}`}
            onClick={() => onFilterClick('Blocks')}
          >
            <BlocksIcon />
            <BlocksText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Action' ? 'active' : ''}`}
            onClick={() => onFilterClick('Action')}
          >
            <ActionIcon />
            <ActionText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Dolls' ? 'active' : ''}`}
            onClick={() => onFilterClick('Dolls')}
          >
            <DollsIcon />
            <DollsText />
          </div>
        </div>
        {activeFilter === 'All' && (
          <>
            <div className="product-group" onClick={handleProductThreeClick}>
              <ToysProductImageOne />
              <ToysProductTextOne />
              <ToysProductOneIndividualPriceText />
              <div className="product-details-row">
                <ToysProductOneAgeRangeText />
                <div className="spacer" />
                <div onClick={handleJoinGroupClick}>
                  <ViewProductButton />
                </div>
              </div>
            </div>
            <div className="product-group" onClick={handleProductFourClick}>
              <ToysProductImageTwo />
              <ToysProductTextTwo />
              <ToysProductTwoIndividualPriceText />
              <div className="product-details-row-two">
                <ToysProductTwoAgeRangeText />
                <div className="spacer" />
                <div onClick={handleJoinGroupClick}>
                  <ViewProductButton />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

    </div>
  );
};

export default ToysCard;