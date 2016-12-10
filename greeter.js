var greeterSource = 'contract mortal { address owner; function mortal() { owner = msg.sender;  } function kill() { if (msg.sender == owner) selfdestruct(owner);  }  } contract greeter is mortal { string greeting; function greeter(string _greeting) public { greeting = _greeting;  } function greet() constant returns (string) { return greeting;  }  }'

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var greeterCompiled = web3.eth.compile.solidity(greeterSource);
var _greeting = "Hello World!"
var greeterContract = web3.eth.contract(greeterCompiled.greeter.info.abiDefinition);
var contractData = greeterContract.getData({ data: greeterCompiled.greeter.info.abiDefinition });
var gasEstimate = web3.eth.estimateGas({data: contractData});
console.log('@@@@@@@@@@@@@@@@@@@@@');
console.log('gasEstimate', JSON.stringify(gasEstimate, null, 2));
console.log('@@@@@@@@@@@@@@@@@@@@@');

greeterContract.new(_greeting,{from:web3.eth.accounts[0], data: greeterCompiled.greeter.code, gas: gasEstimate });
    //if (e) console.error(e)
    //if(!e) {
        //if(!contract.address) {
            //console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");


        //} else {
            //console.log("Contract mined! Address: " + contract.address);
            //console.log(contract);
        //}
    //}
//})

