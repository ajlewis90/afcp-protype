// src/components/me_tab_components/OffersForMeText.jsx
import React from 'react';
import './OffersForMeText.css';

const defaultProps = {
  text: 'Offers for me',
};

const OffersForMeText = (props) => {
  return (
    <div className="offers-for-me-text">
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default OffersForMeText;