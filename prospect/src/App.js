import React, { Component } from 'react';
import './App.css';

import { Row, Col, Icon } from 'antd';
import User from './User'


class App extends Component {


  render() {
    return (
      <div className="App">
        <Row style={{height: 40}}>
          <Col span={2}><Icon type="bars" style={{position: 'absolute', fontSize: 20, marginTop: 10, color: '#91268F'}} /></Col>
          <Col span={7} />
          <Col span={6} style={{paddingTop: 0}}><span style={{color: '#91268F', fontWeight: 600, fontSize: 25, }}>Prospect</span></Col>
        </Row>
        <User />

      </div>
    );
  }
}

export default App;
