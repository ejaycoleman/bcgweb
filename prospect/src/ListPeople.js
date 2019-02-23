import React, { Component } from 'react';

import { List, Avatar } from 'antd';

import john from './assets/john.jpg'
import anna from './assets/anna.png'

import {
  Link
} from 'react-router-dom'

const data = [
  {
    name: 'John',
    about: 'person one',
    component: john
  },
  {
    name: 'Anna',
    about: 'person two',
    component: anna
  },
];

class ListPeople extends Component {

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        style={{marginLeft: 20, textAlign: 'left'}}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={50} src={item.component} />}
              title={<Link to={item.name.toLowerCase()}>{item.name}</Link>}
              description={item.about}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default ListPeople;
