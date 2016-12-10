pragma solidity ^0.4.4;

contract MyContract {
    address owner;

    function MyContract(uint a, uint b) {
        owner = msg.sender;
    }

    function getOwner() returns (address) {
        return owner;
    }
}
