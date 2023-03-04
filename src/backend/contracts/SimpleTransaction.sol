// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleTransaction {
    function deposit() public payable {
        // TODO do something then
        require(msg.value > 0);
    }

    function Retrieve(address _AccountAddress) public view returns (uint256) {
        return _AccountAddress.balance;
    }

    function CheckAccount(
        address _ReceiveAccount
    ) public view returns (uint256) {
        return _ReceiveAccount.balance;
    }
}
