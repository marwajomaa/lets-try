import React from 'react';
import "./App.css"
import VideoItem from './video_list_item'

const VideoList = ({videos, onSelectedVideo})=> {
  if(!videos){
    return 'loading'
}

  return(
    <div className="vedio_list">
     <ul>
    {videos.map(video=> <VideoItem key={video.etag} video={video} onSelectedVideo={onSelectedVideo}/>)}
     </ul>
    </div>
  )

}

export default VideoList;
