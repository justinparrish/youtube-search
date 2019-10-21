import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd'
import NavBar from './components/NavBar'
import VideoList from './components/VideoList'

class App extends React.Component {
  render = () => (
    <div className='container' style={{padding: '10px'}}>
      <NavBar />
      <VideoList />
    </div>
  );
}

export default App;
