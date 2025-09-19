// src/components/home_tab_components/ApparelProductOneGroupCondition.jsx
import React from 'react';
import './ApparelProductOneGroupCondition.css';

const defaultProps = {
  text: '2 people want this, 3 more needed to complete the group. Group Price: $55.00',
};

const ApparelProductOneGroupCondition = ({ text = defaultProps.text }) => {
  return (
    <div className="apparel-product-one-group-condition">
      {text}
    </div>
  );
};

export default ApparelProductOneGroupCondition;