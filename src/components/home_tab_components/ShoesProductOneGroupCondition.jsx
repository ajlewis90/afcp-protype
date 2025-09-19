// src/components/home_tab_components/ShoesProductOneGroupCondition.jsx
import React from 'react';
import './ShoesProductOneGroupCondition.css';

const defaultProps = {
  text: '2 people want this, 3 more needed to complete the group. Group Price: $300.00',
};

const ShoesProductOneGroupCondition = ({ text = defaultProps.text }) => {
  return (
    <div className="shoes-product-one-group-condition">
      {text}
    </div>
  );
};

export default ShoesProductOneGroupCondition;