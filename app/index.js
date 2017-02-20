import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');
import {Router,Route,hashHistory} from 'react-router';
import {App,BookList,BookAdd,BookDetail} from './components';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" components={App}>
            <Route path="list" components={BookList}/>
            <Route path="add" components={BookAdd}/>
            <Route path="detail/:_id" components={BookDetail}/>
        </Route>
    </Router>
    ,document.querySelector('#app'));