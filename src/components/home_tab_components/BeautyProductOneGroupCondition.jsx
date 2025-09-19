// src/components/home_tab_components/BeautyProductOneGroupCondition.jsx
import React from 'react';
import './BeautyProductOneGroupCondition.css';

const defaultProps = {
  text: '2 people want this, 3 more needed to complete the group. Group Price: $80.00',
};

const BeautyProductOneGroupCondition = ({ text = defaultProps.text }) => {
  return (
    <div className="beauty-product-one-group-condition">
      {text}
    </div>
  );
};

export default BeautyProductOneGroupCondition;