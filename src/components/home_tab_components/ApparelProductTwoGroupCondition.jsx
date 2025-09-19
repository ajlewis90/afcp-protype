// src/components/home_tab_components/ApparelProductTwoGroupCondition.jsx
import React from 'react';
import './ApparelProductTwoGroupCondition.css';

const defaultProps = {
  text: '5 people want this, 5 more needed to complete the group. Group Price: $40.00',
};

const ApparelProductTwoGroupCondition = ({ text = defaultProps.text }) => {
  return (
    <div className="apparel-product-two-group-condition">
      {text}
    </div>
  );
};

export default ApparelProductTwoGroupCondition;