import React from 'react';
import PropTypes from 'prop-types';
import './MoviePoster.css';

const MoviePoster = ({ imageSrc, alt }) => (
  <div>
    <img src={imageSrc} alt={alt} title={alt} className="Movie__Poster" />
  </div>
);

MoviePoster.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default MoviePoster;
