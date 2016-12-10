import React, { Component } from 'react';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = { transactions: [] }
    }

    componentDidMount() {
        this.getTransactions();
    }

    getTransactions() {
        // TODO: real function
        this.setState({
            transactions: [
                {
                    block: 'jfsdfkjhsdfhsdkjf212#edesf',
                    description: 'A shipment was received on 15/10/2016 at 03:20:21'
                },
                {
                    block: 'arze2135#21edzae#edesf',
                    description: 'A shipment was sent on 15/10/2016 at 03:20:30'
                },
                {
                    block: '823jklf#lkfjsdlkgjdfgkljdf',
                    description: 'A shipment was received on 15/10/2016 at 03:20:43'
                }
            ]
        });
    }

    render() {
        var transactions = this.state.transactions.map((transaction, i) => {
            return (
                <tr key={i}>
                    <td>{transaction.block}</td>
                    <td>{transaction.description}</td>
                </tr>
            );
        });

        return (
            <div>
                <div id="page-title">
                    <h2>Overview</h2>
                    <p>All your transactions are available below. These transactions are saved into a private
                        blockhain. </p>
                </div>

                <div className="example-box-wrapper">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Block</th>
                            <th>Description</th>
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