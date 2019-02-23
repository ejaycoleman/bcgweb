import React, { Component } from 'react';

import { List, Avatar } from 'antd';

import john from './assets/john.jpg'
import anna from './assets/anna.png'
import pp3 from './assets/pp3.jpg'
import pp4 from './assets/pp4.jpg'
import pp5 from './assets/pp5.jpg'
import pp6 from './assets/pp6.jpg'
import pp7 from './assets/pp7.jpg'
import pp8 from './assets/pp8.jpg'
import pp9 from './assets/pp9.jpg'
import pp10 from './assets/pp10.jpg'

import {
  Link
} from 'react-router-dom'

const data = [
  {
    name: 'John',
    about: 'Aspiring guitar teacher',
    component: john
  },
  {
    name: 'Anna',
    about: "I'll make you a website",
    component: anna
  },
  {
    name: 'Daniela',
    about: "I'm good at writing CVs!",
    component: pp3
  },
  {
    name: 'Gabriel',
    about: "Painter in-the-making",
    component: pp4
  },
  {
    name: 'Jesse',
    about: "Photographer",
    component: pp5
  },
  {
    name: 'Chris',
    about: "Aspiring investment banking analyst",
    component: pp6
  },
  {
    name: 'Louisa',
    about: "Backend developer",
    component: pp7
  },
  {
    name: 'Matilda',
    about: "Persuing an accountancy career",
    component: pp8
  },
  {
    name: 'Oliver',
    about: "Web designer",
    component: pp9
  },
  {
    name: 'Erik',
    about: "Aspiring social worker",
    component: pp10
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
              title={item.name === 'John' || item.name === 'Anna' ? <Link to={item.name.toLowerCase()}>{item.name}</Link> : item.name}
              description={item.about}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default ListPeople;
