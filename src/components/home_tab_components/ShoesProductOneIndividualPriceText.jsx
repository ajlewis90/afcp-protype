// src/components/home_tab_components/ShoesProductOneIndividualPriceText.jsx
import React from 'react';
import './ShoesProductOneIndividualPriceText.css';

const defaultProps = {
  text: '$335.00',
};

const ShoesProductOneIndividualPriceText = ({ text = defaultProps.text }) => {
  return (
    <div className="shoes-product-one-individual-price-text">
      {text}
    </div>
  );
};

export default ShoesProductOneIndividualPriceText;