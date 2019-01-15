import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoDetails from './video_details'
import VideoList from './video_list'
import "./App.css"

const API_KEY = "AIzaSyBpoZSToSJXcM1XuBqALzKUnPg9zxLpxkE";

class App extends Component {
  state = {
    videos: []
  }

 componentDidMount(){
  YTSearch({key:API_KEY, term:'تفائلو بالخير بتلاقوه'}, (videos) => {
    this.setState({ videos });
    console.log(this.state.videos)
  })
}
  render() {
    const video = this.state.videos[0]
    const videos = this.state;
    return (
      <div className="App">
        <SearchBar />
        <VideoDetails  video = { video } />
        <VideoList videos = { videos}/>
      </div>
    );
  }
}

export default App;
