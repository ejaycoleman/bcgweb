import React, { Component } from 'react';

import { List, Avatar, Icon, Row, Col } from 'antd';

import anna from './assets/anna.png'

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'John',
    description: 'Had a great time doing work experience'
  });
}



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
            <img width={272} style={{paddingBottom: 10}} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
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
