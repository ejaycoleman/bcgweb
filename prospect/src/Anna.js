import React, { Component } from 'react';

import { List } from 'antd'

import anna from './assets/anna.jpg'

const data = [
  'Codeacademy HTML',
  'Codeacademy CSS'
];

class John extends Component {

  render() {
    return (
      <div>
        <img style={{width: '80%'}} src={anna} alt="Logo" />
        <div style={{textAlign: 'left', marginLeft: '10%', marginRight: '10%'}}>
          <h1>Anna</h1>
          <h3>Hi, I'm Anna. I'm an aspiring website developer, learning HTML and CSS.</h3>
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
