import React from 'react';
import "./App.css";

const VideoDetails = ({video})=>{
 if(!video){
   return 'loading'
 }
 const { videoId }= video.id;
 const { title, description } = video.snippet;
 const url = `https://www.youtube.com/embed/${videoId}`

  return(
    <div className="vedio_details">
    <div>
      <iframe src={url} className="iframe"/>
     </div>
     <div className="video_descriptions">
      <div className="video_title">{title}</div>
      <div className="video_des"><p>{description}</p></div>
     </div>
    </div>
  )
}

export default VideoDetails ;
