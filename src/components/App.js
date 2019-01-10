import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
const API_KEY = "AIzaSyBpoZSToSJXcM1XuBqALzKUnPg9zxLpxkE";

YTSearch({key:API_KEY, term:'food'}, data => console.log(data))

class App extends Component {
  render() {
    return (
      <div className="App">
        hello oooooooooooo
      </div>
    );
  }
}

export default App;
