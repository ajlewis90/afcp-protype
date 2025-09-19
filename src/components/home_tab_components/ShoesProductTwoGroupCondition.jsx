// src/components/home_tab_components/ShoesProductTwoGroupCondition.jsx
import React from 'react';
import './ShoesProductTwoGroupCondition.css';

const defaultProps = {
  text: '5 people want this, 5 more needed to complete the group. Group Price: $120.00',
};

const ShoesProductTwoGroupCondition = ({ text = defaultProps.text }) => {
  return (
    <div className="shoes-product-two-group-condition">
      {text}
    </div>
  );
};

export default ShoesProductTwoGroupCondition;