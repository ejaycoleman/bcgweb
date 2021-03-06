import React, { Component } from 'react';

import { List } from 'antd'

import anna from './assets/anna.png'

const data = [
  'Codeacademy HTML',
  'Codeacademy CSS'
];

class Anna extends Component {

  render() {
    return (
      <div style={{paddingBottom: 50}}>
        <img style={{width: '100%'}} src={anna} alt="Logo" />
        <div style={{textAlign: 'left', marginLeft: '5%', marginTop: 7, marginRight: '5%'}}>
          <h1>Anna</h1>
          <h3>Hi, I'm Anna. I'm hoping to persue a career as a website developer, learning HTML and CSS.</h3>
          <h2 style={{paddingTop: 15}}>Acheivements</h2>
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

export default Anna;
