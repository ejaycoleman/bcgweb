import React, { Component } from 'react';

import { List, Avatar, Icon, Row, Col } from 'antd';

import pp3 from './assets/pp3.jpg'
import pp4 from './assets/pp4.jpg'
import pp5 from './assets/pp5.jpg'

const listData = [
  {href: 'http://ant.design',
    avatar: pp3,
    name: 'Daniela',
    description: 'Thoroughly enjoyed teaching the local high school how to play guitar!',
    img: 'https://images.pexels.com/photos/225230/pexels-photo-225230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {href: 'http://ant.design',
    avatar: pp4,
    name: 'Gabriel',
    description: 'Had an incredible opportunity creating a website for a well known company last week.',
    img: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {href: 'http://ant.design',
    avatar: pp5,
    name: 'Jesse',
    description: 'I was involved in a once-in-a-lifetime photoshoot for a clothing company last Monday.',
    img: 'https://images.pexels.com/photos/122400/pexels-photo-122400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
];



const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Feed extends Component {

  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"

        dataSource={listData}
        
        renderItem={item => (
          <div style={{borderBottom: '.5px solid #EEE', paddingLeft: 10, paddingTop: 10}}>
            <Row>
              <Col span={2}><Avatar src={item.avatar} /></Col>
              <Col span={4} style={{marginTop: 8}}><h4>{item.name}</h4></Col>
            </Row>
            <h3 style={{textAlign: 'left'}}>{item.description}</h3>
            <img width={272} style={{paddingBottom: 10}} alt="logo" src={item.img} />
          </div>
        )}
      />
    );
  }
}

 // <List.Item
 //            key={item.title}
 //            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
 //            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
 //          >
 //            <List.Item.Meta
 //              avatar={<Avatar src={item.avatar} />}
 //              title={<a href={item.href}>{item.title}</a>}
 //              description={item.description}
 //            />
 //            {item.content}
 //          </List.Item>

export default Feed;
