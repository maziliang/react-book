import React from 'react';
import {Link,IndexLink} from 'react-router';
export default class App extends React.Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div>
                            <ul className="nav navbar-nav">
                                <li><IndexLink activeStyle={{color:'red'}}  to="/">首页</IndexLink></li>
                                <li><Link activeStyle={{color:'red'}}  to="/list">图书列表</Link></li>
                                <li><Link  activeStyle={{color:'red'}}  to="/add">新增图书</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}