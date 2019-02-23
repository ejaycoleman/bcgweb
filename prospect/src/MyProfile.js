import React, { Component } from 'react';

import { List, Avatar, Badge } from 'antd'

const data = [
  'Music teaching',
  'Web technology',
  'Finance'
];

class MyProfile extends Component {

  render() {
    return (
      <div style={{paddingBottom: 50}}>
        <div style={{textAlign: 'center', marginLeft: '5%', marginRight: '5%', paddingTop: 20}}>
          <h2>
            My Profile
          </h2>
        </div>
        <div style={{paddingTop: 10}}>
          <Avatar size={150} icon="user" />
          <h2 style={{paddingTop: 10}}>Derek Williams</h2>
          <h4 style={{marginTop: -10}}>Senior Software Developer <Badge count={'Mentor'} style={{zIndex: 0, backgroundColor: '#91268F', marginTop: -2 }}/></h4>
        </div>
        <div style={{textAlign: 'left', marginLeft: '5%', marginTop: 1, marginRight: '5%'}}>
          
          <h4 style={{paddingTop: 20}}>Hi, I'm a mentor. I aim to provide advice for any career choice yoou have. Please don't hesitate to contact me!</h4>
          <h3 style={{paddingTop: 20}}>Interests</h3>
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

export default MyProfile;
