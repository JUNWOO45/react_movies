import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {data: {data : { movies }}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating') 

    console.log(movies);
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() { 
    const { isLoading, movies } = this.state;
    return ( 
      <>
        <div>
          { 
            isLoading ? 
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div> : 
            <div className="movies">
              { movies.map(movie => {
                  return <Movie title={movie.title} key={movie.id} id={movie.id} summary={movie.summary} poster={movie.medium_cover_image} year={movie.year} genres={movie.genres} />
                }) 
              }
            </div>
          }
        </div>
      </>
    );
  }
}
 
export default App;
