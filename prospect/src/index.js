import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import John from './John';
import Anna from './Anna'
import ListPeople from './ListPeople'

import './App.css';

import { Row, Col, Icon, Menu } from 'antd';

import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class AppRouter extends React.Component {
	state = {
		expanded: false
	}

	toggleLeft = () => {
		this.setState({expanded: !this.state.expanded})
		console.log("expanded")
	}

  render() {
    return (
      <Router>
      	<div>
      		{/* <Route path={`/john`} component={John}/> */}
	        <Row style={{height: 40, marginLeft: 10, marginRight: 10}}>
	          <Col span={2}><Icon onClick={() => this.toggleLeft()} type="bars" style={{position: 'absolute', fontSize: 20, marginTop: 10, color: '#91268F'}} /></Col>
	          <Col span={6} />
	          <Col span={8} style={{paddingTop: 0, textAlign: 'center'}}><span style={{color: '#91268F', fontWeight: 600, fontSize: 25, }}>Prospect</span></Col>
	        </Row>

	        {this.state.expanded && (
	        	<Menu
			        onClick={this.handleClick}
			        style={{ width: 256, position: 'absolute', zIndex: 10, height: '96%' }}
			        defaultSelectedKeys={['1']}
			        defaultOpenKeys={['sub1']}
			        mode="inline"
			      >
			        <Menu.Item key="mentees" ><span><Icon type="message" theme="filled" /><span>Mentees</span></span></Menu.Item>
			        <Menu.Item key="connect" ><span><Icon type="user-add" /><span>Connect</span></span></Menu.Item>
			        <Menu.Item key="myprofile" ><span><Icon type="idcard" theme="filled" /><span>My Profile</span></span></Menu.Item>
			      </Menu>
	        )}
	        
	        <div className="App">
	       	 <Route path="/john" component={John}/>
	       	 <Route path="/anna" component={Anna}/>
	       	 <Route path="/list" component={ListPeople}/>
	       	</div>
      	</div>
 			</Router>
    );
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
