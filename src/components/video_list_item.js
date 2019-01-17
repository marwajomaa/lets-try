import React from 'react';
import "./App.css"

const VideoItem = ({video, onSelectedVideo})=>{
const { title } = video.snippet;
const { url } = video.snippet.thumbnails.medium;
  return(
    <li className="list_item" onClick= {()=>onSelectedVideo(video)} >
      <div className="vedio_item">
      <div className="video_img">
       <img className="video_image" src={ url } alt={title} />
      </div>
      <div className="video_title">
       <p>{title}</p>
      </div>
      </div>
    </li>
  )
}

export default VideoItem;
