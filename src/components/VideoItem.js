import React, { Component } from 'react'
import { Row, Col, List, Avatar, Icon } from 'antd'

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

const VideoItem  = ({video, handleVideoSelect}) => {
         return (
             <div onClick={ () => handleVideoSelect(video)}>
                 <List itemLayout='vertical' size='large'
                    pagination={{onChange: page =>  {
                        console.log(page)
                    },
                    pageSize: 3
                }} 
                dataSource={video}
                footer={
                    <div>
                        <b>List of Videos</b>
                    </div>
                }
                renderItem={item => (
                    <List.Item
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
                )}
                />
             </div>
         )
     }
 
export default VideoItem