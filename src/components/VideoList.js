import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Row, Col, List, Avatar, Icon } from 'antd'
import VideoItem from './VideoItem'


const VideoList = ({videos , handleVideoSelect}) => {
  const renderedVideos =  videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    console.log(video.id);
});

return <div >{renderedVideos}</div>;
}

export default VideoList