import React, { Component } from 'react';

class ReleaseRequests extends Component {
    constructor() {
        super();
        this.state = { transactions: [] };
    }

    componentDidMount() {
        this.getTransactions();
    }

    getTransactions() {
        // TODO: real function
        this.setState({
            transactions: [
                {
                    id: 123456,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hangar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port: 'Antwerp, BE',
                    freight: '0',
                    manifest: true
                },
                {
                    id: 123457,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hangar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port: 'Antwerp, BE',
                    freight: '0',
                    manifest: true
                },
                {
                    id: 123458,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hangar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port: 'Antwerp, BE',
                    freight: '1.000',
                    manifest: false
                },
                {
                    id: 123459,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hangar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port: 'Antwerp, BE',
                    freight: '0',
                    manifest: true
                },
                {
                    id: 123460,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hangar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port: 'Antwerp, BE',
                    freight: '0',
                    manifest: true
                },
                {
                    id: 123461,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hangar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port: 'Antwerp, BE',
                    freight: '0',
                    manifest: true
                },
                {
                    id: 123462,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hangar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port: 'Antwerp, BE',
                    freight: '1.000',
                    manifest: false
                },
                {
                    id: 123463,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hangar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port: 'Antwerp, BE',
                    freight: '0',
                    manifest: true
                },
                {
                    id: 123464,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hangar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port: 'Antwerp, BE',
                    freight: '1.0000',
                    manifest: false
                },
                {
                    id: 123465,
                    shipper: 'iCapps BVBA',
                    consignee: 'Hangar 26/27',
                    notify_address: 'Rijnkaai 101',
                    vessel: 'M.S. Danielle',
                    port: 'Antwerp, BE',
                    freight: '0',
                    manifest: true
                }
            ]
        });
    }

    render() {
        var transactions = this.state.transactions.map((transaction, i) => {
            if (transaction.manifest === true) {
                return (
                    <tr key={i}>
                        <td>{transaction.id}</td>
                        <td>{transaction.shipper}</td>
                        <td>{transaction.consignee}</td>
                        <td>{transaction.notify_address}</td>
                        <td>{transaction.vessel}</td>
                        <td>{transaction.port}</td>
                        <td>{transaction.freight}</td>
                        <td><i className="fa fa-2x fa-check"></i></td>
                    </tr>
                );
            } else {
                return (
                    <tr key={i} className="no-manifest">
                        <td>{transaction.id}</td>
                        <td>{transaction.shipper}</td>
                        <td>{transaction.consignee}</td>
                        <td>{transaction.notify_address}</td>
                        <td>{transaction.vessel}</td>
                        <td>{transaction.port}</td>
                        <td>{transaction.freight}</td>
                        <td><i className="fa fa-2x fa-times"></i></td>
                    </tr>
                );
            }
        });

        return (
            <div>
                <div id="page-title">
                    <h2>Release requests</h2>
                    <p>All your release requests are available below. These transactions are saved into a private
                        blockhain. </p>
                </div>

                <div className="example-box-wrapper ">
                    <table className="table">
                        <thead>
                        <tr style={{ cursor: 'pointer' }}>
                            <th>B/L No.<i className="fa fa-filter"></i></th>
                            <th>Shipper<i className="fa fa-filter"></i></th>
                            <th>Consignee<i className="fa fa-filter"></i></th>
                            <th>Notify address<i className="fa fa-filter"></i></th>
                            <th>Vessel<i className="fa fa-filter"></i></th>
                            <th>Port<i className="fa fa-filter"></i></th>
                            <th>Freight payable</th>
                            <th>Manifest OK?</th>
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

export default ReleaseRequests;