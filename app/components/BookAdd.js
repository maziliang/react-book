import React from 'react';
export default class BookAdd extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <form className="form-horizontal" role="form">
                        <div className="form-group">
                            <label className="control-label col-md-1">书名</label>
                            <div className="col-md-11">
                                <input  type="text" className="form-control" id="name" name="name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-1">封面</label>
                            <div className="col-md-11">
                                <input   type="text" className="form-control" id="src" name="src"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-1">价格</label>
                            <div className="col-md-11">
                                <input   type="text" className="form-control" id="price" name="price"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-offset-1 col-md-11">
                                <button type="submit" className="btn btn-primary">增加</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}