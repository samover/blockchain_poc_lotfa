import React, {Component} from 'react';
import { Link } from 'react-router';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {transactions: []};
    }

    componentDidMount() {
        this.getTransactions();
    }

    goToContract(transaction) {
        this.props.history.push('contracts/view/' + transaction.id);
    }

    getTransactions() {
        // TODO: real function
        this.setState({
            transactions: [
                {
                    id: 123456,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hanagar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port_of_loading: 'Antwerp, BE',
                    port_of_discharge: 'Shanghai, CN'
                },
                {
                    id: 123456,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hanagar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port_of_loading: 'Antwerp, BE',
                    port_of_discharge: 'Shanghai, CN'
                },
                {
                    id: 123456,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hanagar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port_of_loading: 'Antwerp, BE',
                    port_of_discharge: 'Shanghai, CN'
                },
                {
                    id: 123456,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hanagar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port_of_loading: 'Antwerp, BE',
                    port_of_discharge: 'Shanghai, CN'
                },
                {
                    id: 123456,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hanagar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port_of_loading: 'Antwerp, BE',
                    port_of_discharge: 'Shanghai, CN'
                },
                {
                    id: 123456,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hanagar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port_of_loading: 'Antwerp, BE',
                    port_of_discharge: 'Shanghai, CN'
                },
                {
                    id: 123456,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hanagar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port_of_loading: 'Antwerp, BE',
                    port_of_discharge: 'Shanghai, CN'
                },
                {
                    id: 123456,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hanagar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port_of_loading: 'Antwerp, BE',
                    port_of_discharge: 'Shanghai, CN'
                },
                {
                    id: 123456,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hanagar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port_of_loading: 'Antwerp, BE',
                    port_of_discharge: 'Shanghai, CN'
                },
                {
                    id: 123456,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hanagar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port_of_loading: 'Antwerp, BE',
                    port_of_discharge: 'Shanghai, CN'
                },
                {
                    id: 123456,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hanagar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port_of_loading: 'Antwerp, BE',
                    port_of_discharge: 'Shanghai, CN'
                }
            ]
        });
    }

    render() {
        var transactions = this.state.transactions.map((transaction, i) => {
            return (
                <tr key={i} onClick={this.goToContract.bind(this, transaction)} style={{cursor: 'pointer'}}>
                    <td>{transaction.id + i}</td>
                    <td>{transaction.shipper}</td>
                    <td>{transaction.consignee}</td>
                    <td>{transaction.notify_address}</td>
                    <td>{transaction.vessel}</td>
                    <td>{transaction.port_of_loading}</td>
                    <td>{transaction.port_of_discharge}</td>
                    <td><i className="fa fa-pencil"></i></td>
                </tr>
            );
        });

        return (
            <div>
                <div className="row">

                    <div className="example-box-wrapper col-md-2 col-md-offset-10">
                        <Link to="/contracts/create">
                            <span className="btn btn-lg btn-primary right" title="">Create</span>
                        </Link>
                    </div>
                </div>
                <div id="page-title">
                    <h2>Overview bills of lading</h2>
                    <p>All your transactions are available below. These transactions are saved into a private
                        blockhain. </p>
                </div>

                <div className="example-box-wrapper">
                    <table className="table table-hover">
                        <thead>
                        <tr style={{cursor: 'pointer'}}>
                            <th>B/L No.<i className="fa fa-filter"></i></th>
                            <th>Shipper<i className="fa fa-filter"></i></th>
                            <th>Consignee<i className="fa fa-filter"></i></th>
                            <th>Notify address<i className="fa fa-filter"></i></th>
                            <th>Vessel<i className="fa fa-filter"></i></th>
                            <th>Port of loading<i className="fa fa-filter"></i></th>
                            <th>Port of discharge<i className="fa fa-filter"></i></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {transactions}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Dashboard;