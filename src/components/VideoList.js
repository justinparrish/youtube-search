import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {List } from 'antd'
import VideoItem from './VideoItem'


const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
  });
  return (
      <List itemLayout='vertical' size='large'
        pagination={{
          onChange: page => {
            console.log(page)
          },
          pageSize: 4
        }}
        footer={
          <div>
            <b>List of Videos</b>
          </div>
        }
      >
        {renderedVideos}
      </List>
  )
}

export default VideoList