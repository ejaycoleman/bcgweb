import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import John from './John';
import Anna from './Anna'
import ListPeople from './ListPeople'
import Feed from './Feed'
import MyProfile from './MyProfile'
import Messages from './Messages'

import './App.css';

import { Row, Col, Icon, Menu, Badge } from 'antd';

import * as serviceWorker from './serviceWorker';

import Sidebar from "react-sidebar";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const customHistory = createBrowserHistory()


class AppRouter extends React.Component {
	state = {
		expanded: false,
		isBackButton: true
	}

	toggleLeft = () => {
		this.setState({expanded: !this.state.expanded})
		console.log("expanded")
	}

	goBack = () => {
		customHistory.goBack()
		console.log("aewjh")
	}

  render() {
    return (
      <Router history={customHistory}>
      	<div>

      		{/* <Route path={`/john`} component={John}/> */}
      		<div style={{position: 'fixed', height: 50, width: '100%', backgroundColor: '#fff', zIndex: 10}}>
      			<Row style={{height: 50, paddingTop: 5, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, borderBottom: '.5px solid grey'}}>
		        	
		          {/* <Col span={2}></Col> */}
		          <Col span={8} />
		          <Col span={8} style={{paddingTop: 0, textAlign: 'center'}}><span style={{color: '#91268F', fontWeight: 600, fontSize: 25, }}>Prospect</span></Col>
		        </Row>
      		</div>
	        

	        {/* {this.state.expanded && ( */}
	        {/* 	<Menu */}
			      {/*   onClick={this.handleClick} */}
			      {/*   style={{ width: 256, position: 'absolute', zIndex: 10, height: '96%' }} */}
			      {/*   defaultSelectedKeys={['1']} */}
			      {/*   defaultOpenKeys={['sub1']} */}
			      {/*   mode="inline" */}
			      {/* > */}
			      {/*    */}
			      {/* </Menu> */}
	        {/* )} */}
	        <Sidebar
		        	sidebar={
			        	<div style={{flex: 1, flexDirection: 'column', fontSize: 20, paddingTop: 50}}>
			        		<div key="messages" style={{paddingTop: 20}}><Link onClick={() => this.toggleLeft()} to={"messages"} style={{color: '#91268F'}}><Icon type="message" style={{paddingRight: 10}} /><span>Messages</span></Link><Badge count={1} style={{ backgroundColor: '#52c41a', marginTop: -20 }} /></div>
			        		<div key="feed" style={{paddingTop: 20}}><Link onClick={() => this.toggleLeft()} to={"/"} style={{color: '#91268F'}}><Icon type="align-left" style={{paddingRight: 10}} /><span>Feed</span></Link></div>
					        <div key="connect" style={{paddingTop: 20}} ><Link onClick={() => this.toggleLeft()} to={"list"} style={{color: '#91268F'}}><Icon type="user-add" style={{paddingRight: 10}} /><span>Connect</span></Link></div>
					        <div key="myprofile" style={{paddingTop: 20}}><Link onClick={() => this.toggleLeft()} to={"profile"} style={{color: '#91268F'}}><Icon type="idcard" style={{paddingRight: 10}} /><span>My Profile</span></Link></div>
			        	</div>
		        	}
		        open={this.state.expanded}
		        onSetOpen={this.toggleLeft}
		        styles={{ sidebar: { background: "white",height: '100%', paddingRight: 20, paddingLeft: 20, width: '60%', position: 'fixed' } }}
		      >
		        {/* <button onClick={() => this.onSetSidebarOpen(true)}> */}
		        <div>
		        	{this.state.isBackButton? 
		        		<Icon onClick={() => this.goBack()} type="left" style={{zIndex: 10, paddingLeft: 10, position: 'fixed', fontSize: 20, marginTop: 15, color: '#91268F'}} />
		        		:
		        		<Icon onClick={() => this.toggleLeft()} type="bars" style={{zIndex: 10, paddingLeft: 10, position: 'fixed', fontSize: 20, marginTop: 15, color: '#91268F'}} />
		        	}
		        </div>
		          
		        {/* </button> */}
		      </Sidebar>

	        
	        
	        <div className="App" style={{paddingTop: 50}}>
	       	 <Route path="/john" component={John}/>
	       	 <Route path="/anna" component={Anna}/>
	       	 <Route path="/list" component={ListPeople}/>
	       	 <Route path="/profile" component={MyProfile}/>
	       	 <Route path="/messages" component={Messages}/>
	       	 <Route path="/" exact component={Feed}/>
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
