// src/components/home_tab_components/BeautyProductTwoGroupCondition.jsx
import React from 'react';
import './BeautyProductTwoGroupCondition.css';

const defaultProps = {
  text: '5 people want this, 5 more needed to complete the group. Group Price: $950.00',
};

const BeautyProductTwoGroupCondition = ({ text = defaultProps.text }) => {
  return (
    <div className="beauty-product-two-group-condition">
      {text}
    </div>
  );
};

export default BeautyProductTwoGroupCondition;