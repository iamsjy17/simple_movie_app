import React, { Component } from "react";
import "./App.css";
import Movie from "./Components/Movie";

const movieTitles = ["아이언맨", "베놈", "스파이더맨"];

const movieImages = [
  "http://file.mk.co.kr/meet/neds/2013/10/image_readtop_2013_968172_13814880001070564.jpg",
  "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000080/80589/80589_1000.jpg",
  "https://t1.daumcdn.net/cfile/tistory/223B2F4D595F1CEB09"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} imageSrc={movieImages[0]} />
        <Movie title={movieTitles[1]} imageSrc={movieImages[1]} />
        <Movie title={movieTitles[2]} imageSrc={movieImages[2]} />
      </div>
    );
  }
}

export default App;
