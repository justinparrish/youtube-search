import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd'
import NavBar from './components/NavBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import youtube from './api/youtube'

const KEY = process.env.REACT_APP_YOUTUBE_KEY;

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  handleSubmit = async (termFromSearchBar) => {


    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY,
        q: termFromSearchBar
      }
    })
    console.log(KEY);
    this.setState({
      videos: response.data.items
    })
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    console.log(KEY)
    return (
      <div className='container' style={{ padding: '10px' }}>
        <NavBar handleSubmit={this.handleSubmit} />
        <Row gutter={[8, 16]}>
          <Col span={8}>
            <VideoDetail video={this.state.selectedVideo} />
          </Col>
          <Col span={24}>
            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App;
