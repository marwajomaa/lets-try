import React from 'react';
import "./App.css"
import VideoItem from './video_list_item'

const VideoList = ({videos})=> {
  if(!videos){
    return 'loading'
  }
  //
  // const VideoItems = videos.map(video => {
  //   return <VideoItem key={video.etag} video={video} />
  // });

  return(
    <div className="vedio_list">
     <ul>
    {videos.map(video=> <VideoItem video={video} />)}
     </ul>
    </div>
  )
}

export default VideoList;
