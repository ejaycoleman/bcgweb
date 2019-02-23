import React, { Component } from 'react';

import { List } from 'antd'

import john from './assets/john.jpg'

const data = [
  'Level 2 guitar',
  'Experiance in teaching guitar'
];

class John extends Component {

  render() {
    return (
      <div style={{paddingBottom: 50}}>
        <img style={{width: '100%'}} src={john} alt="Logo" />
        <div style={{textAlign: 'left', marginLeft: '5%', marginTop: 7, marginRight: '5%'}}>
          <h1>John</h1>
          <h3>Hi, I'm John. I'm an aspiring guitarist, hoping to teach others how to play.</h3>
          <h2 style={{paddingTop: 15}}>Achievements</h2>
          <List
            size="small"
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
}

export default John;
