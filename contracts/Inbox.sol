pragma solidity ^0.4.17;

contract Inbox {
string public message;

function Inbox(string initialMessage) public {
message = initialMessage;
  }

function setMessage (string newMessage) public {
message = newMessage;
  }
}




https://rinkeby.infura.io/v3/355cf63727a547308fe1b85136a0dee1
