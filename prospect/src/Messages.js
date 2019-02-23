import React, { Component } from 'react';

import { List, Avatar } from 'antd';

import pp8 from './assets/pp8.jpg'


import {
  Link
} from 'react-router-dom'

const data = [
  {
    name: 'Matilda',
    message: "Hi Derek. I was hoping you could help me persue my ambition of being a...",
    component: pp8
  },
];

class Messages extends Component {

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        style={{paddingLeft: 20, textAlign: 'left', borderBottom: '.5px solid #EEEEEE'}}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar style={{marginTop: 10}}size={50} src={item.component} />}
              title={item.name}
              description={item.message}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default Messages;
