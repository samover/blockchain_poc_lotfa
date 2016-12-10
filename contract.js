/**
 * app.js
 * .
 *
 * Created by samover on 09/12/2016.
 * Copyright (c) 2016 iCapps. All rights reserved.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//const web3 = new Web3(new Web3.providers.HttpProvider("http://188.166.71.109:5000"));
if (!web3.isConnected()) {
    console.info('Please start your blockchain');
    process.exit(1);
}

console.info('Connected...');

function init() {
    fs.readFile(path.join(__dirname, 'contracts/myContract.sol'), 'utf-8', (err, result) => {
        const contractSource = result.replace(/\n/g, '');
        const contractCompiled = web3.eth.compile.solidity(contractSource);


        const myContract = web3.eth.contract(contractCompiled.MyContract.info.abiDefinition);

        const contractInstance = myContract.new({from: web3.eth.accounts[0]}, function (e, contract) {
            console.log('error', e);
            if (!e) {

                if (!contract.address) {
                    console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
                } else {
                    console.log("Contract mined! Address: " + contract.address);
                    console.log(contract);
                    contract.transferOwner(web3.eth.accounts[1], function (err, newOwner) {
                        console.log('new owner', err, newOwner);
                        console.log(contractInstance.getOwner() === newOwner);
                    });
                }
            }
        });


        var filter = web3.eth.filter('latest');

        filter.watch(function (error, result) {

            var block = web3.eth.getBlock(result, true);
            console.log(block.number);

            for (var index = 0; index < block.transactions.length; index++) {
                var t = block.transactions[index];
                console.log('transaction found', t.hash);
            }

        });
    });
}

return init();
