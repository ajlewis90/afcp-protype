// src/components/home_tab_components/ToysProductTwoGroupCondition.jsx
import React from 'react';
import './ToysProductTwoGroupCondition.css';

const defaultProps = {
  text: '5 people want this, 5 more needed to complete the group. Group Price: $950.00',
};

const ToysProductTwoGroupCondition = ({ text = defaultProps.text }) => {
  return (
    <div className="toys-product-two-group-condition">
      {text}
    </div>
  );
};

export default ToysProductTwoGroupCondition;