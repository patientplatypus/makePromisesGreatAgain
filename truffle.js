module.exports = {
  networks: {
    development: {
      host: "34.211.140.66",
      port: 8545, // This is the Ganache default port. You can change it to the conventional 8545 if your network runs on 8545
      network_id: "*", // Match any network id. You may need to replace * with your network Id
      from: "0xc3530389304bfebf47bbecd3bd3a2aca1149237b", // Add your unlocked account within the double quotes
      gas: 2100000
    }
  }
};
