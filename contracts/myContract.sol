pragma solidity ^0.4.4;

contract MyContract {
    address owner;
    address seller;
    address shipper;
    address notifier;
    address nullifies;
    string portOfArrival;
    string portOfDeparture;
    string vessel;
    bool transferable;
    int blNumber;
    struct ContentItem {
        int quantity;
        string name;
    }
    struct Content {
        ContentItem[] contentItem;
    }
    int price;
    int timeOfArrival;

    function MyContract(uint price) {
        owner = msg.sender;
        price = price;
    }

    function getOwner() returns (address) {
        return owner;
    }

    function kill() {
        if (msg.sender == owner) selfdestruct(owner);
    }
}
