import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const { genres, title, summary, poster, year } = this.props; 
    return ( 
      <div className="movie">
        <img src={poster} alt={title} title={title}/>
        
        <div className="movie__data">
          <div className="movie__year">{year}</div>
          <ul className="genres">
            { 
              genres.map(genre => {
                return <Genre genre={genre} key={`${genre}${title}`} />;
              })
            }
          </ul>
          <h1 className="movie__title" style={{backgroundColor: 'silver'}}>{title}</h1>
          <div className="movie__summary">{summary.slice(0, 290)+'....'}</div>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired
};
 
export default Movie;
