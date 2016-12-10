/**
 * server.js
 * .
 *
 * Created by samover on 10/12/2016.
 * Copyright (c) 2016 iCapps. All rights reserved.
 */

'use strict';


const TestRPC = require("ethereumjs-testrpc");

// "accounts": Array of Object's. Each object should have a balance key with a hexadecimal value. The key secretKey can also be specified, which represents the account's private key. If no secretKey, the address is auto-generated with the given balance. If specified, the key is used to determine the account's address.
// "debug": boolean - Output VM opcodes for debugging
// "logger": Object - Object, like console, that implements a log() function.
// "mnemonic": Use a specific HD wallet mnemonic to generate initial addresses.
// "port": Port number to listen on when running as a server.
// "seed": Use arbitrary data to generate the HD wallet mnemonic to be used.
// "total_accounts": number - Number of accounts to generate at startup.
// "fork": string - Same as --fork option above.
// "time": Date - Date that the first block should start. Use this feature, along with the evm_increaseTime method to test time-dependent code.
// "locked": boolean - whether or not accounts are locked by default.
// "unlocked_accounts": Array - array of addresses or address indexes specifying which accounts should be unlocked.

const first_address = "0x604a95C9165Bc95aE016a5299dd7d400dDDBEa9A";
const second_address = "0x1234567890123456789012345678901234567890";

const options = {
    mnemonic: 'per ardua ad astra',
    secure: true,
    unlocked_accounts: [first_address, second_address],
};

const server = TestRPC.server(options);

server.listen(8545, (err, blockchain) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.info('Running testrpc server on port 8545');
});
