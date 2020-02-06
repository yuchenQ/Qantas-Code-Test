/** @format */

import PropTypes from 'prop-types';

export const Hotel = {
  id: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.arrayOf(PropTypes.string),
  rate: PropTypes.shape({
    vale: PropTypes.number,
    type: PropTypes.string,
  }),
  room: PropTypes.string,
};

export const Promotion = {
  saving: PropTypes.shape({
    amount: PropTypes.number,
    currency: PropTypes.string,
  }),
};

export const Quote = {
  price: PropTypes.number,
  currency: PropTypes.string,
  promotion: PropTypes.shape(Promotion),
};

export const PreviewImage = {
  url: PropTypes.string,
  caption: PropTypes.string,
  tag: PropTypes.string,
};

export default {
  uuid: PropTypes.string,
  hotel: PropTypes.shape(Hotel),
  quote: PropTypes.shape(Quote),
  cancellation: PropTypes.string,
  previewImage: PropTypes.shape(PreviewImage),
};
