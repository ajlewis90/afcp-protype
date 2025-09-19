// src/components/me_tab_components/MyReviewsIcon.jsx
import React from 'react';
import './MyReviewsIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/84b5dbaa-9189-48de-89da-fefd0c85f8fc.png',
};

const MyReviewsIcon = (props) => {
  return (
    <div className="my-reviews-icon" style={{
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default MyReviewsIcon;