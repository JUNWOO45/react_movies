import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const {id, title, summary, poster, year} = this.props; 
    return ( 
      <>
        <h1>{title}</h1>
        <div>{id}</div>
        <div>{summary}</div>
      </>
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
