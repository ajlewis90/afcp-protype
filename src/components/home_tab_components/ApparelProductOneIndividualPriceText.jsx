// src/components/home_tab_components/ApparelProductOneIndividualPriceText.jsx
import React from 'react';
import './ApparelProductOneIndividualPriceText.css';

const defaultProps = {
  text: 'Individual Price: $70.00',
};

const ApparelProductOneIndividualPriceText = ({ text = defaultProps.text }) => {
  return (
    <div className="apparel-product-one-individual-price-text">
      {text}
    </div>
  );
};

export default ApparelProductOneIndividualPriceText;