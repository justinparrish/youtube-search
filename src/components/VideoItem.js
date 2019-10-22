import React, { Component } from 'react'
import { Row, Col, List, Avatar, Icon } from 'antd'
import youtube from '../api/youtube'

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );


const VideoItem  = ({video, handleVideoSelect}) => {
         return (
            <List.Item 
            onClick={ () => handleVideoSelect(video)}
            key={video.id.videoId}
            actions={[
                <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                <IconText type="message" text="2" key="list-vertical-message" />,
            ]}
            extra={
                <img
                width={272}
                alt={video.snippet.description}
                src={video.snippet.thumbnails.medium.url}
                />
            } >
            <List.Item.Meta 
                avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>}
                title={video.snippet.title}
                description={video.snippet.description}
            />    
            </List.Item>
         )
     }
 
export default VideoItem