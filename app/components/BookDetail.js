import React from 'react';
export default class BookDetail extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="text-center">
                                书名: <input type="text" className="form-control" />
                                价格: <input type="text" className="form-control" />
                            </h3>
                        </div>
                        <div className="panel-body">
                            <img className="book-img"  alt=""/>
                                <input  type="text" className="form-control" />
                        </div>
                        <div className="panel-footer">
                            <button className="btn btn-warning">编辑</button>
                            <button className="btn btn-danger">删除</button>
                            <button className="btn btn-warning">确定</button>
                            <button className="btn btn-danger">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}