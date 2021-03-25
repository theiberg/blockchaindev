conf = require('./config.json');

const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = conf.infuraKey;
const mnemonic = conf.mnemonic;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      websockets: true,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  }
};