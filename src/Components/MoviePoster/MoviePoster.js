import React, { Component } from "react";

export default class MoviePoster extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imageSrc} />
      </div>
    );
  }
}
