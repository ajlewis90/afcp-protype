// src/components/home_tab_components/ApparelProductTwoIndividualPriceText.jsx
import React from 'react';
import './ApparelProductTwoIndividualPriceText.css';

const defaultProps = {
  text: 'Individual Price: $50.00',
};

const ApparelProductTwoIndividualPriceText = ({ text = defaultProps.text }) => {
  return (
    <div className="apparel-product-two-individual-price-text">
      {text}
    </div>
  );
};

export default ApparelProductTwoIndividualPriceText;