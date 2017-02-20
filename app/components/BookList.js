import React from 'react';
export default class BookList extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        </div>
                        <div className="panel-body">
                            <a href="#!/detail/{{book._id}}"><img className="book-img"  alt=""/></a>
                        </div>
                        <div className="panel-footer">
                            价格:
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}