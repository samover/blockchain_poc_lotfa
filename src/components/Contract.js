import React, { Component } from 'react';

class Contract extends Component {
    constructor() {
        super();
        this.state = { id: '', history: [], damage: [] }
    }

    componentDidMount() {
        this.setState({ id: this.props.params.id });
        this.setData();
    }

    setData() {
        this.setState({
                history: [
                    {
                        date: '01/12/2016 - 12:44',
                        action: 'Created bill of lading',
                        performed_by: 'Pieter Smoeyerson',
                        fnction: 'Shipping agent'
                    },
                    {
                        date: '01/12/2016 - 14:09',
                        action: 'Approved bill of lading',
                        performed_by: 'Tine Lowrider',
                        fnction: 'Shipper'
                    },
                    {
                        date: '01/12/2016 - 16:51',
                        action: 'Signed bill of lading at departure of the vessel',
                        performed_by: 'Maarten Awkward',
                        fnction: 'Master'
                    },
                    {
                        date: '02/12/2016 - 11:12',
                        action: 'Transfer ownerschip to Hangar 26/27 NV',
                        performed_by: 'Dylan Kwylbreghs',
                        fnction: 'Shipper'
                    },
                    {
                        date: '02/12/2016 - 15:21',
                        action: 'Requested cargo release',
                        performed_by: 'Samuel Overloop',
                        fnction: 'Consignee'
                    },
                ],
                damage: [
                    {
                        date: '01/12/2016 - 12:44',
                        description: 'Container damaged at departure',
                        remarked: 'Pieter Smoeyerson',
                        fnction: 'Shipping agent'
                    },
                    {
                        date: '01/12/2016 - 14:44',
                        description: 'Contents of container damaged',
                        remarked: 'Maarten Awkward',
                        fnction: 'Consignee'
                    }
                ]
            }
        )
    }

    render() {
        var history = this.state.history.map((hist, i) => {
            return (
                <tr key={i}>
                    <td>{hist.date}</td>
                    <td>{hist.action}</td>
                    <td>{hist.performed_by}</td>
                    <td>{hist.fnction}</td>
                </tr>
            );
        });

        var damage = this.state.damage.map((dmg, i) => {
            return (
                <tr key={i}>
                    <td>{dmg.date}</td>
                    <td>{dmg.description}</td>
                    <td>{dmg.remarked}</td>
                    <td>{dmg.fnction}</td>
                </tr>
            );
        });

        return (
            <div className="bill-container">
                <div id="page-title">
                    <div className="container">
                        <h2><u>Bill of lading</u> > B/L {this.state.id}</h2>
                    </div>
                </div>

                <div className="bill-top-header">
                    <div className="col-xs-12 container">
                        <div className="col-xs-6">
                            <p className="row bill-top-row">
                                <i className="fa fa-user col-xs-1"></i>
                                <span className="col-xs-4">Shipper</span>
                                <span className="col-xs-6">iCapps BVBA</span>
                            </p>
                            <p className="row bill-top-row">
                                <i className="fa fa-user col-xs-1"></i>
                                <span className="col-xs-4">Consignee</span>
                                <span className="col-xs-6">Hangar 26/27 NV</span>
                            </p>
                            <p className="row bill-top-row">
                                <i className="fa fa-user col-xs-1"></i>
                                <span className="col-xs-4">Notify address</span>
                                <span className="col-xs-6">Kronenburg Ltd</span>
                            </p>
                        </div>
                        <div className="col-xs-6">
                            <p className="row bill-top-row">
                                <i className="fa fa-ship col-xs-1"></i>
                                <span className="col-xs-4">Vessel</span>
                                <span className="col-xs-6">M.S. Danielle</span>
                            </p>
                            <p className="row bill-top-row">
                                <i className="fa fa-map-marker col-xs-1"></i>
                                <span className="col-xs-4">Port of loading</span>
                                <span className="col-xs-6">Antwerp, BE</span>
                            </p>
                            <p className="row bill-top-row">
                                <i className="fa fa-map-marker col-xs-1"></i>
                                <span className="col-xs-4">Port of discharge</span>
                                <span className="col-xs-6">Shanghai, CN</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bill-top-subheader">
                    <div className="col-xs-4">
                        <button className="btn btn-blue-alt col-xs-12">Report damage</button>
                    </div>
                    <div className="col-xs-4">
                        <button className="btn btn-blue-alt col-xs-12">Transfer ownership</button>
                    </div>
                    <div className="col-xs-4">
                        <button className="btn btn-blue-alt col-xs-12">Request cargo release</button>
                    </div>
                </div>


                <div className="bill-top-subheader">
                    <div className="full-width margin-md-bottom">
                        <span className="col-xs-3"><b>Description of goods</b></span>
                        <span className="col-xs-8">Container with lots of stuff here. And lots of stuff there. All very fragile. Container with lots of stuff here. And lots of stuff there. All very fragile. Container with lots of stuff here. And lots of stuff there. All very fragile. </span>
                    </div>
                    <div className="full-width margin-md-bottom">
                        <span className="col-xs-3"><b>Gross weight</b></span>
                        <span className="col-xs-8">10 tons</span>
                    </div>
                    <div className="full-width margin-md-bottom">
                        <span className="col-xs-3"><b>Freight payable</b></span>
                        <span className="col-xs-8">€ 1.000</span>
                    </div>
                    <div className="full-width margin-md-bottom">
                        <span className="col-xs-3"><b>Freight paid in advance</b></span>
                        <span className="col-xs-8">€ 10.000</span>
                    </div>
                </div>

                <h3>History</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Date & Time</th>
                        <th>Action</th>
                        <th>Performed by</th>
                        <th>Function</th>
                    </tr>
                    </thead>
                    <tbody>
                    {history}
                    </tbody>
                </table>

                <h3>Damage</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Date & Time</th>
                        <th>Description of the damage</th>
                        <th>Remarked by</th>
                        <th>Function</th>
                    </tr>
                    </thead>
                    <tbody>
                    {damage}
                    </tbody>
                </table>


            </div>
        );
    }
}

export default Contract;