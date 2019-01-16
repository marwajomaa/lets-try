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
    video: null
  }

//  componentDidMount(){
//   YTSearch({key:API_KEY, term:'تفائلو بالخير بتلاقوه'}, (videos) => {
//     this.setState({
//       videos: videos,
//     });
//   })
// }

onCurrentVideo = (searchValue) => {
  YTSearch({key:API_KEY, term:searchValue}, (videos) => {
    this.setState({
      videos: videos,
    });
  })
}
  render() {
    const {onCurrentVideo} = this;
    const video = this.state.videos[0]
    const {videos} = this.state;
    return (
      <div className="App">
        <SearchBar onCurrentVideo = {onCurrentVideo}/>
        <VideoDetails  video = { video } />
        <VideoList videos = { videos }/>
      </div>
    );
  }
}

export default App;
