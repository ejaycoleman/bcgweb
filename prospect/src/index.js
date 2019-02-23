import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import John from './John';
import Anna from './Anna'

import './App.css';

import { Row, Col, Icon } from 'antd';


import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



class AppRouter extends React.Component {

  render() {
    return (
      <Router>
      	<div>
      		{/* <Route path={`/john`} component={John}/> */}
	        <Row style={{height: 40, marginLeft: 10, marginRight: 10}}>
	          <Col span={2}><Icon type="bars" style={{position: 'absolute', fontSize: 20, marginTop: 10, color: '#91268F'}} /></Col>
	          <Col span={6} />
	          <Col span={8} style={{paddingTop: 0, textAlign: 'center'}}><span style={{color: '#91268F', fontWeight: 600, fontSize: 25, }}>Prospect</span></Col>
	        </Row>
	        
	        <div className="App">
	       	 <Route path="/john" component={John}/>
	       	 <Route path="/anna" component={Anna}/>
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
