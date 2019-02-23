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
      <div>
        <img style={{width: '80%'}} src={john} alt="Logo" />
        <div style={{textAlign: 'left', marginLeft: '10%', marginRight: '10%'}}>
          <h1>John</h1>
          <h3>Hi, I'm John. I'm an aspiring guitarist, hoping to teach others how to play.</h3>
          <h2>Acheivements</h2>
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
