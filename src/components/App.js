import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoDetails from './video_details'
import VideoList from './video_list'
import "./App.css"

const API_KEY = "AIzaSyBpoZSToSJXcM1XuBqALzKUnPg9zxLpxkE";

class App extends Component {
  state = {
    videos: [],
    currentVideo: null,
  }

  componentDidMount(){
  this.onVideoSearch("hello")
}

onVideoSearch = (searchValue) => {
  YTSearch({key:API_KEY, term:searchValue}, (videos) => {
    this.setState({
       videos: videos,
       currentVideo: videos[0]
     });
  })
}

onSelectedVideo = (currentVideo)=>{
  this.setState({ currentVideo })
}

  render() {
    const {onVideoSearch, onSelectedVideo} = this;
    const {videos, currentVideo} = this.state;
    return (
      <div className="App">
        <SearchBar onVideoSearch = {onVideoSearch}/>
        <VideoDetails  video = { currentVideo } />
        <VideoList  onSelectedVideo={onSelectedVideo} videos = { videos }/>
      </div>
    );
  }
}

export default App;
