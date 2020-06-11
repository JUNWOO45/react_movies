import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const {genres, title, summary, poster, year} = this.props; 
    return ( 
      <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <ul>
          { 
            genres.map(genre => {
              return (
                <li>
                  <Genre genre={genre}/>
                </li>
              );
            })
          }
        </ul>
        
        <div className="movie__data">
          <h1 className="movie__title" style={{backgroundColor: 'silver'}}>{title}</h1>
          <div className="movie__year">{year}</div>
          <div className="movie__summary">{summary}</div>
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
};
 
export default Movie;
