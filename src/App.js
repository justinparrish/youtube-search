import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd'

class App extends React.Component {
  render = () => (
    <div className='container' >
      <Row gutter={[8,8]} style={{background: 'black', border:'1px solid orange', width: '100%', height: '500m', margin: 'auto'}}>
        <Col></Col>
      </Row>
    </div>
  );
}

export default App;
