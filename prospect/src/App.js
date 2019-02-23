import React, { Component } from 'react';
import './App.css';

import { Menu } from 'antd';
import User from './User'


class App extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div className="App">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <span style={{color: '#91268F', fontWeight: 500, fontSize: 20}}>Prospect</span>
        </Menu>
        <User />
      </div>
    );
  }
}

export default App;
