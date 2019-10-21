import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd'
import NavBar from './components/NavBar'
import VideoList from './components/VideoList'
import VideoItem from './components/VideoItem'
import youtube from './api/youtube'


class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  handleSubmit = async (termFromSearchBar) => {
const KEY = process.env.YOUTUBE_KEY;

    const response = await youtube.get('/search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: KEY,
          q: termFromSearchBar
        }
    })
    this.setState({
        videos: response.data.items
    })
};
handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
}

  render() {
    return (
      <div className='container' style={{ padding: '10px' }}>
        <NavBar handleSubmit={this.handleSubmit}/>
        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;
