import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import MoviePoster from '../MoviePoster';
import MovieGenre from '../MovieGenre';

let key = 0;
const generateKey = () => {
  key += 1;
  return key;
};

const Movie = ({
  title, imageSrc, genres, synopsis,
}) => (
  <div className="Movie">
    <div className="Movie__Column">
      <MoviePoster imageSrc={imageSrc} alt={title} />
    </div>
    <div className="Movie__Column">
      <h1>{title}</h1>
      <div className="Movie__Genres">
        {genres.map(genre => (
          <MovieGenre genre={genre} key={generateKey()} />
        ))}
      </div>
      <div className="Movie__Synopsis">
        <LinesEllipsis
          text={synopsis}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
    </div>
  </div>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  synopsis: PropTypes.string.isRequired,
};

export default Movie;
