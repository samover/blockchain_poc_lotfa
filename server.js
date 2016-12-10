/**
 * server.js
 * .
 *
 * Created by samover on 10/12/2016.
 * Copyright (c) 2016 iCapps. All rights reserved.
 */

'use strict';


const TestRPC = require("ethereumjs-testrpc");
const server = TestRPC.server();

server.listen(8545, (err, blockchain) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.info('Running testrpc server on port 8545');
});
