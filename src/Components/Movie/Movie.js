import React, { Component } from "react";
import "./Movie.css";
import MoviePoster from "./../MoviePoster";
class Movie extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <MoviePoster imageSrc={this.props.imageSrc} />
      </div>
    );
  }
}

export default Movie;
