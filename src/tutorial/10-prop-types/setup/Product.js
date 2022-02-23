import React from 'react';
import PropTypes from 'prop-types';
import defaulImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  const url = image && image.url
  return (
    <article className="product">
      <img src={url || defaulImage} alt={name} />
      <h3>{name}</h3>
      <p>$ {price || 4.87}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: '',
//   price: 0,
//   image: defaulImage,
// };

export default Product;
