require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


module.exports = {
  solidity: "0.8.17",
  networks: {
    "mantle": {
      url: "https://rpc.testnet.mantle.xyz/",
      accounts: [process.env.PRIV_KEY] // Uses the private key from the .env file
    }
},
};
