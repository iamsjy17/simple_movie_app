import React from 'react';
import './MovieGenre.css';
import PropTypes from 'prop-types';

const MovieGenre = ({ genre }) => <span className="Movie__Genre">{genre}</span>;

MovieGenre.propTypes = {
  genre: PropTypes.PropTypes.string.isRequired,
};

export default MovieGenre;
