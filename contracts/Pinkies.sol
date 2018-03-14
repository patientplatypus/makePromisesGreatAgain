pragma solidity ^0.4.19; //We have to specify what version of the compiler this code will use

contract Pinkies {

  // We use the struct datatype to store the voter information.

  struct pinkyHolder {
    string[] pinkyList;
  }
  mapping(address => pinkyHolder) pinkyHolders;

  struct pinky {
    address pinkyAddress; // The address of the voter
    bytes32 picBytes;
    uint tokensBought;
  }

  mapping (address => pinky) public pinkyInfo;


  bytes32[] public pinkyList;

  mapping (bytes32 => uint) public votesReceived;

  uint public tokenPrice; // Price per token

  function pricePinky(uint pricePerToken) public {
    tokenPrice = pricePerToken;
  }

  function getPricePinky() public returns (uint price) {
    return tokenPrice;
  }

  function addPinky(string pinkyHash) public returns(uint length){
    return pinkyHolders[msg.sender].pinkyList.push(pinkyHash);
  }

  function returnPinkies() constant returns(uint length) {
    return pinkyHolders[msg.sender].pinkyList.length;
  }


  /* function appendString(string appendMe) returns(uint length) {
     return myStructs[msg.sender].structArray.push(appendMe);
   }

   function getCount() constant returns(uint length) {
     return myStructs[msg.sender].structArray.length;
   }

   function getStringAtIndex(uint index) constant returns(string value) {
     return myStructs[msg.sender].structArray[index];
   } */

  function buy() payable public returns (uint) {
    uint tokensToBuy = msg.value / tokenPrice;
    pinkyInfo[msg.sender].pinkyAddress = msg.sender;
    pinkyInfo[msg.sender].tokensBought += tokensToBuy;
    return tokensToBuy;
  }
}
