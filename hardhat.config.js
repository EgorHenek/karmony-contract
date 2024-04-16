require("@nomicfoundation/hardhat-toolbox");

const { vars } = require("hardhat/config");

const PRIVATE_KEY = vars.get("PRIVATE_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: 'https://rpc.sepolia.org',
      accounts: [PRIVATE_KEY],
    },
    bsc_testnet: {
      url: 'https://data-seed-prebsc-1-s1.bnbchain.org:8545',
      accounts: [PRIVATE_KEY]
    },
    optimism_sepolia: {
      url: 'https://sepolia.optimism.io',
      accounts: [PRIVATE_KEY]
    },
    amoy: {
      url: `https://rpc-amoy.polygon.technology`,
      accounts: [PRIVATE_KEY]
    }
  }
};
