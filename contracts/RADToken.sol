// contracts/RADToken.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract RADToken is ERC20 {

    constructor(uint256 initialSupply) ERC20("Radioactive", "RDT"){
        _mint(msg.sender, initialSupply);
    }

    /**
     * @dev Give a reward to the miner of the block
     */
    function mintMinerReward() public {
        _mint(block.coinbase, 1000);
    }

    /**
     * @dev After each token transfer, give a reward to the block miner
     */
//    function _beforeTokenTransfer(address from, address to, uint256 value) internal virtual override {
//        _mintMinerReward();
//        super._beforeTokenTransfer(from, to, value);
//    }
}