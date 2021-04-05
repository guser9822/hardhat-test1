import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
//const ALCHEMY_API_KEY = "KEY";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
//const ROPSTEN_PRIVATE_KEY = "YOUR ROPSTEN PRIVATE KEY";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.7.3",
//   // networks: {
//   //   ropsten: {
//   //     url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
//   //     accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
//   //   }
//   // }
// };

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.7.3"
};

export default config;