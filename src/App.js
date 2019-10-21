import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd'
import NavBar from './components/NavBar'

class App extends React.Component {
  render = () => (
    <div className='container' style={{padding: '10px'}}>
      <NavBar />
    </div>
  );
}

export default App;
