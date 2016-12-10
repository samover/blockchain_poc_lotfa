import React, { Component } from 'react';

class Dashboard extends Component {
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
                    <h2>Dashboard</h2>
                    <p>The most complete user interface framework that can be used to create stunning admin dashboards
                        and presentation websites.</p>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="dashboard-box dashboard-box-chart bg-white content-box">
                            <div className="content-wrapper">
                                <div className="header">
                                    $34,657
                                    <span>Total Earnings<b> in last</b> ten <b>quarters</b></span>
                                </div>
                                <div className="bs-label bg-green">+18%</div>
                                <div className="center-div sparkline-big-alt"></div>
                                <div className="row list-grade">
                                    <div className="col-md-2">January</div>
                                    <div className="col-md-2">February</div>
                                    <div className="col-md-2">March</div>
                                    <div className="col-md-2">April</div>
                                    <div className="col-md-2">May</div>
                                    <div className="col-md-2">June</div>
                                </div>
                            </div>
                            <div className="button-pane">
                                <div className="size-md float-left">
                                    <a href="#" title="">
                                        Financial statistics
                                    </a>
                                </div>
                                <a href="#" className="btn btn-info float-right tooltip-button" data-placement="top" title="" data-original-title="View details">
                                    <i className="glyph-icon icon-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;