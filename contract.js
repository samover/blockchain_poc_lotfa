/**
 * app.js
 * .
 *
 * Created by samover on 09/12/2016.
 * Copyright (c) 2016 iCapps. All rights reserved.
 */

'use strict';

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//const web3 = new Web3(new Web3.providers.HttpProvider("http://188.166.71.109:5000"));
console.log(web3.isConnected());
