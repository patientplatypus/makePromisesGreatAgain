module.exports = {
  networks: {
    development: {
      host: "34.211.140.66",
      port: 8545, // This is the Ganache default port. You can change it to the conventional 8545 if your network runs on 8545
      network_id: "*", // Match any network id. You may need to replace * with your network Id
      from: "0x329b218791be3b5bc59a3c10d206737636278201", // Add your unlocked account within the double quotes
      gas: 4444444
    }
  }
};
