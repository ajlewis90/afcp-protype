// src/components/home_tab_components/CartThreeImage.jsx
import React from 'react';

const styles = {
  ImageContainer: {
    top: '190px',
    left: '14px',
    width: '55px',
    height: '55px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/2f90ced9-0926-4b28-825f-f2fcf2c9b053.png', // Updated image URL
};

const CartThreeImage = (props) => {
  return (
    <div
      style={{
        ...styles.ImageContainer,
        backgroundImage: `url(${props.image ?? defaultProps.image})`,
      }}
    />
  );
};

export default CartThreeImage;