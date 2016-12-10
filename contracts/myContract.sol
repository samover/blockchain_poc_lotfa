pragma solidity ^0.4.4;

contract MyContract {
    address owner;
    address receiver;
    string portOfArrival;
    string portOfDeparture;

    mapping (address => uint) public coinBalanceOf;

    event BLInitator(address sender, address receiver, uint amount);

    function MyContract() {
        owner = msg.sender;
    }

    function addBillOfLadingData(string portOfArrival, string portOfDeparture) {
        portOfArrival = portOfArrival;
        portOfDeparture = portOfDeparture;
    }

    function sendBillOfLading(address receiver) {
        return
    }

    function sendCoin(address receiver, uint amount) returns(bool sufficient) {
        if (coinBalanceOf[msg.sender] < amount) return false;
        coinBalanceOf[msg.sender] -= amount;
        coinBalanceOf[receiver] += amount;
        CoinTransfer(msg.sender, receiver, amount);
        return true;
    }

    function kill() {
        if (msg.sender == owner) selfdestruct(owner);
    }
}
