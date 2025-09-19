// src/components/me_tab_components/GetRewardsIcon.jsx
import React from 'react';
import './GetRewardsIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/7ba6ad45-68f5-409a-b72c-3fad3314a625.png',
};

const GetRewardsIcon = (props) => {
  return (
    <div className="get-rewards-icon" style={{
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default GetRewardsIcon;