import React, { Component } from 'react';
import './App.css';
import Movie from './Components/Movie';

class App extends Component {
  state = {
    Movies: '',
  };

  componentDidMount() {
    this.getMoives();
  }

  renderMovies = Movies => Movies.map(movie => (
    <Movie
      title={movie.title_english}
      imageSrc={movie.large_cover_image}
      key={movie.id}
      genres={movie.genres ? movie.genres : ['']}
      synopsis={movie.synopsis}
    />
  ));

  getMoives = async () => {
    const movies = await this.callApi();
    this.setState({
      Movies: movies,
    });
  };

  callApi = () => fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(e => console.log(e));

  render() {
    const { Movies } = this.state;
    return (
      <div className={Movies ? 'App' : 'App--loading'}>
        {Movies ? this.renderMovies(Movies) : 'Loading'}
      </div>
    );
  }
}

export default App;
