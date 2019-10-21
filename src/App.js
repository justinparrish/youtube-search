import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd'
import NavBar from './components/NavBar'
import VideoList from './components/VideoList'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })
    this.setState({
      videos: response.data.items
    })
  }

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className='container' style={{ padding: '10px' }}>
        <NavBar />
        <VideoList />
      </div>
    )
  }
}

export default App;
