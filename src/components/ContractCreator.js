import React, {Component} from 'react';

class ContractCreator extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <div id="page-title">
                    <h2>New bill of lading</h2>
                    <p>Create a new bill of lading</p>
                </div>
                <div className="row">
                    <div className="panel col-md-5">
                        <div className="panel-body">
                            <h3 className="title-hero">
                                Owners
                            </h3>
                            <div className="example-box-wrapper">
                                <form className="form-horizontal bordered-row">
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label">Shipper</label>
                                        <div className="col-sm-7">
                                            <div className="input-group">
                                                <input type="text" className="form-control"
                                                       defaultValue="iCapps BVBA"></input>
                                                <span className="input-group-addon bg-blue">
                                                <i className="glyph-icon icon-user"></i>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label">Consignee</label>
                                        <div className="col-sm-7">
                                            <div className="input-group">
                                                <input type="text" className="form-control"
                                                       defaultValue="Hangar 26/27 NV"></input>
                                                <span className="input-group-addon bg-blue">
                                                <i className="glyph-icon icon-user"></i>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label">Notify address</label>
                                        <div className="col-sm-7">

                                            <div className="input-group">
                                                <input type="text" className="form-control"
                                                       defaultValue="Kronenburg Ltd"></input>
                                                <span className="input-group-addon bg-blue">
                                                <i className="glyph-icon icon-user"></i>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="panel col-md-5 col-md-offset-1">
                        <div className="panel-body">
                            <h3 className="title-hero">
                                Vessel & ports
                            </h3>
                            <div className="example-box-wrapper">
                                <form className="form-horizontal bordered-row">
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label">Vessel</label>
                                        <div className="col-sm-7">
                                            <div className="input-group">
                                                <input type="text" className="form-control"
                                                       defaultValue="M.S. Danielle"></input>
                                                <span className="input-group-addon bg-blue">
                                                <i className="glyph-icon icon-user"></i>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label">Port of loading</label>
                                        <div className="col-sm-7">
                                            <div className="input-group">
                                                <input type="text" className="form-control"
                                                       defaultValue="Antwerp, BE"></input>
                                                <span className="input-group-addon bg-blue">
                                                <i className="glyph-icon icon-user"></i>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label">Port of discharge</label>
                                        <div className="col-sm-7">

                                            <div className="input-group">
                                                <input type="text" className="form-control"
                                                       defaultValue="Shanghai, CN"></input>
                                                <span className="input-group-addon bg-blue">
                                                <i className="glyph-icon icon-user"></i>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="panel col-md-5">
                        <div className="panel-body">
                            <h3 className="title-hero">
                                Metrics
                            </h3>
                            <div className="example-box-wrapper">
                                <form className="form-horizontal bordered-row">
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label">Gross weight</label>
                                        <div className="col-sm-7">
                                            <div className="input-group">
                                                <input type="text" className="form-control"
                                                       defaultValue="10.1"></input>
                                                <span className="input-group-addon bg-blue">
                                                tons
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label">Freight payable</label>
                                        <div className="col-sm-7">
                                            <div className="input-group">
                                                <input type="text" className="form-control"
                                                       defaultValue="1.000"></input>
                                                <span className="input-group-addon bg-blue">
                                                EUR
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label">Freight paid in advance</label>
                                        <div className="col-sm-7">

                                            <div className="input-group">
                                                <input type="text" className="form-control"
                                                       defaultValue="10.000"></input>
                                                <span className="input-group-addon bg-blue">
                                                EUR
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="panel col-md-5 col-md-offset-1">
                        <div className="panel-body">
                            <h3 className="title-hero">
                                Vessel & ports
                            </h3>
                            <div className="example-box-wrapper">
                                <div className="form-group">
                                            <textarea name="" id="" className="form-control textarea-md">
                                                Container with lots of stuff here. And lots of stuff there. All very fragile. Container with lots of stuff here. And lots of stuff there. All very fragile. Container with lots of stuff here. And lots of stuff there. All very fragile.
                                            </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="panel col-md-11">
                        <div className="panel-body">
                            <h3 className="title-hero">
                                Conditions of Carriage
                            </h3>
                            <div className="example-box-wrapper">
                                <form className="form-horizontal bordered-row">

                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">If</label>
                                                <div className="col-sm-10">
                                                    <select className="form-control">
                                                        <option>The cargo arrives later than</option>
                                                        <option>The cargo arrives later than</option>
                                                        <option>The cargo arrives later than</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">And if</label>
                                                <div className="col-sm-10">
                                                    <select className="form-control">
                                                        <option>The temperature is lower than</option>
                                                        <option>The temperature is lower than</option>
                                                        <option>The temperature is lower than</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">

                                            <div className="form-group">
                                                <label className="col-sm-4 col-sm-offset-1 control-label">Maximum
                                                    days</label>
                                                <div className="col-sm-7">

                                                    <div className="input-group">
                                                        <input type="text" className="form-control"
                                                               defaultValue="2"></input>
                                                        <span className="input-group-addon bg-blue">
                                                days
                                            </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-sm-4 col-sm-offset-1 control-label">Maximum
                                                    temperature</label>
                                                <div className="col-sm-7">

                                                    <div className="input-group">
                                                        <input type="text" className="form-control"
                                                               defaultValue="- 10"></input>
                                                        <span className="input-group-addon bg-blue">
                                                 ºC
                                            </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <button className="btn btn-primary col-sm-offset-1">
                                            <i className="glyph-icon icon-plus"></i> Add condition
                                        </button>
                                    </div>

                                    <br/>
                                    <br/>
                                    <br/>

                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Then</label>
                                                <div className="col-sm-10">
                                                    <select className="form-control">
                                                        <option>Pay the amount</option>
                                                        <option>Pay the amount</option>
                                                        <option>Pay the amount</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">To</label>
                                                <div className="col-sm-10">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control"
                                                               defaultValue="iCapps BVBA"></input>
                                                        <span className="input-group-addon bg-blue">
                                                <i className="glyph-icon icon-user"></i>
                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">

                                            <div className="form-group">
                                                <label className="col-sm-4 col-sm-offset-1  control-label">Amount</label>
                                                <div className="col-sm-7">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control"
                                                               defaultValue="1.000"></input>
                                                        <span className="input-group-addon bg-blue">
                                                EUR
                                            </span>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="row">
                                        <button className="btn btn-primary col-sm-offset-1">
                                            <i className="glyph-icon icon-plus"></i> Add result
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="panel col-md-11">
                        <div className="panel-body">
                            <h3 className="title-hero">
                                Options
                            </h3>
                            <div className="example-box-wrapper col-md-3 col-md-offset-9">
                                <a href className="btn btn-lg btn-default mrg15R" title="">Save draft</a>
                                <a href className="btn btn-lg btn-primary" title="">Send</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContractCreator;