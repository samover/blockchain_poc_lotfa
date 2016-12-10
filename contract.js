/**
 * app.js
 * .
 *
 * Created by samover on 09/12/2016.
 * Copyright (c) 2016 iCapps. All rights reserved.
 */

'use strict';

var fs = require('fs');
var path = require('path');

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
if (!web3.isConnected()) {
    console.info('Please start your blockchain');
    process.exit(1);
}

console.info('Connected...');

function init() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, 'contracts/container.sol'), 'utf-8', (err, result) => {
            var contractSource = result.replace(/\n/g, '');
            var contractCompiled = web3.eth.compile.solidity(contractSource);
            var myContract = web3.eth.contract(contractCompiled.Container.info.abiDefinition);
            var contractData = myContract.getData({ data: contractCompiled.Container.info.abiDefinition });
            var gasEstimate = web3.eth.estimateGas({data: contractData});

            var gasPrice = web3.eth.gasPrice;
            var balance = web3.eth.getBalance(web3.eth.accounts[0]).valueOf();
            var balance2 = web3.eth.getBalance(web3.eth.accounts[1]).valueOf();
            console.log('balance: ', balance);
            console.log('balance2: ', balance2);
            console.log('gasPrice '+gasPrice.toString(10));
            console.log('gas Estimate '+gasEstimate);
            var total = gasEstimate*gasPrice;
            var supply = 2000;
            var contractInstance = myContract.new(supply, { from: web3.eth.accounts[0], data: contractCompiled.Container.code, gas: gasEstimate + 300000 }, function (e, contract) {
                if (e) {
                    console.error(e);
                    reject(e);
                }
                if (!e) {
                    if (!contract.address) {
                        console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
                    } else {
                        console.log("Contract mined! Address: " + contract.address);
                        resolve(contract);
                    }
                }
            });
        });
    });
}

return init()
    .then(contract => {
        //console.log(contract.whitelist);
        const test = contract.specifyLoading(web3.eth.accounts[0], 'Some stuff');
        console.log(contract.contentDescription);
    })
    .catch((err) => {
        console.error(err);
        console.info(err.stack);
    });
